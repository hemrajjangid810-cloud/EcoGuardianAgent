import { useEffect, useState } from "react";
import API from "../services/api";

function SustainabilityScore() {

  const [score, setScore] = useState(null);

  useEffect(() => {

    API.get("sustainability-score/")
      .then((res) => setScore(res.data))
      .catch((err) => console.log(err));

  }, []);

  if (!score) {
    return null;
  }

  return (

    <div className="space-y-6">

  {/* Climate Preparedness */}

  <div>
    <p className="text-green-400 mb-2 font-semibold">
      Climate Preparedness {score.climate_preparedness}%
    </p>

    <div className="w-full bg-slate-700 rounded-full h-4">
      <div
        className="bg-green-500 h-4 rounded-full transition-all duration-700"
        style={{
          width: `${score.climate_preparedness}%`,
        }}
      ></div>
    </div>
  </div>

  {/* Water Awareness */}

  <div>
    <p className="text-blue-400 mb-2 font-semibold">
      Water Awareness {score.water_awareness}%
    </p>

    <div className="w-full bg-slate-700 rounded-full h-4">
      <div
        className="bg-blue-500 h-4 rounded-full transition-all duration-700"
        style={{
          width: `${score.water_awareness}%`,
        }}
      ></div>
    </div>
  </div>

  {/* Overall Sustainability */}

  <div>
    <p className="text-yellow-400 mb-2 font-semibold">
      Overall Sustainability {score.overall_score}%
    </p>

    <div className="w-full bg-slate-700 rounded-full h-4">
      <div
        className="bg-yellow-500 h-4 rounded-full transition-all duration-700"
        style={{
          width: `${score.overall_score}%`,
        }}
      ></div>
    </div>
  </div>

</div>









//     <div className="bg-slate-900 rounded-xl p-6">

//       <h2 className="text-white text-2xl mb-4">
//         Sustainability Score
//       </h2>

//       <div className="flex justify-center my-6">
//   <div className="w-32 h-32 rounded-full border-8 border-green-500 flex items-center justify-center">

//     <span className="text-3xl font-bold text-white">
//       {score.overall_score}%
//     </span>

//   </div>
// </div>

//       <div className="space-y-4">

//         <div>
//           <p className="text-green-400">
//             Climate Preparedness:
//             {score.climate_preparedness}%
//           </p>
//         </div>

//         <div>
//           <p className="text-blue-400">
//             Water Awareness:
//             {score.water_awareness}%
//           </p>
//         </div>

//         <div>
//           <p className="text-yellow-400">
//             Overall Sustainability:
//             {score.overall_score}%
//           </p>
//         </div>

//       </div>

//     </div>
  );
}

export default SustainabilityScore;