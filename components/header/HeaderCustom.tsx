import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Links {
  label: string;
  href: string;
}

export interface Props {
  link: Links[];
  img: ImageWidget;
}

export default function Header(props: Props) {
  return (
    <div class="w-full h-20 bg-[#222222c7] px-14 flex justify-between items-center fixed top-0 left-0 right-0 z-20">
      <div>
        <Image
          width={60}
          height={60}
          src={props.img}
          loading={"eager"}
          fetchPriority="high"
        />
      </div>
      <nav>
        <ul class="w-full flex flex-row justify-center items-center text-white font-semibold">
          <li class="cursor-pointer">
            <a>Home</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
