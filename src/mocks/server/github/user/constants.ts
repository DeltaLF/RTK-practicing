import { nanoid } from '@reduxjs/toolkit';

export const VALID_ACCESS_TOKEN = nanoid(); // non-cryptographically-secure random ID
export const INVALID_ACCESS_TOKEN = 'INVALID_ACCESS_TOKEN';