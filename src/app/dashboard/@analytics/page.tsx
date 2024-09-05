import Card from "@/components/Card";

export default function Analytics() {
  function getRandomNum(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const item = getRandomNum(["", "p"]);
  if (item === "") {
    throw new Error("error");
  }
  return <Card>Analylics</Card>;
}
