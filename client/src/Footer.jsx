import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-100 border-t mt-6 border-gray-200 py-8">
      <div className="container mx-auto px-44">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold mb-2">Support</h3>
            <ul>
              <li className="mb-1">
                <a href="#">Help Centre</a>
              </li>
              <li className="mb-1">
                <a href="#">AirCover</a>
              </li>
              <li className="mb-1">
                <a href="#">Anti-discrimination</a>
              </li>
              <li className="mb-1">
                <a href="#">Disability support</a>
              </li>
              <li className="mb-1">
                <a href="#">Cancellation options</a>
              </li>
              <li className="mb-1">
                <a href="#">Report neighbourhood concern</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Hosting</h3>
            <ul>
              <li className="mb-1">
                <a href="#">Airbnb your home</a>
              </li>
              <li className="mb-1">
                <a href="#">AirCover for Hosts</a>
              </li>
              <li className="mb-1">
                <a href="#">Hosting resources</a>
              </li>
              <li className="mb-1">
                <a href="#">Community forum</a>
              </li>
              <li className="mb-1">
                <a href="#">Hosting responsibly</a>
              </li>
              <li className="mb-1">
                <a href="#">Join a free Hosting class</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">VistVault</h3>
            <ul>
              <li className="mb-1">
                <a href="#">Newsroom</a>
              </li>
              <li className="mb-1">
                <a href="#">New features</a>
              </li>
              <li className="mb-1">
                <a href="#">Careers</a>
              </li>
              <li className="mb-1">
                <a href="#">Investors</a>
              </li>
              <li className="mb-1">
                <a href="#">VistaVault.org emergency stays</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 flex justify-between items-center">
          <div className="text-gray-600 text-sm">
            © 2024 VistaVault, Inc. ·{" "}
            <a href="#" className="hover:underline">
              Privacy
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:underline">
              Terms
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:underline">
              Sitemap
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:underline">
              Company details
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <i className="fas fa-globe"></i>
              <span>English (IN)</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>₹</span>
              <span>INR</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
