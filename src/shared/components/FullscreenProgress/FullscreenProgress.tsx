import { CircularProgress, Box } from '@material-ui/core';

const FullscreenProgress = () => {
  return (
    <Box position="absolute" width="100%" height="100vh" justifyContent="center" alignItems="center" display="flex">
      <CircularProgress color='primary' variant="indeterminate"  thickness={15} />
      {/* spinner */}
    </Box>
  );
}

export default FullscreenProgress;