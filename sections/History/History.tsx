import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Steps {
  title: string;
  content: HTMLWidget;
  img?: ImageWidget;
}

export interface HistoryProps {
  steps: Steps[];
}

export interface Props {
  title: string;
  history: HistoryProps;
}

const appeartextandimage = {
  "appeartextandimage": `    
          @keyframes appeartextandimage  {
              0%{
                  opacity: 0;
                  translate: -100vw 0;
              }
              30%,
              40%,
              50%,
              60% {
                  opacity: 1;
                  translate: 0 0;
              }
              100%{
                opacity: 0;
                translate: 100vw 0;
              }
          }   
          .appeartextandimage{
            animation: appeartextandimage 7s ease-out;
            animation-timeline:view();

        }
      `,
};

function History({ steps }: HistoryProps) {
  return (
    <div class="flex flex-row w-full">
      <ul className="flex flex-col gap-9 w-full items-center justify-center">
        {steps.map((step) => (
          <li
            className="w-full appeartextandimage max-w-[700px] justify-center items-center flex flex-col gap-4"
            style={{ animationDuration: "2s" }}
          >
            <div class="flex flex-col gap-3 justify-center items-center">
              <h2 class="text-4xl font-semibold text-center">{step.title}</h2>
              <span
                class="text-center"
                dangerouslySetInnerHTML={{ __html: step.content }}
              >
              </span>
            </div>
            {step.img && (
              <Image
                width={500}
                height={500}
                src={step.img}
                fetchPriority="low"
                loading={"lazy"}
                class="object-cover rounded-md"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SectitonHistory(props: Props) {
  return (
    <div class="w-full h-full gap-7 py-12 flex-col flex justify-center items-center">
      <style
        dangerouslySetInnerHTML={{
          __html: appeartextandimage["appeartextandimage"],
        }}
      >
      </style>
      <h2 class="text-4xl text-center font-bold">{props.title}</h2>
      <History steps={props.history.steps} />
    </div>
  );
}
