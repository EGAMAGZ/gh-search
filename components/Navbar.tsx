import { IconBrandGithub } from "@tabler-icons";
import { ComponentChildren } from "preact";

interface NavbarProps {
  children?: ComponentChildren;
}

export default function Navbar({ children }: NavbarProps) {
  return (
    <nav
      class={`flex border-b-2 border-[#1F1F1F] ${
        !children ? "justify-between" : ""
      }`}
    >
      <div class="bg-[#1F1F1F] p-2">
        <a href="/">
          <IconBrandGithub size={36} stroke="1.5" color="white" />
        </a>
      </div>
      {children && <div class="flex flex-1 p-2">{children}</div>}
      <div class="flex items-center border-l-2 border-[#1F1F1F] p-2">
        asd
      </div>
    </nav>
  );
}
