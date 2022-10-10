import { Home } from '../ui/screens/home';
import { messagesPageRoutes } from '../application/routes';

export const messagesRoutes = [
  {
    path: messagesPageRoutes.HOME,
    exact: true,
    element: <Home />
  }
];
