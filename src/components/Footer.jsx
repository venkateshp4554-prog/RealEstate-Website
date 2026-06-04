import React from 'react';
import { ArrowUp } from 'lucide-react';

const Facebook = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-6 2.7-6 6v1z"/>
  </svg>
);

const Youtube = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.3 12 3.3 12 3.3s-7 0-9.1.5c-1.2.3-2.1 1.2-2.4 2.4C0 8.3 0 12 0 12s0 3.7.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.1.5 9.1.5 9.1.5s7 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/>
  </svg>
);

const Twitter = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.2 2.4h3.3L14.2 11l8.5 11.3h-6.7L10.7 15l-6 7.3H1.4l7.8-8.9L1 2.4h6.9l4.8 6.3 5.5-6.3zm-1.2 17.6h1.8L7.1 4.2H5.1l11.9 15.8z"/>
  </svg>
);

const Linkedin = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const Pinterest = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.091.377-.293 1.194-.333 1.359-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.27 1.042-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1f1f1f] text-slate-300 pt-16 pb-6 border-t-[3px] border-red-600 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-stone-800 text-left">
          
          {/* Col 1: About NexaHaven Group */}
          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-base border-b-2 border-red-600 pb-2 w-fit">
              About NexaHaven Group
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              We are an online real estate developer company, with branches all over Andhra Pradesh, Telangana and Karnataka. Our expert advisors function on the fundamentals of trust and transparency. The digital marketplace with its extensive range of options is easy to get lost in. At NexaHaven Group, we guide the home buyers right from the start of their home search till the very end.
            </p>
          </div>

          {/* Col 2: Property Type */}
          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-base border-b-2 border-red-600 pb-2 w-fit">
              Property Type
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <button onClick={() => handleNavClick('projects')} className="hover:text-red-500 hover:translate-x-1 transition-all">
                  Property sale in Hyderabad
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className="hover:text-red-500 hover:translate-x-1 transition-all">
                  Property sale in Bangalore
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className="hover:text-red-500 hover:translate-x-1 transition-all">
                  Property sale in Visakhapatnam
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className="hover:text-red-500 hover:translate-x-1 transition-all">
                  Property sale in Vizianagaram
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Useful Links */}
          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-base border-b-2 border-red-600 pb-2 w-fit">
              Useful Links
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <button onClick={() => handleNavClick('projects')} className="hover:text-red-500 hover:translate-x-1 transition-all">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-red-500 hover:translate-x-1 transition-all">
                  Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-red-500 hover:translate-x-1 transition-all">
                  Events
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-red-500 hover:translate-x-1 transition-all">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-red-500 hover:translate-x-1 transition-all">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Office Address */}
          <div className="space-y-4">
            <h3 className="text-white font-display font-bold text-base border-b-2 border-red-600 pb-2 w-fit">
              Office Address
            </h3>
            <div className="text-xs text-slate-400 space-y-2 leading-relaxed font-semibold">
              <p>
                Plot No:LIG 17, D.No:4-51-13/1,<br />
                NexaHaven Group Building,<br />
                Lawsons Bay Colony,<br />
                Visakhapatnam, AP - 530017
              </p>
              <div className="space-y-0.5 pt-1">
                <div>Phone : 0891-2576235</div>
                <div>Mobile : (+91)-7610-666-999</div>
                <div>Email : info@nexahaven.com</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-semibold text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>◆</span>
            <span>2026 NexaHaven Group. All Rights Reserved. An ISO 9001:2015 certified company</span>
          </div>

          {/* Social Icons in Red Circles */}
          <div className="flex gap-2">
            <a href="#" className="bg-red-600 text-white hover:bg-red-700 p-2 rounded-full transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="bg-red-600 text-white hover:bg-red-700 p-2 rounded-full transition-colors" aria-label="Youtube">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" className="bg-red-600 text-white hover:bg-red-700 p-2 rounded-full transition-colors" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="bg-red-600 text-white hover:bg-red-700 p-2 rounded-full transition-colors" aria-label="Linkedin">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="bg-red-600 text-white hover:bg-red-700 p-2 rounded-full transition-colors" aria-label="Pinterest">
              <Pinterest className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-[#2f2f2f] hover:bg-red-600 text-white p-2.5 rounded shadow-lg border border-stone-700 hover:border-red-500 transition-colors z-40 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4.5 w-4.5" />
      </button>
    </footer>
  );
}
