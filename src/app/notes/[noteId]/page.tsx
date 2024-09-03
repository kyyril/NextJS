import { notFound } from "next/navigation";
export default function Note({ params }: { params: { noteId: string } }) {
  {
    if (parseInt(params.noteId) > 100) {
      return notFound();
    }
  }
  return <h3>note detail {params.noteId}</h3>;
}
