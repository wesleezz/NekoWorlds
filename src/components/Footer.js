export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-zinc-50/50 py-6 dark:border-zinc-800 dark:bg-zinc-800/30">
      <div className="container px-6 mx-auto grid gap-3">
        <div className="grid grid-cols-2 items-start sm:items-center">
          <div className="grid items-center justify-start gap-5 text-sm sm:grid-flow-col">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="h-9 w-9 text-teal-500"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.667 2.667H8v2.666H5.333V8H2.667v5.333H0v8h18.667V16h2.666v-5.333H24V5.333h-2.667V2.667H16v2.666h-2.667V2.667h-2.666Z"
              ></path>
            </svg>
            <div>
              Большая часть сайта была взята из{" "}
              <a href="https://p-l.cc">
                <b>Pepeland</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
