const productLinks = ["Home", "Technologies", "Projects"];
const companyLinks = ["About", "Contact", "Careers"];
const legalLinks = ["Privacy Policy", "Terms of Service"];
const socialLinks = ["GitHub", "Twitter", "LinkedIn"];

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="brand-gradient-bg w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                DS
              </span>
              <span className="text-lg font-bold">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-500 max-w-xs mx-auto lg:mx-0">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex items-center justify-center lg:justify-start gap-3 lg:gap-5">
              {socialLinks.map((social, index) => (
                <span key={social} className="flex items-center gap-3 lg:gap-5">
                  <a
                    href="#contact"
                    className="text-sm text-slate-600 hover:text-pink-600 transition-colors"
                  >
                    {social}
                  </a>
                  {index < socialLinks.length - 1 && (
                    <span className="text-slate-300 lg:hidden">&bull;</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <h4 className="text-xs font-semibold tracking-wider text-slate-900">
              PRODUCT
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href={"#" + link.toLowerCase()}
                    className="text-sm text-slate-600 hover:text-pink-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="text-xs font-semibold tracking-wider text-slate-900">
              COMPANY
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href={"#" + link.toLowerCase()}
                    className="text-sm text-slate-600 hover:text-pink-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="text-xs font-semibold tracking-wider text-slate-900">
              LEGAL
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#legal"
                    className="text-sm text-slate-600 hover:text-pink-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 lg:mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-500">
            &copy; 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#legal" className="text-xs sm:text-sm text-slate-500 hover:text-pink-600">
              Privacy
            </a>
            <a href="#legal" className="text-xs sm:text-sm text-slate-500 hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;