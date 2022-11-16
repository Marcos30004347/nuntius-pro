import { apiClient } from '../../../../shared/application/api/apiClient';
import { profilePageRoutes } from '../routes.js';

export const useUserUpdate = () => {
  const updateUser = () => {
    apiClient.post(profilePageRoutes.EDIT, {});
  };

  return {
    updateUser
  };
};
