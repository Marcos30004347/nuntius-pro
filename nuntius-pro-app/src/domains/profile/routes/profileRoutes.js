import { profilePageRoutes } from '../application/routes';
import { EditProfile } from '../ui/screens/edit';

export const profileRoutes = [
  {
    path: profilePageRoutes.EDIT,
    exact: true,
    element: <EditProfile />
  }
];
