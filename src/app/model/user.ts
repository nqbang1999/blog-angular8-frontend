export interface User {
  id?: string;
  username?: string;
  email?: string;
  role?: {
    id?: string;
    name?: string;
  };

  post?: any;

}
