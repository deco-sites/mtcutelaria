import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

interface Steps {
  title: string;
  content: HTMLWidget;
  img?: ImageWidget;
}

export interface Props {
  steps: Steps[];
}

export default function History({ steps }: Props) {
  return (
    <div class="flex flex-row w-full">
      <ul className="steps steps-vertical">
        {steps.map((step) => (
          <li className="w-full ">
            Register
            <div>
              <h2>{step.title}</h2>
              <span dangerouslySetInnerHTML={{ __html: step.content }}></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
