import { toast } from 'react-toastify';
import { apiClient } from '../../../../shared/application/api/apiClient';
import { profilePageRoutes } from '../routes.js';

export const useGetUser = () => {
  const getUser = async () => {
    try {
      let user = await apiClient.get(profilePageRoutes.GET);
      return user.data;
    } catch (e) {
      toast.error('Não foi possível obter os dados do usuário');
    }
  };

  return {
    getUser
  };
};
