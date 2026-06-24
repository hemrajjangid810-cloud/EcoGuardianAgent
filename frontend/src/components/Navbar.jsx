// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50">

//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         <h1 className="text-green-400 text-2xl font-bold">
//           EcoGuardian AI
//         </h1>

//         <div className="flex gap-6 text-white">

//           <Link to="/">Home</Link>

//           <Link to="/prediction">Prediction</Link>

//           <Link to="/dashboard">Dashboard</Link>

//           <Link to="/chatbot">AI Assistant</Link>

//           <Link to="/impact-calculator">ImpactCaoculator</Link>

//         </div>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;





import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-green-400 text-2xl font-bold">
          EcoGuardian AI
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-white">
          <Link to="/">Home</Link>
          <Link to="/prediction">Prediction</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/chatbot">AI Assistant</Link>
          <Link to="/impact-calculator">Impact Calculator</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-white bg-slate-900/90">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/prediction">Prediction</Link>
          <Link onClick={() => setOpen(false)} to="/dashboard">Dashboard</Link>
          <Link onClick={() => setOpen(false)} to="/chatbot">AI Assistant</Link>
          <Link onClick={() => setOpen(false)} to="/impact-calculator">
            Impact Calculator
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;