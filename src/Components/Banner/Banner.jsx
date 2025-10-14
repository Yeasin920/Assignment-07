import React from 'react';
import vector1 from './vector1.png';

export default function Banner({inProgress,resolved}) {

  return (
    <div className="banner-m flex justify-between gap-4 mt-6 w-[1440px] mx-auto">
      <div
        className="banner-a w-[708px] h-[250px] items-center flex justify-center bg-cover bg-center rounded-2xl text-white p-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] "
      >
        <div className='text-center'>
          <h2 className="text-[24px] font-medium">In-Progress</h2>
        <h2 className="text-[60px] font-semibold">{inProgress}</h2>
        </div>
      </div>

      <div className="banner-b items-center flex justify-center w-[708px] h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white p-6 rounded-2xl">
       <div className='text-center'>
         <h2 className="text-[24px] font-medium">Resolved</h2>
        <h2 className="text-[60px] font-semibold">{resolved}</h2>
      </div>
       </div>
    </div>
  );
}


