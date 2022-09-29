import { rest } from 'msw';
// mock service worker
import { authMockApiHandlers } from './handlers';

// intercept request and return a mocked response
export const authMockApiEndpoints = [
  rest.post(
    /github\/access_token/i,
    (...args) => authMockApiHandlers.accessToken(...args)
  ),
]