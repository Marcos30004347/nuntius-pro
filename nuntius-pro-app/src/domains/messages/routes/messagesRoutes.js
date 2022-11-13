import { Home } from '../ui/screens/home';
import { messagesPageRoutes } from '../application/routes';
import { Chat } from '../ui/screens/chat';
import { Room } from '../ui/screens/room';

export const messagesRoutes = [
  {
    path: messagesPageRoutes.HOME,
    exact: true,
    element: <Home />
  },
  {
    path: messagesPageRoutes.ROOM,
    exact: true,
    element: <Room />
  },
  {
    path: messagesPageRoutes.CHAT,
    exact: true,
    element: <Chat />
  }
];
