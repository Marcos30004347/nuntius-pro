import { apiClient } from '../../../../shared/application/api/apiClient';
import { profilePageRoutes } from '../routes.js';

export const useGetUser = () => {
  //const navigate = useNavigate();

  const getUser = async () => {
    let user = await apiClient.get(profilePageRoutes.GET);
    console.log(user);
  };

  return {
    getUser
  };
};
