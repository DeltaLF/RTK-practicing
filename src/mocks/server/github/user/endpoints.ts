import { rest } from 'msw';
import { userMockApiHandlers } from './handlers';

export const userMockApiEndpoints = [
  // test mock user server
  rest.get(
    /user/i,
    (...args) => userMockApiHandlers.getUser(...args)
  ),
]