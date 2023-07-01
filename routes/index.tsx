import ContentMeta from "../components/ContentMeta.tsx";
import Navbar from "../components/Navbar.tsx";

export default function HomePage() {
  return (
    <>
      <ContentMeta title="GH Search" noAppendTitle />
      <Navbar />
    </>
  );
}
