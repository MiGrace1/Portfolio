import { notFound } from "next/navigation";

/** Sends unknown localized URLs to the translated not-found page. */
export default function CatchAllPage() {
  notFound();
}
