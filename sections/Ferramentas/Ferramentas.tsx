import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Card {
  title: string;
  img: ImageWidget;
  content: HTMLWidget;
}

export interface Props {
  title: string;
  ferramentas: Card[];
}

const cardanimation = {
  "cardanimation": `    
            @keyframes cardanimation  {
                from{
                    translate: 0 8px;
                }
                to{
                  translate: 0 0;
                }
            }   
          .cardanimation{
            animation: cardanimation 1s ease-in-out;
            animation-iteration-count: infinite;
            animation-direction: alternate;
          }
        `,
};

export default function Ferramentas(props: Props) {
  return (
    <div class="flex flex-col gap-6 py-12 container">
      <style
        dangerouslySetInnerHTML={{
          __html: cardanimation["cardanimation"],
        }}
      >
      </style>
      <h2 class="text-4xl text-center font-bold">{props.title}</h2>

      <div class="flex flex-row gap-4 justify-center items-center flex-wrap">
        {props.ferramentas.map((ferramenta) => (
          <div class="flex flex-col gap-2 justify-center items-center p-2 w-[calc(33.333%-0.75rem)] cardanimation min-h-96 rounded-lg hover:animate-none bg-base-100 hover:scale-105">
            <Image
              width={200}
              height={200}
              src={ferramenta.img}
              loading={"lazy"}
              fetchPriority="low"
            />
            <span class="font-semibold text-2xl text-center">
              {ferramenta.title}
            </span>
            <span
              class="text-center"
              dangerouslySetInnerHTML={{ __html: ferramenta.content }}
            >
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
