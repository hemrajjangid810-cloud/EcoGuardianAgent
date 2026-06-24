import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function PdfAnalyzer() {

  const [file, setFile] = useState(null);

  const [summary, setSummary] = useState("");

  const [risks, setRisks] = useState([]);

  const [recommendations, setRecommendations] = useState([]);

  const [sdgs, setSdgs] = useState([]);

  const [loading, setLoading] = useState(false);

  const uploadPDF = async () => {

    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    setLoading(true);

    try {

      const formData = new FormData();

      formData.append(
        "file",
        file
      );

      const res = await API.post(
        "analyze-pdf/",
        formData
      );

      setSummary(
        res.data.summary
      );

      setRisks(
        res.data.risks || []
      );

      setRecommendations(
        res.data.recommendations || []
      );

      setSdgs(
        res.data.sdg_alignment || []
      );

    } catch (error) {

      console.error(error);

      alert("Failed to analyze PDF");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center p-6 bg-[url(/img/green12.png)]">
       <Navbar />
      <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30  p-8 rounded-xl w-full max-w-4xl">

        <h1 className="text-white text-3xl mb-6 font-bold">
          📄 AI PDF Analyzer
        </h1>

        <input
          type="file"
          onChange={(e) =>
            setFile(
              e.target.files[0]
            )
          }
          className="text-white"
        />

        <button
          onClick={uploadPDF}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg mt-4 ml-3"
        >
          {loading
            ? "Analyzing..."
            : "Analyze PDF"}
        </button>

        {/* Summary */}

        {summary && (

          <div className="mt-8">

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">

              <h2 className="text-2xl font-bold text-green-400 mb-4">
                📄 Document Analysis
              </h2>

              <div className="bg-slate-900 p-4 rounded-lg">

                <h3 className="text-blue-400 font-semibold mb-2">
                  Summary
                </h3>

                <p className="text-gray-300 leading-7 whitespace-pre-wrap">
                  {summary}
                </p>

              </div>

            </div>

          </div>

        )}

        {/* Risks */}

        {risks.length > 0 && (

          <div className="bg-slate-800 p-6 rounded-xl mt-6">

            <h2 className="text-red-400 text-xl font-bold mb-4">
              ⚠️ Key Risks
            </h2>

            <ul className="text-white space-y-2">

              {risks.map((risk, index) => (
                <li key={index}>
                  • {risk}
                </li>
              ))}

            </ul>

          </div>

        )}

        {/* Recommendations */}

        {recommendations.length > 0 && (

          <div className="bg-slate-800 p-6 rounded-xl mt-6">

            <h2 className="text-green-400 text-xl font-bold mb-4">
              🌱 Recommendations
            </h2>

            <ul className="text-white space-y-2">

              {recommendations.map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}

            </ul>

          </div>

        )}

        {/* SDG Alignment */}

        {sdgs.length > 0 && (

          <div className="bg-slate-800 p-6 rounded-xl mt-6">

            <h2 className="text-blue-400 text-xl font-bold mb-4">
              🎯 SDG Alignment
            </h2>

            <ul className="text-white space-y-2">

              {sdgs.map((sdg, index) => (
                <li key={index}>
                  • {sdg}
                </li>
              ))}

            </ul>

          </div>

        )}

      </div>

    </div>
  );
}

export default PdfAnalyzer;