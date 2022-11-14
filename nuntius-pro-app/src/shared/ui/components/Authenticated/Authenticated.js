import { Navigate, Outlet } from 'react-router-dom';
import { authenticationPageRoutes } from '../../../../domains/authentication/application/routes';
import { storageService } from '../../../application/services/storageService';

export const Authenticated = () => {
  const userState = storageService.getItem('user');
  const isAuthenticated = !!userState?.username && !!userState?.email;

  if (!userState || !isAuthenticated)
    return <Navigate replace to={authenticationPageRoutes.LOGIN} />;

  return <Outlet />;
};
