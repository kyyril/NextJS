export default function Note({ params }: { params: { noteId: String } }) {
  return <h3>note detail {params.noteId}</h3>;
}
