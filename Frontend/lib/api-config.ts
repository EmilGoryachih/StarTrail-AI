/**
 * StarTrail API Client Configuration
 */

import Cookies from 'js-cookie';
import { OpenAPI } from './api';

// Configure API client
OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL || '';
OpenAPI.WITH_CREDENTIALS = true;

// Add authentication token from cookies
OpenAPI.TOKEN = async () => {
  const token = Cookies.get('access_token');
  return token || '';
};

// Axios interceptor for automatic token refresh could be added here if needed

// Export configured services
export * from './api/services/UserService';
export * from './api/services/TokenService';
export * from './api/services/PoiService';

// Export models
export * from './api/models/UserCreateDTO';
export * from './api/models/UserOutDTO';
export * from './api/models/POIOutDTO';
export * from './api/models/TokenDTO';
export * from './api/models/RefreshTokenDTO';
export * from './api/models/InterestsEnum';

// Export core
export { ApiError } from './api/core/ApiError';
export { CancelablePromise } from './api/core/CancelablePromise';

