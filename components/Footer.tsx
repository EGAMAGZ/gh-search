import { IconLemon, IconBrandGithub } from "@tabler-icons";

export default function Footer() {
  return (
    <footer class="border-t-2 border-[#1F1F1F] p-2">
      <a href="#" class="inline-flex gap-1 border-2 border-black rounded-md px-2 py-1">
        <IconLemon size={24} stroke="1.5" color="black" />
        <span class="font-semibold">
          Made with fresh
        </span>
      </a>
      <a href="#" class="inline-flex gap-1">
        <IconBrandGithub size={24} stroke="1.5" color="black" />
        <span>
          Source code
        </span>
      </a>
    </footer>
  );
}
