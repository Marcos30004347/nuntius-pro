import { apiClient } from '../../../../shared/application/api/apiClient';
import { profilePageRoutes } from '../routes.js';

export const useUserUpdate = () => {
  //const navigate = useNavigate();

  const updateUser = () => {
    apiClient.post(profilePageRoutes.EDIT, {});
  };

  return {
    updateUser
  };
};
