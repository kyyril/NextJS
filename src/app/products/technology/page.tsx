"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="h-[900px]">
      <h1>Technology Page</h1>;
      <button
        onClick={() => router.push("/products")}
        className=" bg-green-600"
      >
        goBack products
      </button>
    </div>
  );
}
