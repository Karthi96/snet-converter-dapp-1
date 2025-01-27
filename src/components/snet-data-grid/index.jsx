import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { RefreshOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toLocalDateTime } from '../../utils/Date';
import Columns from './Columns';
import Rows from './Rows';
import { setAdaConversionInfo, setConversionDirection, setActiveStep } from '../../services/redux/slices/tokenPairs/tokenPairSlice';
import { setFromAddress, setToAddress } from '../../services/redux/slices/wallet/walletSlice';
import { availableBlockchains, conversionStatuses, conversionSteps } from '../../utils/ConverterConstants';
import paths from '../../router/paths';
import { useStyles } from './styles';
import SnetPagination from './Pagination';

const SnetDataGrid = ({
  paginationInfo,
  onPageChange,
  currentPage,
  rows,
  refreshTxnHistory,
  loading,
  onItemSelect,
  pageSizes,
  paginationSize,
  totalNoOfTransaction
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResume = (conversionInfo, conversionStatus) => {
    const activeStep = conversionStatus === conversionStatuses.WAITING_FOR_CLAIM ? conversionSteps.CLAIM_TOKENS : conversionSteps.BURN_TOKENS;

    const { wallet } = conversionInfo;

    dispatch(setFromAddress(wallet.from_address));
    dispatch(setToAddress(wallet.to_address));
    dispatch(setAdaConversionInfo(conversionInfo));
    dispatch(setConversionDirection(availableBlockchains.CARDANO));
    dispatch(setActiveStep(activeStep));
    navigate(paths.Converter);
  };

  return (
    <div className={classes.transactionHistoryTable}>
      <Backdrop open={loading}>
        <CircularProgress color="white" />
      </Backdrop>
      <Box className={classes.transactionHistoryHeader}>
        <Box display="flex" justifyContent="flex-end" marginY={2} className={classes.refreshDataContainer}>
          <LoadingButton loading={loading} onClick={refreshTxnHistory} startIcon={<RefreshOutlined />} variant="text">
            Refresh Data
          </LoadingButton>
        </Box>
        <Box className={classes.totalRecordsContainer}>
          <Typography>{totalNoOfTransaction} transactions</Typography>
        </Box>
      </Box>
      <Columns />
      {rows.map((row) => {
        return (
          <Rows
            key={row.id}
            id={row.id}
            date={toLocalDateTime(row.lastUpdatedAt)}
            fromToken={row.fromToken}
            chainType={row.chainType}
            fromAddress={row.fromAddress}
            toAddress={row.toAddress}
            toToken={row.toToken}
            status={row.status}
            transactions={row.transactions}
            conversionDirection={row.conversionDirection}
            handleResume={() => handleResume(row.conversionInfo, row.status)}
            depositAmount={row.depositAmount}
            receivingAmount={row.receivingAmount}
          />
        );
      })}
      <SnetPagination
        paginationInfo={paginationInfo}
        onPageChange={onPageChange}
        currentPage={currentPage}
        paginationSize={paginationSize}
        onItemSelect={onItemSelect}
        pageSizes={pageSizes}
      />
    </div>
  );
};

SnetDataGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rows: propTypes.arrayOf(propTypes.object).isRequired,
  refreshTxnHistory: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  onItemSelect: propTypes.func.isRequired,
  pageSizes: propTypes.arrayOf(propTypes.number).isRequired,
  paginationSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
  paginationInfo: propTypes.string.isRequired,
  totalNoOfTransaction: propTypes.number.isRequired
};

export default SnetDataGrid;
