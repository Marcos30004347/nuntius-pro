import { useNavigate } from 'react-router-dom';
// import { apiClient } from '../../../../shared/application/api/apiClient';
// import { AuthenticationEndpoints } from '../constants/AuthenticationEndpoints';
import { storageService } from '../../../../shared/application/services/storageService';
import { messagesPageRoutes } from '../../../messages/application/routes';

export const useAuthentation = () => {
  const navigate = useNavigate();

  const login = async (user) => {
    try {
      // const { data } = await apiClient.post(AuthenticationEndpoints.LOGIN, user);
      // console.log(data);

      // use data to fill user object and sabe on local storage
      storageService.saveItem('user', {
        username: 'aline',
        email: 'email@email.com',
        about: 'about'
      });
      navigate(messagesPageRoutes.HOME);
    } catch (e) {
      console.error(e);
    }
  };

  const logout = () => {
    storageService.clear();
  };

  return {
    login,
    logout
  };
};
