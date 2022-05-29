import { User } from '@app/models/backend/user';
export { User as UserResponse } from '@app/models/backend/user';

export interface UserInfoCredentials {
  id: string;
  token: string;
}

export interface EmailPasswordCredentials {
  username: string; //Referencia al email en la api
  password: string;
}

export interface UserRequest extends User {
  password : string;
}

export type UserCreateRequest = Omit<UserRequest, 'id' | 'token' |  'avatar' | 'active' | 'createdAt' | 'updatedAt'>;

