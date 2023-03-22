export interface iClientRequest {
  full_name: string;
  email: string;
  password: string;
  phone: string;
}

export interface iClient {
  id?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  created_at?: Date;
}

export interface iClientUpdate {
  full_name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

export interface iClientLogin {
  email: string;
  password: string;
}
