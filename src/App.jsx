import "./App.css";
import Header from "./Components/Header";
import Countdown from "./Components/Countdown";
import TicketActions from "./Components/TicketActions";
import FestivalTabs from "./Components/FestivalTabs";

function App() {
  return (
    <main className="app">
      <Header />
      <Countdown />
      <TicketActions />
      <FestivalTabs />
    </main>
  );
}

export default App;