import { checkAuth } from "./actions";
import AdminClient from "./AdminClient";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const isAuth = await checkAuth();

  return (
    <div className="min-h-screen bg-background">
      <AdminClient isAuth={isAuth} />
    </div>
  );
}
