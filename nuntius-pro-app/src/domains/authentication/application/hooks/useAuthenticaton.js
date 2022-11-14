import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { apiClient } from '../../../../shared/application/api/apiClient';
// import { AuthenticationEndpoints } from '../constants/AuthenticationEndpoints';
import { storageService } from '../../../../shared/application/services/storageService';
import { messagesPageRoutes } from '../../../messages/application/routes';

export const useAuthentation = () => {
  const navigate = useNavigate();

  const login = async (user) => {
    try {
      // const { data } = await apiClient.post(
      //   AuthenticationEndpoints.LOGIN,
      //   user
      // );
      // console.log(data);

      // use data to fill user / access token object and sabe on local storage
      storageService.saveItem('user', {
        username: 'aline',
        email: 'email@email.com',
        about: 'about'
      });
      storageService.saveItem('accessToken', '');

      navigate(messagesPageRoutes.HOME);
    } catch (e) {
      console.error(e);
      storageService.saveItem('accessToken', 'aline');
      toast.error('Não foi possível realizar login.');
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
