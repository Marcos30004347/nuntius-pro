import { messagesRoutes } from '../../domains/messages/routes/messagesRoutes';
import { authenticationRoutes } from '../../domains/authentication/routes/messagesRoutes';

export const authenticatedRoutes = [...messagesRoutes, ...authenticationRoutes];
