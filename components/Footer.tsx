import * as urls from "@/data/urls.ts";
import { IconBrandGithub, IconLemon } from "@tabler-icons";

export default function Footer() {
  return (
    <footer class="border-t-2 border-[#1F1F1F] p-2 flex justify-center items-center">
      <div class="flex gap-4">
        <a
          href={urls.FRESH_URL}
          class="inline-flex gap-1 border-2 border-black rounded-md px-2 py-1 bg-yellow-300"
          style="box-shadow: black 2px 2px"
          target="_blank"
        >
          <IconLemon size={24} stroke="1.5" color="black" />
          <span class="font-semibold font-quicksand">
            Made with Fresh
          </span>
        </a>
        <a
          href={urls.SOURCE_CODE_URL}
          class="inline-flex gap-1 border-2 border-black rounded-md px-2 py-1"
          style="box-shadow: black 2px 2px"
          target="_blank"
        >
          <IconBrandGithub size={24} stroke="1.5" color="black" />
          <span class="font-semibold font-quicksand">
            Source code
          </span>
        </a>
      </div>
    </footer>
  );
}
