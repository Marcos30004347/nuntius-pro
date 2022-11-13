import { Navigate } from 'react-router-dom';
import { authenticationPageRoutes } from '../../../../domains/authentication/application/routes';
import { storageService } from '../../../application/services/storageService';

export const Authenticated = ({ children }) => {
  const userState = storageService.getItem('user');
  const isAuthenticated = Object.values(userState).every((param) => param);

  if (!userState || !isAuthenticated)
    return <Navigate replace to={authenticationPageRoutes.LOGIN} />;

  return children;
};
