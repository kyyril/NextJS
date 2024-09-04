import { redirect } from "next/navigation";

export default function Page() {
  const isAdmin = false;
  if (!isAdmin) redirect("/products");
  return <h1 className="h-[900px]">Sport Page</h1>;
}
