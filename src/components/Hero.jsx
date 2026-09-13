import bannerImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-6 text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#technologies"
              className="brand-gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-95 transition-opacity"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="border border-slate-300 text-slate-800 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="Layered development stack illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;