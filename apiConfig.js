const configuredBaseUrl = process.env.EXPO_PUBLIC_API_BASE_URL;

if (!configuredBaseUrl || !/^https:\/\/[^/?#@\s]+(?:\/[^?#\s]*)?$/.test(configuredBaseUrl)) {
  throw new Error('Set EXPO_PUBLIC_API_BASE_URL to an HTTPS API URL in .env. See .env.example.');
}

export const API_BASE_URL = configuredBaseUrl.replace(/\/+$/, '');
