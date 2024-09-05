export default function DashboardLayout({
  children,
  analytics,
  sosial,
  users,
  login,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  sosial: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogin = true;
  return (
    <div>
      <div>{children}</div>
      {isLogin ? (
        <div className="flex">
          <div className="flex flex-col gap-2">
            <div>{users}</div>
            <div>{sosial}</div>
          </div>
          <div className="flex flex-1">{analytics}</div>
        </div>
      ) : (
        <div>{login}</div>
      )}
    </div>
  );
}
