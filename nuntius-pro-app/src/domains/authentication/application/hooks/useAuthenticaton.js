import { apiClient } from '../../../../shared/application/api/apiClient';
import { AuthenticationEndpoints } from '../constants/AuthenticationEndpoints';

export const useAuthentation = () => {
  const login = async (user) => {
    console.log('ola');
    const { data } = await apiClient.post(AuthenticationEndpoints.LOGIN, user);
    console.log(data);
    // adds storage
  };

  return {
    login
  };
};
