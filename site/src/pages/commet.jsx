

// commet.jsx
import React from "react";
import { Rocket, Orbit, Star } from "lucide-react";
import "./styles/commet.css"

const comets = [
  {
    name: "Комета Галлея",
    year: "Возвращается каждые ~76 лет",
    description: "Одна из самых известных комет, наблюдаемая людьми с древности.",
    img: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B5%D1%82%D0%B0_%D0%93%D0%B0%D0%BB%D0%BB%D0%B5%D1%8F",
  },
  {
    name: "NEOWISE",
    year: "2020",
    description: "Яркая комета, которую можно было увидеть невооружённым глазом.",
    img: "https://ru.wikipedia.org/wiki/C/2020_F3_%28NEOWISE%29",
  },
  {
    name: "Hale-Bopp",
    year: "1997",
    description: "Одна из самых ярких комет XX века.",
    img: "https://en.wikipedia.org/wiki/Comet_Hale%E2%80%93Bopp",
  },
  {
    name: "Астероид Веста",
    year: "Летом 1908 г",
    description:
      "Единственный астероид, который можно видеть невооружённым глазом. У Весты есть ядро из железа и никеля и каменная мантия.",
    img: "https://spacegid.com/vesta-dawn.html",
  },
  {
    name: "Метеорит Гоба",
    year: "К концу XVII в.",
    description:
      "Метеорит Гоба — крупнейший из найденных метеоритов на планете.",
    img: "https://portal.azertag.az/ru/node/26687",
  },
  {
    name: "Церера",
    year: "1 января 1801",
    description:
      "Ближайшая к Солнцу и наименьшая среди известных карликовых планет Солнечной системы.",
    img: "https://prokosmos.ru/2026/01/15/planet-ceres",
  },
  {
    name: "Паллада",
    year: "До 15 октября 1582 года",
    description:
      "Относится к главному поясу астероидов.",
    img: "https://shedevrum.ai/post/5f9bec5c846320f/",
  },
];

const technologies = [
  {
    name: "Спутник-1",
    year: "1957 год",
    description:
      "Проверка возможности вывода объектов на орбиту и первых измерений в космосе.",
    img: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA-1",
  },
  {
    name: "Марсоход",
    year: "1970 год",
    description:
      "Исследование геологии и атмосферы других планет.",
    img: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D1%81%D0%BE%D1%85%D0%BE%D0%B4",
  },
  {
    name: "Space Shuttle, Falcon 9",
    year: "1981",
    description:
      "Снижение стоимости доставки грузов на орбиту за счёт многоразовых систем.",
    img: "https://www.spacex.com/vehicles/falcon-9/",
  },
  {
    name: "GPS, ГЛОНАСС, Galileo",
    year: "1978",
    description:
      "Точная навигация и определение геопозиции.",
    img: "https://habr.com/ru/companies/first/articles/855378/",
  },
  {
    name: "Starlink",
    year: "1962",
    description:
      "Высокоскоростной интернет по всему миру.",
    img: "https://nazarnews.org/ru/posts/starlink-stal-ofitsialno-dostupen-na-territorii-kyirgyizstana",
  },
  {
    name: "Voyager, Curiosity, Perseverance",
    year: "1977",
    description:
      "Изучение планет и поиск следов жизни.",
    img: "https://www.space.com/astronomy/mars/nasas-perseverance-rover-just-ran-a-marathon-on-mars-could-you-do-the-same",
  },
  {
    name: "Hubble",
    year: "1990",
    description:
      "Наблюдение далёких галактик и экзопланет.",
    img: "https://ieeephotonics.org/news/celebrating-35-years-of-discovery-the-hubble-space-telescope",
  },
];

export default function Commet() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white">
      <section className="text-center py-20 px-6">
        <div className="flex justify-center mb-6">
          <Rocket size={60} />
        </div>

        <h1 className="text-5xl font-bold mb-5">Мир Комет ☄️</h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Исследуйте загадочные космические объекты, путешествующие через Солнечную систему.
        </p>

        <button className="mt-8 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Узнать больше
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-10 py-12">
        <div className="bg-slate-800 p-6 rounded-2xl">
          <Star className="mb-3" />
          <h3 className="font-bold text-xl mb-2">Что такое комета?</h3>
          <p className="text-gray-300">
            Комета — это небесное тело из льда, пыли и камней.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <Orbit className="mb-3" />
          <h3 className="font-bold text-xl mb-2">Орбита</h3>
          <p className="text-gray-300">
            Кометы движутся вокруг Солнца по вытянутым траекториям.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <Rocket className="mb-3" />
          <h3 className="font-bold text-xl mb-2">Исследования</h3>
          <p className="text-gray-300">
            Космические аппараты помогают изучать структуру комет.
          </p>
        </div>
      </section>

      <section className="px-10 py-12">
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
            alt="NASA"
            className="w-14 h-14"
          />
          <h2 className="text-3xl font-bold">NASA</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">Что такое NASA?</h3>
            <p className="text-gray-300">
              NASA — агентство США, занимающееся исследованием космоса и технологий.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">Миссии</h3>
            <p className="text-gray-300">
              NASA отправляет миссии на Луну, Марс и за пределы Солнечной системы.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">Достижения</h3>
            <p className="text-gray-300">
              Apollo 11, Curiosity и Perseverance — ключевые достижения NASA.
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Известные кометы</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {comets.map((comet, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold">{comet.name}</h3>
              <p className="text-blue-400 my-2">{comet.year}</p>
              <p className="text-gray-300">{comet.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-8 text-gray-400 border-t border-slate-700">
        Космос — бесконечная загадка, которую мы продолжаем исследовать.
      </footer>
    </div>
  );
}