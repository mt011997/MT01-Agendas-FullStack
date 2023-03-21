export interface iClientRequest {
  full_name: string;
  email: string;
  password: string;
  phone: string;
}

export interface iClient {
  id?: string | null;
  full_name?: string | null;
  email?: string | null;
  phone?: string | null;
  created_at?: Date | null;
}
