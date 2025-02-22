import { Social } from './Social';
import footer_logo from '../../img/footer.png';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-6 relative mt-16 font-lato">
      {/* Decorative SVG */}
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-900"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-80">
          
          {/* Left Side: Logo & Description */}
          <div className="flex flex-col md:flex-row items-start space-x-6">
            <a href="/" aria-label="Go home" title="Tryzub">
              <img
                src={footer_logo}
                alt="Tryzub Logo"
                className="w-24 h-auto object-contain"
              />
            </a>
            <div className="max-w-md">
              <h2 className="text-2xl font-bold text-gray-100 mb-3">Tryzub</h2>
              <p className="text-base leading-relaxed text-gray-300">
                We are Ukrainian-Canadians from Brandon who wish to know each other in our community. We created our association to keep Ukrainian culture alive.
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-300">
                Our goal is to stay together, learn the Ukrainian language, and contribute to Canada's cultural diversity!
              </p>
            </div>
          </div>

          {/* Right Side: Contacts & Links */}
          <div className="flex flex-col md:items-start">
            <div>
              <h3 className="text-lg font-semibold text-teal-400 mb-2">Contacts</h3>
              <ul className="space-y-2 text-base text-gray-300">
                <li>
                  <span className="font-semibold text-gray-100">Phone:</span>
                  <a href="tel:204-730-2915" className="ml-1 hover:text-teal-400">
                    204-730-2915
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-gray-100">Email:</span>
                  <a href="mailto:ucat@gmail.com" className="ml-1 hover:text-teal-400">
                    ucat@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-gray-100">Address:</span>
                  <a
                    href="https://maps.app.goo.gl/qTwKEVHd5D3iAPHs8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 hover:text-teal-400"
                  >
                    1133 Stickney Ave, Brandon, MB R7A 0E4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-2">Links</h3>
              <Social />
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col-reverse lg:flex-row justify-between items-center">
          <p className="text-sm text-center lg:text-left text-gray-400">
            © 2025 Kochenko. All rights reserved.
          </p>
          <ul className="flex space-x-5">
            <li>
              <a href="/" className="text-sm hover:text-teal-400">F.A.Q</a>
            </li>
            <li>
              <a href="/" className="text-sm hover:text-teal-400">Privacy Policy</a>
            </li>
            <li>
              <a href="/" className="text-sm hover:text-teal-400">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};