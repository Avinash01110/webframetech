import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Webframetech - An intuitive dashboard</title>
        <meta
          name="description"
          content="Webframetech - An intuitive dashboard"
        />
        <meta rel="icon" href="favicon.ico" />
      </Head>
    </div>
  );
}
