export interface iContactRequest {
  full_name: string;
  email: string;
  phone: string;
}

export interface iContact {
  id?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  created_at?: Date;
  clientId?: string;
}

export interface iContactUpdate {
  full_name?: string;
  email?: string;
  phone?: string;
}
