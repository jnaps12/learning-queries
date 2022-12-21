import { Navigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

export const ProtectedRoute = ({ children }) => {
  // const { user } = useAuth();
  const {user} = true;
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
