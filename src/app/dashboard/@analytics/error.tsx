"use client";

import Card from "@/components/Card";

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <Card>{error.message}</Card>;
    </div>
  );
}
