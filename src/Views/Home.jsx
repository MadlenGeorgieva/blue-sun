import Countdown from "../Components/Home/Countdown";
import TicketActions from "../Components/TicketActions";
import FestivalTabs from "../Components/Home/FestivalTabs";

// Displays the festival countdown, quick action buttons,
// and tab sections with festival information
function Home() {
  return (
    <>
      <Countdown />
      <TicketActions />
      <FestivalTabs />
    </>
  );
}

export default Home;