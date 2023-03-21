export interface iContactRequest {
  full_name: string;
  email: string;
  phone: string;
  clientId: string;
}

export interface iContact {
  id?: string | null;
  full_name?: string | null;
  email?: string | null;
  phone?: string | null;
  created_at?: Date | null;
  clientId?: string | null;
}
