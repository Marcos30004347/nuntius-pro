import { profileRoutes } from '../../domains/profile/routes/profileRoutes';
import { messagesRoutes } from '../../domains/messages/routes/messagesRoutes';

export const authenticatedRoutes = [...messagesRoutes, ...profileRoutes];
