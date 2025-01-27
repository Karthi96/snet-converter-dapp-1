import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box } from '@mui/material';
import { availableBlockchains } from '../../utils/ConverterConstants';
import { setAdaConversionInfo, setConversionDirection } from '../../services/redux/slices/tokenPairs/tokenPairSlice';
import PendingTxnAlert from './PendingTxnAlert';
import styles from './styles';

const GeneralLayout = lazy(() => import('../../layouts/GeneralLayout'));
const WelcomeBox = lazy(() => import('./WelcomeBox'));
const ADATOERC20ETH = lazy(() => import('./ADATOERC20ETH'));
const ERC20TOADA = lazy(() => import('./ERC20TOADA'));

const Converter = () => {
  const { tokenPairs } = useSelector((state) => state);
  const { conversionDirection } = tokenPairs;

  const dispatch = useDispatch();

  const onADATOETHConversion = (conversionInfo) => {
    dispatch(setAdaConversionInfo(conversionInfo));
    dispatch(setConversionDirection(availableBlockchains.CARDANO));
  };

  return (
    <GeneralLayout>
      <Box sx={styles.pendingTxnAlertContainer}>
        <PendingTxnAlert />
      </Box>
      {conversionDirection === availableBlockchains.CARDANO ? (
        <Grid display="flex" justifyContent="center">
          <Grid item>
            <ADATOERC20ETH />
          </Grid>
        </Grid>
      ) : (
        <Grid display="flex" alignItems="flex-start" container spacing={2} sx={styles.homePageContainer}>
          <Grid item xs={12} md={4}>
            <WelcomeBox />
          </Grid>
          <Grid item xs={12} md={6} sx={styles.converterBox}>
            <ERC20TOADA onADATOETHConversion={onADATOETHConversion} />
          </Grid>
        </Grid>
      )}
    </GeneralLayout>
  );
};

export default Converter;
