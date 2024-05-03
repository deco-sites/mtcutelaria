export interface Props {
  link: string;
}

export default function Header() {
  return (
    <div class="w-full h-20 bg-base-100 px-14 flex justify-end items-center">
      <div>
      </div>
      <nav>
        <ul class="w-full flex flex-row justify-center items-center text-white font-semibold">
          <li>
            <a>Home</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
