import Card from "@/components/Card";

export default function Analytics() {
  function getRandomNum(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return <Card>Analylics</Card>;
}
