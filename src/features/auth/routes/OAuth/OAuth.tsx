import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { StringParam, useQueryParam } from 'use-query-params';
import { authApi } from '../../../../api/auth/api';
import FullscreenProgress from '../../../../shared/components/FullscreenProgress/FullscreenProgress';
import { useTypedDispatch } from '../../../../shared/redux/store';
import { authSlice } from '../../slice';

const OAuth = () => {
  const dispatch =  useTypedDispatch();
  const [code] = useQueryParam('code', StringParam); 
  // parse the url params
  // http://xxx?code=abc
  // code: abc
  const accessTokenQueryResult = authApi.endpoints.getAccessToken.useQuery(code!, { 
    // code!: a non-null assertion
    // skip if code is undefined, null
    skip: !code
  });
  const { data } = accessTokenQueryResult; // response
  const accessToken = data?.access_token;

  useEffect(() => {
    if (!accessToken) return;
// update slice if accessToekn is fetched
    dispatch(authSlice.actions.updateAccessToken(accessToken));
  }, [dispatch, accessToken]);

  if (!code) {
    return <Redirect to="/login" />;
  }

  if (data?.error) {
    return (
      <>
        Error: {data.error}
      </>
    );
  }

  return (
    <FullscreenProgress />
  );
}

export default OAuth;