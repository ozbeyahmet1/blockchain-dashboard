import { Montserrat, Open_Sans } from "next/font/google";
import { PropsWithChildren } from "react";
import Background from "../background";
import HeadLayout from "../head";
import Header from "../header";
import { backgroundData } from "@/datas/backgroundData";
const montserrat = Open_Sans({
  subsets: ["latin"],
});
export default function Template({ children }: PropsWithChildren) {
  return (
    <>
      <HeadLayout />
      <main className={montserrat.className} style={{ height: "100%" }}>
        <Header />
        {children}
        <Background background={backgroundData[3]} />
      </main>
    </>
  );
}
