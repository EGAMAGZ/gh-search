import ContentMeta from "../components/ContentMeta.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

export default function HomePage() {
  return (
    <>
      <ContentMeta title="GH Search" noAppendTitle />
      <div class="flex flex-col h-screen">
        <Navbar>
          <div class="flex-1 flex items-center justify-center">
            <h1 class="text-lg md:text-xl font-semibold">
              Welcome to GH Search!
            </h1>
          </div>
        </Navbar>
        <div class="flex-1">
        </div>
        <Footer />
      </div>
    </>
  );
}
