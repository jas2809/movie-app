import { jwtDecode } from 'jwt-decode';

// No need to import jwtDecode since we're not using real JWT yet

// Simply return the role stored during login
export function getRoleFromToken() {
  return localStorage.getItem('role');
}




