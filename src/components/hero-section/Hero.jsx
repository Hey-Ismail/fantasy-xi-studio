import footballLogo from "../../assets/football-logo.svg";
import footballBall from "../../assets/football-ball.svg";
import bgShadow from "../../assets/bg-shadow.png";
import { useState } from "react";
import { toast } from "react-toastify";

const Hero = ({ money, setMoney }) => {
  const [creditClamed, setCreditClam] = useState(false);
  const handleFreeCredit = () => {
    if (!creditClamed) {
      setMoney(money + 100);
      setCreditClam(true);
      toast.success("Enjoy you free credit.");
    } else {
      toast.info("you already claimed your free credit.");
    }
  };
  return (
    <section className="px-4 pb-8">
      <div className="mx-auto w-full max-w-330 min-h-136.25 rounded-2xl border border-white/15 bg-[#0b0f1a] text-white relative overflow-hidden flex items-center justify-center">
        <img
          src={bgShadow}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60 pointer-events-none"
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center px-6 py-14">
          <div className="mb-7 flex justify-center">
            <div className="rounded-2xl border border-cyan-300/40 bg-slate-900/65 px-3 py-2 shadow-[0_12px_38px_rgba(34,211,238,0.28)] backdrop-blur-sm">
              <img
                src={footballLogo}
                alt="Football Logo"
                className="h-20 md:h-24 w-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>

          <div className="mb-5 flex justify-center">
            <img
              src={footballBall}
              alt="Football"
              className="h-14 w-14 rounded-full border border-white/35 bg-white/90 p-1 shadow-[0_8px_22px_rgba(56,189,248,0.45)]"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Build Your Ultimate Dream 11 Football Squad
          </h1>

          <p className="text-gray-300 text-base md:text-lg mb-7">
            "Football is simple, but the hardest thing is to play simple
            football."
          </p>

          <button
            onClick={() => handleFreeCredit()}
            className="inline-flex items-center justify-center rounded-xl border-2 border-lime-300 px-6 py-3 text-sm font-semibold text-black bg-yellow-300 hover:bg-yellow-200 transition-colors duration-200"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
