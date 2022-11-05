import { Login } from '../ui/screens/login';
import { authenticationPageRoutes } from '../application/routes';

export const authenticationRoutes = [
  {
    path: authenticationPageRoutes.LOGIN,
    exact: true,
    element: <Login />
  }
];
