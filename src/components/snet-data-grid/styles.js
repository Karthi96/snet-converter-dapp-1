import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  columnsContainer: {
    marginTop: 48,
    '& p': {
      color: '#9b9b9b',
      fontSize: 14,
      fontWeight: 600,
      opacity: 0.53
    }
  },
  transactionHistoryTable: { padding: '0 16px' },
  transactionHistoryHeader: {
    borderBottom: '1px solid #f5f7f8'
  },
  refreshDataContainer: {
    padding: '11px 0',
    margin: 0,
    '& button': {
      color: '#4086FF',
      fontSize: 14,
      lineHeight: '16px',
      textTransform: 'capitalize',
      '& svg': { fontSize: 18 }
    }
  },
  colName: {
    opacity: 0.53,
    color: '#9B9B9B',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: '18px'
  },
  transactionDataRow: {
    padding: '8px 17px 8px 15px',
    borderTop: '1px solid #f5f7f8',
    marginTop: 10,
    '& > div': {
      padding: `0 !important`,
      display: 'flex',
      alignItems: 'center'
    },
    '& p': { fontSize: 14 },
    '& span': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      display: 'inherit'
    }
  },
  statusData: {
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      marginRight: 4,
      fontSize: 13
    }
  },
  expandArrowContainer: {
    '& div': {
      padding: 0,
      '& button': {
        padding: 0,
        '& svg': { fontSize: 24 }
      }
    }
  },
  expandedData: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f1f1f1'
  },
  expandedDataWrapper: {
    width: '100%',
    // padding: '26px 20px 26px 36px',
    borderTop: '1px solid #f5f7f8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
    // backgroundColor: '#fff'
  },
  expandedDataCol: {
    padding: '26px 20px 15px 60px',
    backgroundColor: '#fff',
    '& div p': {
      color: '#9B9B9B',
      fontSize: 14,
      letterSpacing: 0.17
    }
  },
  expandedDataRows: {
    padding: '7px 20px 7px 60px',
    background: '#fff',
    marginTop: 3
  },
  detailsData: {
    '& a': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      display: 'inherit',
      '& span': { color: '#4086FF' }
    }
  },
  alignRight: {
    display: 'inline !important',
    textAlign: 'right'
  }
});