import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import Background from "../background";
import HeadLayout from "../head";
import Header from "../header";
import { backgroundData } from "@/datas/backgroundData";
const montserrat = Montserrat({
  subsets: ["latin"],
});
export default function Template({ children }: PropsWithChildren) {
  return (
    <>
      <HeadLayout />
      <main className={montserrat.className} style={{ height: "100%" }}>
        <Header />
        {children}
        <Background background={backgroundData[2]} />
      </main>
    </>
  );
}
