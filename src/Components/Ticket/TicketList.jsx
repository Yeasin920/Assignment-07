import React from "react";

export default function TicketList({ ticketinfo, addTicket }) {
  return (
    
    <div className="w-[1050px]">
    <h1 className="text-2xl font-semibold mb-4">Customer Tickets</h1>

      <div className="grid grid-cols-2 gap-4">
      {ticketinfo.map((info) => (
       <div
       key={info.id}
       onClick={() => addTicket(info)}
       className="cursor-pointer shadow-xl rounded-xl p-4 bg-white hover:bg-gray-100 transition"
       >
       <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-lg">{info.title}</h3>
        <button className="btn rounded-2xl bg-green-300 text-[#0B5E06]">
        {info.status}
         </button>
         </div>
     
        <p className="text-[#627382] mb-3">{info.description}</p>

        <div className="flex justify-between text-sm text-[#627382]">
        <div className="flex gap-4">
        <p>ID: {info.id}</p>
        <p className="text-[#F83044]">{info.priority}</p>
        </div>

           <div className="flex gap-4">
           <p>{info.customer}</p>
           <p>
            <i className="fa-regular fa-calendar mr-2"></i>
            {info.createdAt}
             </p>
             </div>
           </div>
           </div>
        ))}
      </div>
    </div>
  );
}
