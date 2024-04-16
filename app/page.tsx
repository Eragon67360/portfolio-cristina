import React from "react";
import projets from '@/public/json/projets.json'
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <div className="max-w-[1440px] w-[95dvw]  flex flex-wrap">

        {projets.map((projet, index) => {
          return (
            <Card key={index} bg_color={projet.bg_color} logo={projet.logo} name={projet.name} name_color={projet.name_color} complete_name={projet.complete_name} content={projet.content} />
          )
        })}
        
      </div>
    </main>
  );
}
