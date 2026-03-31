import { checkAuth } from "./actions";
import AdminClient from "./AdminClient";

export default async function AdminPage() {
  const isAuth = await checkAuth();

  return (
    <div className="min-h-screen bg-background">
      <AdminClient isAuth={isAuth} />
    </div>
  );
}
