import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


function Home() {
  return (
    
    <div className="min-h-screen bg-slate-950 text-white  ">
       <div > 

  <Navbar />


</div>



<div className="flex flex-col justify-center min-h-screen text-center px-6 bg-[url(/img/green4.png)] bg-cover bg-center">

  <div className="flex flex-wrap justify-center  gap-4 mt-80">

    <Link
      to="/prediction"
      className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition"
    >
      Get Started
    </Link>

    <Link
      to="/dashboard"
      className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
    >
      Dashboard
    </Link>

    <Link
      to="/impact-calculator"
      className="bg-green-600 px-5 py-3 rounded-lg text-white"
    >
      🌍 Impact Calculator
    </Link>

    <Link
      to="/weather"
      className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg"
    >
      🌦 Weather
    </Link>

  </div>
</div>

      
      {/* <div className="flex flex-col  justify-center min-h-[100vh] text-center px-6   bg-[url(/img/green4.png)] ">

       
        <div className="mt-116  flex gap-4  items-start ml-20 ">

          <Link
            to="/prediction"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            Get Started
          </Link>

          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            Dashboard
          </Link>

          <Link
  to="/impact-calculator"
  className="bg-green-600 px-5 py-3 rounded-lg text-white"
>
  🌍 Impact Calculator
</Link>
<Link
  to="/weather"
  className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg"
>
  🌦 Weather
</Link>
            

        </div>

      </div>
 */}




      {/* <div className="flex flex-wrap gap-4 mt-8">

  <Link
    to="/dashboard"
    className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
  >
    📊 Dashboard
  </Link>

  <Link
    to="/chatbot"
    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
  >
    🤖 AI Assistant
  </Link>

  <Link
    to="/pdf-analyzer"
    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg"
  >
    📄 PDF Analyzer
  </Link>

  <Link
    to="/impact-calculator"
    className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-lg"
  >
    🌍 Impact Calculator
  </Link>

</div> */}








      {/* SDG Section */}
     
      <div className="py-20 px-10 mt-0 bg-[url(/img/green3.png)]">

        <h2 className="text-4xl font-bold text-center mb-10">
          Sustainable Development Goals
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 p-6 rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
            <h3 className="text-green-400 text-xl font-bold mb-2">
              SDG 13
            </h3>

            <p>Climate Action</p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 p-6 rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
            <h3 className="text-blue-400 text-xl font-bold mb-2">
              SDG 6
            </h3>

            <p>Clean Water & Sanitation</p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 p-6 rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
            <h3 className="text-yellow-400 text-xl font-bold mb-2">
              SDG 11
            </h3>

            <p>Sustainable Cities & Communities</p>
          </div>

        </div>

      

      {/* Features Section */}
      <section className="py-20 px-10">

        <h2 className="text-4xl font-bold text-center mb-10">
          Key Features
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 p-6 rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
            🌦 Climate Prediction
          </div>

          <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 p-6 rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
            📊 Analytics Dashboard
          </div>

          <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 p-6 rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
            🤖 AI Assistant
          </div>

          <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 p-6 rounded-xl hover:scale-105 transition duration-300 cursor-pointer">
            🌱 Sustainability Insights
          </div>

        </div>

      </section>

      </div>




      <section className="w-full bg-[url(/img/green9.jpg)] bg-cover bg-center py-16 px-4 sm:px-10">

  {/* Project Team */}
  <div className="py-10 sm:py-20">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
      Project Team
    </h2>

    <div className="max-w-3xl mx-auto">
      <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 p-6 sm:p-8 rounded-xl text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-green-400">
          Hemraj Jangid
        </h3>

        <p className="text-gray-300 mt-3">
          AI Developer & Sustainability Innovator
        </p>
      </div>
    </div>
  </div>

  {/* Contact */}
  <div className="py-10 sm:py-20">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
      Contact
    </h2>

    <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 p-6 sm:p-8 rounded-xl max-w-2xl mx-auto text-center">

      <p className="text-gray-300">
        EcoGuardian AI helps communities prepare for climate risks using Artificial Intelligence.
      </p>

      <p className="mt-4 text-green-400">
        SDG 13 • Climate Action
      </p>

    </div>
  </div>

  {/* Footer */}
  <footer className="bg-black py-6 text-center text-gray-400 mt-10">
    © 2026 EcoGuardian AI <br />
    Built for IBM SkillsBuild & AICTE Sustainability Internship
  </footer>

</section>


        {/* <section className=" w-380 object-cover py-20 px-10 mt-0 bg-[url(/img/green9.jpg)] object-cover">
      <div className="py-20 px-10 ">

  <h2 className="text-4xl font-bold text-center mb-10">
    Project Team
  </h2>

  <div className="max-w-3xl mx-auto">

    <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 p-8 rounded-xl text-center">

      <h3 className="text-2xl font-bold text-green-400">
        Hemraj Jangid
      </h3>

      <p className="text-gray-300 mt-3">
        AI Developer & Sustainability Innovator
      </p>

    </div>

  </div>

</div>


<div className="py-20 px-10">

  <h2 className="text-4xl font-bold text-center mb-10">
    Contact
  </h2>

  <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 p-8 rounded-xl max-w-2xl mx-auto text-center">

    <p className="text-gray-300">
      EcoGuardian AI helps communities prepare for
      climate risks using Artificial Intelligence.
    </p>

    <p className="mt-4 text-green-400">
      SDG 13 • Climate Action
    </p>

  </div>

</div>

      <footer className="bg-black py-6 text-center text-gray-400">

  © 2026 EcoGuardian AI

  <br />

  Built for IBM SkillsBuild & AICTE Sustainability Internship

</footer>
</section> */}

    </div>
  );
}

export default Home;