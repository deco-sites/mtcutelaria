import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

interface Steps {
    title: string;
    content: HTMLWidget;
    img?: ImageWidget
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
              50% {
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
      `
}

function History({ steps }: HistoryProps) {
    return (
        <div class="flex flex-row w-full">
            <ul className="flex flex-col gap-9 w-full items-center justify-center">
                {steps.map((step) =>
                    <li className="w-full appeartextandimage max-w-[700px]" style={{ animationDuration: "2s" }}>Register
                        <div>
                            <h2>{step.title}</h2>
                            <span dangerouslySetInnerHTML={{ __html: step.content }}></span>
                        </div>
                    </li>
                )}
            </ul>
        </div >
    )
}

export default function SectitonHistory(props: Props) {
    return (
        <div class="w-full h-full">
            <style
                dangerouslySetInnerHTML={{ __html: appeartextandimage["appeartextandimage"] }}
            >
            </style>
            <History steps={props.history.steps} />
        </div>
    )
}