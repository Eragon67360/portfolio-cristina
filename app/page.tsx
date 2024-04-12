import Image from "next/image";
import AresDomus from "@/components/Logos/AresDomus";
import Curefab from "@/components/Logos/Curefab";
import MainLogo from "@/components/Logos/MainLogo";
import Montezuma from "@/components/Logos/Montezuma";
import Moca from "@/components/Logos/Moca";
import Sakana from "@/components/Logos/Sakana";
import smurfit from '@/public/images/smurfit.png'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <div className="max-w-[1440px] w-[1440px] grid grid-cols-3">
        <div className="flex flex-col items-center justify-between pt-[132px] pb-[92px] gap-8 h-[480px] bg-[#E2E2DB]">
          <div className="flex items-center justify-center"><MainLogo /></div>
          <h2 className="uppercase text-xs tracking-[6px] text-center">Next Project</h2>
        </div>
        <div className="flex flex-col items-center justify-between pt-[132px] pb-[92px] gap-8 h-[480px] bg-[#E2E2DB]">
          <div className="flex items-center justify-center"><MainLogo /></div>
          <h2 className="uppercase text-xs tracking-[6px] text-center">Next Project</h2>
        </div>
        <div className="flex flex-col items-center justify-between pt-[132px] pb-[92px] gap-8 h-[480px] bg-[#E2E2DB]">
          <div className="flex items-center justify-center"><MainLogo /></div>
          <h2 className="uppercase text-xs tracking-[6px] text-center">Next Project</h2>
        </div>
        <div className="flex flex-col items-center justify-between pt-[192px] pb-[92px] gap-8 h-[480px] bg-[#000]">
          <div className="flex items-center justify-center"><Curefab /></div>
          <h2 className="uppercase text-xs tracking-[6px] text-center text-white">Website redesign</h2>
        </div>
        <div className="flex flex-col items-center justify-between pt-[124px] pb-[92px] gap-8 h-[480px] bg-[#597177]">
          <div className="flex items-center justify-center"><Sakana /></div>
          <h2 className="uppercase text-xs tracking-[6px] text-center text-white">Swiss watch design</h2>
        </div>
        <div className="flex flex-col items-center justify-between pt-[196px] pb-[92px] gap-8 h-[480px] bg-[#FFF]">
          <div className="flex items-center justify-center"><Image src={smurfit} alt="smurfit logo" width={279} height={79}/></div>
          <h2 className="uppercase text-xs tracking-[6px] text-center text-black">Packaging design</h2>
        </div>
        <div className="flex flex-col items-center justify-between pt-[156px] pb-[92px] gap-8 h-[480px] bg-[#91A399]">
          <div className="flex items-center justify-center"><Montezuma /></div>
          <h2 className="uppercase text-xs tracking-[6px] text-center text-black">Marketing strategy + packaging design</h2>
        </div>
        <div className="flex flex-col items-center justify-between pt-[140px] pb-[92px] gap-8 h-[480px] bg-[#718B75]">
          <div className="flex items-center justify-center"><Moca /></div>
          <h2 className="uppercase text-xs tracking-[6px] text-center text-white">brand design</h2>
        </div>
        <div className="flex flex-col items-center justify-between pt-[132px] pb-[92px] gap-8 h-[480px] bg-[#1D252D]">
          <div className="flex items-center justify-center"><AresDomus /></div>
          <h2 className="uppercase text-xs tracking-[6px] text-center text-white">brand design</h2>
        </div>
      </div>


    </main>
  );
}
