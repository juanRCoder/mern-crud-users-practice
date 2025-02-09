import { HOST_BACK } from "../../../config/env.config"

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string; 
}

export const getAllUsers = async (): Promise<User[] | null> => {
  try {
    const response = await fetch(`${HOST_BACK}/users`);
    if (!response.ok) throw new Error("No se ha podido realizar la solicitud");
    const data = await response.json();
    return data.users;
  } catch(error) {
    console.error(error);
    return null;
  }
}

export const createUser = async (body: User) => {
  try {
    const response = await fetch(`${HOST_BACK}/users`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    });
    if (!response.ok) throw new Error("No se ha podido realizar la solicitud");
    const data = await response.json();
    console.log(data)
  } catch(error) {
    console.error(error);
    return null;
  }
}

export const updateUser = async (body: Partial<User>, id: string) => {
  try {
    const response = await fetch(`${HOST_BACK}/users/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    });
    if (!response.ok) throw new Error("No se ha podido realizar la solicitud");
    const data = await response.json();
    console.log(data)
  } catch(error) {
    console.error(error);
    return null;
  }
}

export const deleteUser = async (id: string) => {
  try {
    const response = await fetch(`${HOST_BACK}/users/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    });
    if (!response.ok) throw new Error("No se ha podido realizar la solicitud");
    const data = await response.json();
    console.log(data)
  } catch(error) {
    console.error(error);
    return null;
  }
}