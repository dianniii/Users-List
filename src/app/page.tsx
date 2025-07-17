import UserList from "@/components/usersList";
import { getUsers } from "@/services/users";


export const revalidate = 60;

export default async function HomePage() {
  const users = await getUsers();       
  return <UserList users={users} />;
}
