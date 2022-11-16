import { useNavigate } from 'react-router-dom';
import { apiClient } from '../../../../shared/application/api/apiClient';
import { profilePageRoutes } from '../routes.js';
import { storageService } from '../../../../shared/application/services/storageService';

export const useUserUpdate = () => {
  const navigate = useNavigate();

  const updateUser = async (user_data) => {
    const resp = await apiClient.post('user/profile/edit', user_data);

    storageService.saveItem('user', {
      username: resp.data.user_metadata.username,
      email: resp.data.email,
      about: resp.data.user_metadata.about,
      image_url: resp.data.user_metadata.image_url
    });

    navigate(profilePageRoutes.EDIT);
  };

  return {
    updateUser
  };
};
