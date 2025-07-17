import { notFound } from "next/navigation";
import UserDetails from "@/components/userDetails";
import { getUser } from "@/services/users";

export default async function UserPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params
    const user = await getUser(id)
    if (!user) {
        notFound();
    }

    return <UserDetails user={user} />;
}
