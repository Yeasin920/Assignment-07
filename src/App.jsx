import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import TicketList from "./Components/Ticket/TicketList";
import TaskStatus from "./Components/TaskStatus/Task";
 import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [tickets, setTickets] = useState([]);       
  const [inProgress, setInProgress] = useState([]); 
  const [resolved, setResolved] = useState([]);      

  
  useEffect(() => {
    fetch("/card.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("loading:", err));
}, []);

  const addTicket = (ticket) => {
    if (!inProgress.find((i) => i.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      toast(`${ticket.title} added to In-Progress`);
    } }
  const completeTask = (ticket) => {
    setInProgress(inProgress.filter((i) => i.id !== ticket.id)); 
    setResolved([...resolved, ticket]); 
    setTickets(tickets.filter((i) => i.id !== ticket.id));
   toast(`${ticket.title} marked as Resolved`);
  };

  return (
    <>
      <Nav />
      <Banner  inProgress={inProgress.length} resolved={resolved.length} ></Banner>
      <div className="ticket-tems flex justify-between w-[1440px] mx-auto mt-16">
        <TicketList ticketinfo={tickets} addTicket={addTicket}></TicketList>
        <TaskStatus   progress={inProgress} completeTask={completeTask} resolved={resolved}></TaskStatus>
        
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </>
  );
}

export default App;

