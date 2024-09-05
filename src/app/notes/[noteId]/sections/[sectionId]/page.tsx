"use client";
export default function SectionDetail({
  params,
}: {
  params: {
    noteId: String;
    sectionId: String;
  };
}) {
  function getRandomNum(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const item = getRandomNum(["", "p"]);
  if (item === "") {
    throw new Error("is emptyyy");
  }
  return (
    <h2>
      Note {params.noteId} Section {params.sectionId}{" "}
    </h2>
  );
}
