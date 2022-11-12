import { Home } from '../ui/screens/home';
import { messagesPageRoutes } from '../application/routes';
import { Chat } from '../ui/screens/chat';

export const messagesRoutes = [
  {
    path: messagesPageRoutes.HOME,
    exact: true,
    element: <Home />
  },
  {
    path: messagesPageRoutes.CHAT,
    exact: true,
    element: <Chat />
  }
];
