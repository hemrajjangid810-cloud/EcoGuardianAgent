import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);

      const userMessage = {
        type: "user",
        text: question,
      };

      setMessages((prev) => [
        ...prev,
        userMessage,
      ]);

      const res = await API.post(
        "chat/",
        {
          question,
        }
      );

      const botMessage = {
        type: "bot",
        text: res.data.answer,
      };

      setMessages((prev) => [
        ...prev,
        botMessage,
      ]);

      setQuestion("");

    } catch (error) {
  console.log("Full Error:", error);

  if (error.response) {
    console.log("Response Data:", error.response.data);
    console.log("Status:", error.response.status);
  }

  setMessages((prev) => [
    ...prev,
    {
      type: "bot",
      text: "⚠️ Something went wrong. Please try again."
    }
  ]);
}finally {
      setLoading(false);
    }
  };


  return (
  <div className="min-h-screen bg-[url('/img/green10.png')] bg-cover bg-center">

    <Navbar />

    {/* HERO LAYOUT */}
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-10 gap-10">

      {/* LEFT SIDE (optional branding / image feel area) */}
      <div className="flex-1 md:text-left self-start mt-10 ">
        <h1 className="text-4xl md:text-6xl font-bold  drop-shadow-[0_0_15px_#22d3ee]">
          🌍 EcoGuardian AI
        </h1>

        <p className="text-300 mt-2 max-w-md bg-gradient-to-r from-[#22c55e] via-[#22d3ee] to-[#3b82f6] bg-clip-text text-transparent">
          AI-powered sustainability assistant for climate awareness, water conservation and disaster safety.
        </p>
      </div>

      {/* RIGHT SIDE CHAT BOX */}
      <div className="w-full md:w-[800px] ml-auto mt-8">

        {/* Chat Container */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 h-[520px] overflow-y-auto shadow-2xl">

          {/* Empty state */}
          {messages.length === 0 && (
            <div className="text-center text-gray-200 mt-24">
              <h2 className="text-xl mb-3">
                Welcome to EcoGuardian AI 🌍
              </h2>

              <p className="text-sm mb-4">Ask me about:</p>

              <div className="space-y-2 text-sm">
                <p>💧 Water Conservation</p>
                <p>🌊 Flood Safety</p>
                <p>☀️ Drought Management</p>
                <p>🌱 Climate Sustainability</p>
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-3 ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-xl max-w-[75%] text-sm shadow-md ${
                  msg.type === "user"
                    ? "bg-green-600 text-white"
                    : "bg-black/40 text-white border border-cyan-400/30"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Loading */}
          {loading && (
            <div className="flex justify-start">
              <div className="px-4 py-2 rounded-xl bg-black/40 text-green-300 animate-pulse border border-cyan-400/30">
                🤖 Thinking...
              </div>
            </div>
          )}

        </div>

        {/* INPUT BOX */}
        <div className="flex mt-4 gap-2">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && askQuestion()}
            placeholder="Ask about sustainability..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white outline-none backdrop-blur-md"
          />

          <button
            onClick={askQuestion}
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  </div>
);
}

  export default Chatbot;



//   return (
//   <div className="min-h-screen bg-[url('/img/green10.png')] bg-cover bg-center p-4 sm:p-8">

//     <Navbar />

//     <div className="max-w-4xl mx-auto mt-20">

//       {/* Title */}
//       <h1 className="text-3xl sm:text-5xl font-bold text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse mb-6">
//         🤖 Sustainability Assistant
//       </h1>

//       {/* Chat Box */}
//       <div className="w-full bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 sm:p-6 h-[500px] overflow-y-auto  ml-auto flex justify-end">

//         {messages.length === 0 && (
//           <div className="text-center text-gray-300 mt-20">
//             <h2 className="text-xl sm:text-2xl mb-4">
//               Welcome to EcoGuardian AI 🌍
//             </h2>

//             <p>Ask me about:</p>

//             <ul className="mt-4 space-y-2">
//               <li>💧 Water Conservation</li>
//               <li>🌊 Flood Safety</li>
//               <li>☀️ Drought Management</li>
//               <li>🌱 Climate Sustainability</li>
//             </ul>
//           </div>
//         )}

//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`mb-4 flex ${
//               msg.type === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`max-w-xs sm:max-w-md px-4 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${
//                 msg.type === "user"
//                   ? "bg-green-600 text-white"
//                   : "bg-slate-800 text-white border border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}

//         {loading && (
//           <div className="flex justify-start mb-4">
//             <div className="bg-slate-800 border border-cyan-500/30 text-green-400 px-4 py-3 rounded-xl animate-pulse">
//               🤖 EcoGuardian AI is thinking...
//             </div>
//           </div>
//         )}

//       </div>

//       {/* Input Box */}
//       <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full">

//         <input
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") askQuestion();
//           }}
//           placeholder="Ask about sustainability..."
//           className="flex-1 bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 text-white p-4 rounded-lg outline-none"
//         />

//         <button
//           onClick={askQuestion}
//           disabled={loading}
//           className="bg-green-600 hover:bg-green-700 px-6 sm:px-8 py-3 rounded-lg text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
//         >
//           Send
//         </button>

//       </div>

//     </div>
//   </div>
// );

// }

// export default Chatbot;




//   return (
//     <div className="min-h-screen bg-[url('/img/green10.png')] bg-cover bg-center p-8">

//       <Navbar  />

//       <div className="w-full md:w-[1000px] mx-auto mt-16">
//          <div>
//           <h1 className=" text-5xl font-bold  animate-pulse text-center "> 🤖
//         <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse mb-8 text-center">
//            Sustainability Assistant
//         </h1>
//         </h1>
//         </div>

//         <div className="w-full ml-90 max-w-[800px] bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 h-[500px] overflow-y-auto">
//           {messages.length === 0 && (
//             <div className="text-center text-gray-300 mt-20">
//               <h2 className="text-2xl mb-4">
//                 Welcome to EcoGuardian AI 🌍
//               </h2>

//               <p>
//                 Ask me about:
//               </p>

//               <ul className="mt-4 space-y-2">
//                 <li>💧 Water Conservation</li>
//                 <li>🌊 Flood Safety</li>
//                 <li>☀️ Drought Management</li>
//                 <li>🌱 Climate Sustainability</li>
//               </ul>
//             </div>
//           )}

//           {messages.map((msg, index) => (

//             <div
//               key={index}
//               className={`mb-4 flex ${
//                 msg.type === "user"
//                   ? "justify-end"
//                   : "justify-start"
//               }`}
//             >

//               <div
//                 className={`max-w-lg px-4 py-3 rounded-xl shadow-lg ${
//                   msg.type === "user"
//                     ? "bg-green-600 text-white"
//                     : "bg-slate-800 text-white border border-cyan-500/30"
//                 }`}
//               >
//                 {msg.text}
//               </div>

//             </div>

//           ))}

//           {loading && (

//             <div className="flex justify-start mb-4">

//               <div className="bg-slate-800 border border-cyan-500/30 text-green-400 px-4 py-3 rounded-xl animate-pulse ">

//                 🤖 EcoGuardian AI is thinking...

//               </div>

//             </div>

//           )}

//         </div>

//         <div className="flex gap-4 mt-6 w-full ml-90 max-w-[800px]">

//           <input
//             value={question}
//             onChange={(e) =>
//               setQuestion(e.target.value)
//             }
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 askQuestion();
//               }
//             }}
//             placeholder="Ask about sustainability..."
//             className="   flex-1 bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 text-white p-4 rounded-lg outline-none"
//           />

//           <button
//             onClick={askQuestion}
//             disabled={loading}
//             className="bg-green-600 hover:bg-green-700 px-8 rounded-lg text-white font-semibold transition-all "
//           >
//             Send
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Chatbot;