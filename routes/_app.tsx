import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <body class="bg-[#FDFDFD]">
        <Component />
      </body>
    </html>
  );
}
