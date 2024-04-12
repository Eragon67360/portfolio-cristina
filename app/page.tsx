import React from "react";
import Image from "next/image";
import AresDomus from "@/components/Logos/AresDomus";
import Curefab from "@/components/Logos/Curefab";
import MainLogo from "@/components/Logos/MainLogo";
import Montezuma from "@/components/Logos/Montezuma";
import Moca from "@/components/Logos/Moca";
import Sakana from "@/components/Logos/Sakana";
import smurfit from '@/public/images/smurfit.png';

import Card from "@/components/Card";
const contentAresDomus = ['Portfolio_cristina_page-0004.jpg', 'Portfolio_cristina_page-0005.jpg', 'Portfolio_cristina_page-0006.jpg']
const contentMoca = ['Portfolio_cristina_page-0007.jpg', 'Portfolio_cristina_page-0008.jpg']
const contentMontezuma = ['Portfolio_cristina_page-0009.jpg', 'Portfolio_cristina_page-0010.jpg', 'Portfolio_cristina_page-0011.jpg', 'Portfolio_cristina_page-0012.jpg', 'Portfolio_cristina_page-0013.jpg']
const contentSmurfkit = ['Portfolio_cristina_page-0014.jpg', 'Portfolio_cristina_page-0015.jpg', 'Portfolio_cristina_page-0016.jpg', 'Portfolio_cristina_page-0017.jpg']
const contentSakana = ['Portfolio_cristina_page-0018.jpg', 'Portfolio_cristina_page-0019.jpg', 'Portfolio_cristina_page-0020.jpg']


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <div className="max-w-[1440px] w-[1440px] grid grid-cols-3">
        <Card bg_color={"#E2E2DB"} logo={<MainLogo />} name={"Next Project"} name_color={"black"} padding_top={132} content={contentAresDomus} />
        <Card bg_color={"#E2E2DB"} logo={<MainLogo />} name={"Next Project"} name_color={"black"} padding_top={132} content={contentAresDomus} />
        <Card bg_color={"#E2E2DB"} logo={<MainLogo />} name={"Next Project"} name_color={"black"} padding_top={132} content={contentAresDomus} />

        <Card bg_color={"#000"} logo={<Curefab />} name={"Website redesign"} name_color={"white"} padding_top={192} content={contentAresDomus} />
        <Card bg_color={"#597177"} logo={<Sakana />} name={"Swiss watch design"} name_color={"white"} padding_top={124} content={contentSakana} />
        <Card bg_color={"#FFF"} logo={<Image src={smurfit} alt="smurfit logo" width={279} height={79} />} name={"Packaging design"} name_color={"black"} padding_top={196} content={contentSmurfkit} />
        <Card bg_color={"#91A399"} logo={<Montezuma />} name={"Marketing strategy + packaging design"} name_color={"black"} padding_top={156} content={contentMontezuma} />
        <Card bg_color={"#718B75"} logo={<Moca />} name={"Brand design"} name_color={"white"} padding_top={140} content={contentMoca} />
        <Card bg_color={"#1D252D"} logo={<AresDomus />} name={"Brand design"} name_color={"white"} padding_top={132} content={contentAresDomus} />
      </div>
    </main>
  );
}
