import { useNavigate } from 'react-router-dom';
import { apiClient } from '../../../../shared/application/api/apiClient';
import { profilePageRoutes } from '../routes.js';
import { storageService } from '../../../../shared/application/services/storageService';

export const useUserUpdate = () => {
  const navigate = useNavigate();

  const updateUser = async (data) => {
    const resp = await apiClient.post('/user/profile/edit', {
      username: data.username,
      about: data.about,
      image_base64: data.image_base64
    });

    storageService.saveItem('user', {
      username: resp.data.user_metadata.username,
      email: resp.email,
      about: resp.data.user_metadata.about,
      image_url: resp.data.user_metadata.image_url
    });

    storageService.saveItem('accessToken', data.access_token);

    navigate(profilePageRoutes.EDIT);
  };

  return {
    updateUser
  };
};
