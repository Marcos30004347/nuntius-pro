import { messagesRoutes } from '../../domains/messages/routes/messagesRoutes';
import { authenticationRoutes } from '../../domains/authentication/routes/authenticationRoutes';

export const authenticatedRoutes = [...messagesRoutes, ...authenticationRoutes];
