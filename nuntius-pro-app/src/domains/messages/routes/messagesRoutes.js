import { Home } from '../ui/screens/home';
import { SingUp } from '../ui/screens/singUp';
import { messagesPageRoutes } from '../application/routes';

export const messagesRoutes = [
  {
    path: messagesPageRoutes.HOME,
    exact: true,
    element: <Home />
  },
  {
    path: messagesPageRoutes.SINGUP,
    exact: true,
    element: <SingUp />
  }
];
