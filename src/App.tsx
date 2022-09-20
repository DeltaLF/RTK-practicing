import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryParamProvider } from 'use-query-params';
import './index.css';
import FullscreenProgress from './shared/components/FullscreenProgress/FullscreenProgress';
import { persistor, store } from './shared/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<FullscreenProgress />} persistor={persistor}> 
      {/* for persisting redux data */}
        <BrowserRouter>
          <QueryParamProvider ReactRouterRoute={Route}>
            <CssBaseline />
          </QueryParamProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;