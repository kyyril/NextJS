import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>A1 page</h1>
      <Link href={"/a1/a2"}>go A2</Link>
    </div>
  );
}
