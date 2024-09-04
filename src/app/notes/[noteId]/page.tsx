import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { noteId: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: {
      absolute: `Note detail ${params.noteId}`,
    },
  };
};
export default function Note({ params }: Props) {
  {
    if (parseInt(params.noteId) > 100) {
      return notFound();
    }
  }
  return <h3>note detail {params.noteId}</h3>;
}
