import footballLogo from "../../assets/football-logo.svg";

const quickLinks = ["Home", "Fixtures", "Teams", "Schedules"];
const extraLinks = ["Transfers", "Top Scorers", "Fan Zone", "Support"];

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#020818] text-slate-200">
      <div className="mx-auto max-w-330 px-4">
        <div className="relative -translate-y-12 rounded-3xl border border-cyan-300/25 bg-linear-to-r from-slate-100 to-slate-200 p-6 shadow-[0_20px_45px_rgba(2,8,24,0.35)] md:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 md:text-4xl">
              Join The Football Newsletter
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              Get transfer news, fixture updates, and fantasy football tips.
            </p>

            <form className="mx-auto mt-6 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-cyan-400"
              />
              <button
                type="submit"
                className="h-11 rounded-xl border-2 border-lime-300 bg-yellow-300 px-6 text-sm font-semibold text-[#0b0f1a] transition-colors hover:bg-yellow-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="-mt-4 border-t border-white/10">
        <div className="mx-auto grid max-w-330 grid-cols-1 gap-10 px-4 py-14 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
              We build a better fantasy football experience with cleaner stats,
              smarter picks, and matchday excitement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-yellow-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Match Center</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {extraLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-cyan-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Subscribe</h3>
            <p className="mt-3 text-sm text-slate-400">
              Weekly football updates straight to your inbox.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="h-10 w-full rounded-lg border border-slate-700 bg-[#0b0f1a] px-3 text-sm text-slate-200 outline-none transition focus:border-cyan-400"
              />
              <button
                type="submit"
                className="h-10 rounded-lg bg-yellow-300 px-4 text-sm font-semibold text-[#0b0f1a] transition-colors hover:bg-yellow-200"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="mx-auto flex max-w-330 flex-col items-center justify-center gap-3 px-4 text-center">
            <img
              src={footballLogo}
              alt="Football logo"
              className="h-14 w-auto opacity-95"
            />
            <p className="text-sm text-slate-400">
              Powered by passion, stats, and football fans.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#010513] py-4 text-center text-xs text-slate-500">
          © 2026 Dream 11 Football. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
