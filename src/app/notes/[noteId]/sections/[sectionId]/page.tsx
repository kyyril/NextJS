export default function SectionDetail({
  params,
}: {
  params: {
    noteId: String;
    sectionId: String;
  };
}) {
  return (
    <h2>
      Note {params.noteId} Section {params.sectionId}{" "}
    </h2>
  );
}
