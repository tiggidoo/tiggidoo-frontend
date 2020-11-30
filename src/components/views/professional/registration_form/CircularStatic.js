import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



//STYLES
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
  mainBox: {
    fontSize:'center', 
    textAlign:'center'
  },
  title:{
    fontSize:'2.3rem'
  }
}));

function CircularProgressWithLabel(props) {
  const classes = useStyles();

  return (
    <Box className={classes.mainBox}>
      <Typography variant="caption" component="h2" color="textSecondary" className={ classes.title }>Saving</Typography>
      <Box position="relative" mt={10} display="flex" justifyContent="center">
        <CircularProgress variant="determinate" {...props} style={{ width:'54px', height: '54px' }} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}