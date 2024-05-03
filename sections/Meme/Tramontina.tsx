import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { retry } from "std/async/retry.ts";

export interface Props {
  title: string;
  img: ImageWidget;
}

const meme = {
  "meme": `
    @keyframes meme  {
        from{
            transform: rotateX(0deg);
        }
        to{
          transform: rotateX(180deg);
        }
    }   
    .meme{
      animation: meme 4s ease-out;
      animation-delay: 1s;
            animation-iteration-count: infinite;
      animation-direction: alternate;

  }
    @keyframes tramontina  {
        from{
            opacity:0
        }
        to{
            opacity:1
        }
    }   
    .tramontina{
      animation: tramontina 0.5s ease-out;
      animation-timeline:view();
      animation-range: cover 0% cover 40%;


  }
  @keyframes marca  {
    from{
        opacity:0
    }
    to{
        opacity:1
    }
}   
.marca{
  animation: marca 0.5s ease-out;
  animation-timeline:view();
      animation-range: cover 0% cover 40%;
}
    `,
};

export default function Tramontina(props: Props) {
  return (
    <div class="w-full bg-base-100 flex flex-col gap-4 items-center py-14">
      <style
        dangerouslySetInnerHTML={{
          __html: meme["meme"],
        }}
      >
      </style>
      <div>
        <span class="bg-blue-600 px-5 py-3 text-5xl uppercase tramontina">
          {props.title}
        </span>
      </div>
      <div class="meme">
        <img
          width={700}
          height={300}
          src={props.img}
          class="rotate-45 -my-40"
        />
      </div>
      <div>
        <span class="bg-blue-600 px-5 py-3 text-5xl uppercase marca">
          Tramontina
        </span>
      </div>
    </div>
  );
}
