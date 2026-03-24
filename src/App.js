import { useState, useEffect, useRef } from "react";

function FadeInSection({ children, id, bg }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current; // capture ref once
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id={id}
      ref={domRef}
      className={`${bg} min-h-screen py-20 snap-start transition-opacity duration-1000 ease-out scroll-mt-20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-lg z-50">
        <h1 className="text-xl font-bold">Arpan Sharma</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#summary" className="hover:text-pink-400 transition-colors duration-300">Summary</a>
          <a href="#experience" className="hover:text-pink-400 transition-colors duration-300">Experience</a>
          <a href="#education" className="hover:text-pink-400 transition-colors duration-300">Education</a>
          <a href="#references" className="hover:text-pink-400 transition-colors duration-300">References</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1 transition-transform duration-300">
            <span
              className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-gray-700 text-white flex flex-col items-center space-y-4 pt-20 pb-6 z-40 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a href="#summary" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">Summary</a>
        <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">Experience</a>
        <a href="#education" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">Education</a>
        <a href="#references" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">References</a>
      </div>

      {/* Summary */}
      <FadeInSection id="summary" bg="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col justify-center items-center">
        <h2 className="text-5xl font-extrabold mb-4">Hospitality Professional</h2>
        <p className="text-xl max-w-2xl text-center">
          Hospitality professional with over 10 years of kitchen and bar experience in Australia and Nepal.
          Skilled in commercial cookery, pastry preparation, cutting and ingredient preparation, and bar operations.
          Strong focus on hygiene, teamwork, and customer service. Adaptable to multicultural workplaces and motivated
          to contribute to Dubai's hospitality sector.
        </p>
     
      </FadeInSection>

      {/* Experience */}
      <FadeInSection id="experience" bg="bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-10">Experience</h3>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-xl font-semibold">Baker/Chef - Banana Cup Bakery, Kathmandu (2019-2022)</h4>
            <p>Prepared banana bread, cupcakes, managed production, packaging, and hygiene standards.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-xl font-semibold">Pastry Chef - Pattison's Patisserie, Sydney (2012-2015)</h4>
            <p>Prepared pastries including macaroons, applied classical pastry techniques, ensured food safety.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-xl font-semibold">Food Prep Supervisor - Wild Caktus, Sydney (2010-2012)</h4>
            <p>Supervised grilled dishes and pizzas, trained staff, maintained workflow efficiency.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-xl font-semibold">Kitchen & Barback - Shelbourne Hotel, Sydney (2007-2009)</h4>
            <p>Assisted food prep, supported bar operations, inventory control.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-xl font-semibold">Salad Maker - Winter Garden Deli, Sydney (2015-2017)</h4>
            <p>Prepared salads, managed daily prep, ensured presentation quality and food safety.</p>
          </div>
        </div>
      </FadeInSection>

      {/* Education */}
      <FadeInSection id="education" bg="bg-white">
        <h3 className="text-3xl font-bold text-center mb-10">Education</h3>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="p-6 bg-gray-100 shadow rounded">
            <h4 className="text-xl font-semibold">Diploma in Hospitality Management</h4>
            <p>Holmes College, Sydney (2007-2008)</p>
          </div>
          <div className="p-6 bg-gray-100 shadow rounded">
            <h4 className="text-xl font-semibold">Certificate III in Commercial Cookery</h4>
            <p>Illawarra Bankstown College, Sydney (2008-2009, completed; transcript pending)</p>
          </div>
        </div>
      </FadeInSection>

      {/* References */}
      <FadeInSection id="references" bg="bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-10">References</h3>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-xl font-semibold">Pattison's Patisserie</h4>
            <p>Mount Kuring-gai NSW, Australia | +61 437 131 732</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-xl font-semibold">Shelbourne Hotel</h4>
            <p>Sydney CBD, Australia | +61 2 9267 3100</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-xl font-semibold">Winter Garden Deli</h4>
            <p>Sydney CBD, Australia | +61 2 9241 4597</p>
          </div>
        </div>
      </FadeInSection>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2026 Arpan Sharma. All rights reserved.</p>

      </footer>
    </div>
  );
}
