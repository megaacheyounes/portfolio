export const DEBUG = false;

export const TOKEN_COOKIE_KEY = 'token';
export const TOKEN_HEADER = 'X-AUTHORIZATION';

const STATS_BASE_URL = (DEBUG ? `http://localhost:3000/` : '') + 'api';
export const STATS_URL = `${STATS_BASE_URL}/stats`;
export const LOGIN_URL = `${STATS_BASE_URL}/login`;


export const DASHBOARD_URL = `/dashboard`;
export const DASHBOARD_LOGIN_URL = `${DASHBOARD_URL}/login`;
export const DASHBOARD_STATS_URL = `${DASHBOARD_URL}/stats`;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 32;

export const TOKEN_VALIDITY_DAYS = 1; // token expires after one (1) day
