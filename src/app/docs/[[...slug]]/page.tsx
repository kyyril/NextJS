export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  let tittle;
  if (params.slug?.length === 1) {
    tittle = `feature ${params.slug[0]}`;
  }
  if (params.slug?.length === 2) {
    tittle = `feature ${params.slug[0]} concept ${params.slug[1]}`;
  }
  if (params.slug?.length === 3) {
    tittle = `feature ${params.slug[0]} concept ${params.slug[1]} exam: ${params.slug[2]}`;
  }
  if (!params.slug) {
    tittle = "Documentation";
  }
  return (
    <div>
      <h1>nav</h1>
      <p>{tittle}</p>
      <h1>footer</h1>
    </div>
  );
}
