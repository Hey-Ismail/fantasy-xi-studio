import { Suspense, useState } from "react";
import Hero from "./components/hero-section/Hero";
import Navbar from "./components/navbar/Navbar";
import PlayerCards from "./components/playercards/PlayerCards";
import Footer from "./components/footer/Footer";
import "./App.css";
// import AvailablePlayers from "./components/playercards/AvailablePlayers";

const data = fetch("/athletes.json").then((res) => res.json());

function App() {
  const [money, setMoney] = useState(100);
  return (
    <>
      <Navbar money={money}></Navbar>
      <Hero money={money} setMoney={setMoney}></Hero>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <PlayerCards
          key={data.id}
          data={data}
          setMoney={setMoney}
          money={money}
        ></PlayerCards>
      </Suspense>
      <Footer></Footer>
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
