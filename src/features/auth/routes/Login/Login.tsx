import { Box, Container, Grid, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';


const Login = () => {
  return (
    <Container maxWidth={false}>
      <Box height="100vh" textAlign="center" clone>
        <Grid container spacing={3} justify="center" alignItems="center" >
          {/* large container */}
          <Grid item xs="auto">
            {/* small container for header and icon */}
            <Typography variant="h5" component="h1" gutterBottom>
              Log in via Github
            </Typography>
            <Link
              href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=repo`}
              color="textPrimary"
              data-testid="login-link"
              aria-label="Login Link"
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Login;