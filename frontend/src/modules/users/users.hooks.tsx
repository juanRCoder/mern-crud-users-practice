import { useEffect, useState } from "react";
import { User } from "./users.interfaces";
import { createUser, fetchAllUsers } from "./users.services";

// corregir la forma de actualizar la lista despues de crear un usaurio
export default function useUsers() {
  const [users, setUsers] = useState<User[]>();

  const getUsers = async () => {
    const data = await fetchAllUsers('/users');
    setUsers(data || []);
  }

  const fetchUser = async (body: User) => {
    await createUser('/users', body);
    await getUsers();
  }

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return { users, fetchUser}
}