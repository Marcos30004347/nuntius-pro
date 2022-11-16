import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiClient } from '../../../../shared/application/api/apiClient';
import { AuthenticationEndpoints } from '../constants/AuthenticationEndpoints';
import { storageService } from '../../../../shared/application/services/storageService';
import { messagesPageRoutes } from '../../../messages/application/routes';

export const useAuthentation = () => {
  const navigate = useNavigate();

  const login = async (user) => {
    try {
      const { data } = await apiClient.post(
        AuthenticationEndpoints.LOGIN,
        user
      );

      storageService.saveItem('user', {
        username: data.user_metadata.username,
        email: data.email,
        about: data.user_metadata.about,
        image_url: data.user_metadata.image_url
      });

      storageService.saveItem('accessToken', data.access_token);

      navigate(messagesPageRoutes.HOME);
    } catch (e) {
      console.error(e);
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
