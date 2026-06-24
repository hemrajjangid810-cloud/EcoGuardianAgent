// import { useEffect, useState } from "react";
// import API from "../services/api";

// function Weather() {

//   const [weather, setWeather] = useState(null);

//   useEffect(() => {

//     fetchWeather();

//   }, []);

//   const fetchWeather = async () => {

//     const res = await API.get(
//       "weather/?city=Jaipur"
//     );

//     setWeather(res.data);
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 flex justify-center items-center">

//       <div className="bg-slate-900 p-8 rounded-xl w-full max-w-md">

//         <h1 className="text-3xl text-white mb-6">
//           🌦 Weather Intelligence
//         </h1>

//         {weather && (

//           <div>

//             <p className="text-green-400">
//               City: {weather.city}
//             </p>

//             <p className="text-white">
//               Temperature: {weather.temperature}°C
//             </p>

//             <p className="text-white">
//               Humidity: {weather.humidity}%
//             </p>

//             <p className="text-blue-400">
//               Condition: {weather.weather}
//             </p>

//           </div>

//         )}

//       </div>

//     </div>
//   );
// }

// export default Weather;












import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Weather() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {

    const res = await API.get(
      "weather/?city=Jaipur"
    );

    setWeather(res.data);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center bg-[url(/img/green11.png)]">
      <Navbar />

      <div className="bg-slate-900 p-8 rounded-xl w-full max-w-md">

        <h1 className="text-3xl text-white mb-6">
          🌦 Weather Intelligence
        </h1>

        {weather && (

          <div className="space-y-3">

            <p className="text-green-400">
              📍 City: {weather.city}
            </p>

            <p className="text-white">
              🌡 Temperature: {weather.temperature}°C
            </p>

            <p className="text-white">
              💧 Humidity: {weather.humidity}%
            </p>

            <p className="text-blue-400">
              ☁ Condition: {weather.weather}
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Weather;