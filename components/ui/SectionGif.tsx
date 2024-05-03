import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title: string;
  conntent: HTMLWidget;
  imgBg: ImageWidget;
  imgFaca: ImageWidget;
}

const faca = {
  "faca": `  
      @keyframes faca  {
        from{
          translate:0 0
        }
        to{
          translate:0 7vh
        }
      }   
  
      .faca{
        animation: faca 7s ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }
    `,
};

export default function SectionGif(props: Props) {
  return (
    <div class="w-full h-full bg-base-100 gap-5">
      <style
        dangerouslySetInnerHTML={{
          __html: faca["faca"],
        }}
      >
      </style>
      <div class="container flex flex-row py-9 gap-5">
        <div class="w-2/4 flex flex-row relative">
          <Image
            width={400}
            height={400}
            src={props.imgBg}
            class="w-auto h-full"
          />
          <Image
            width={500}
            height={500}
            src={props.imgFaca}
            class="absolute top-0 left-0 right-0 bottom-0 m-auto faca"
          />
        </div>
        <div class="w-2/4 flex flex-col justify-start items-center gap-4">
          <h2 class="text-4xl font-bold text-start w-full">{props.title}</h2>
          <span dangerouslySetInnerHTML={{ __html: props.conntent }}></span>
        </div>
      </div>
    </div>
  );
}
