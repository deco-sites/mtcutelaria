import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  img: ImageWidget;
}

export default function FooterCustom(props: Props) {
  return (
    <div class="flex justify-center items-center w-full  bg-base-100 py-6 pt-20">
      <Image
        width={200}
        height={80}
        src={props.img}
        class={" w-24"}
      />
    </div>
  );
}
