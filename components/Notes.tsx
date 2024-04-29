'use client'

import { use, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Notes() {

  const [data, setData] = useState<string[]>([]);

  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"]


  // Obtenemos los datos del localStorage
  // Esto se debe de actualizar cada vez que se actualice el contenido

  useEffect(() => {
    const existingDataString = localStorage.getItem("myData");
    if (existingDataString) {
      const existingData = JSON.parse(existingDataString);
      setData(existingData);
    }
  }, [data]);



  return (
    <div className="max-w-6xl mx-auto px-5">
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 1024: 3 }}>
        <Masonry gutter="20px">
          {data.map((item: any, index: number) => (
            <div key={index} style={{color: colors[index % colors.length]}}>
              <div style={{background: colors[index % colors.length] }} className="px-4 py-3 font-bold text-slate-950">
                Note - {index + 1}
              </div>
              {/* Este div sirve para mostrar el contenido de la nota */}
              <div className="ProseMirror whitespace-pre-line border border-slate-700 px-6 py-4 rounded-lg" dangerouslySetInnerHTML={{__html: item.content}}/>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}
