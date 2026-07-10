import React from "react";
import "./styles/commet.css";

const comets = [
  {
    name: "Комета Галлея",
    year: "Возвращается каждые ~76 лет",
    description: "Одна из самых известных комет, наблюдаемая людьми с древности.",
  },
  {
    name: "NEOWISE",
    year: "2020",
    description: "Яркая комета, которую можно было увидеть невооружённым глазом.",
  },
  {
    name: "Hale-Bopp",
    year: "1997",
    description: "Одна из самых ярких комет XX века.",
  },
  {
    name: "Астероид Веста",
    year: "1807",
    description: "Единственный астероид, который можно увидеть невооружённым глазом.",
  },
  {
    name: "Метеорит Гоба",
    year: "1920",
    description: "Крупнейший из найденных метеоритов на Земле.",
  },
  {
    name: "Церера",
    year: "1801",
    description: "Крупнейшая карликовая планета в поясе астероидов.",
  },
  {
    name: "Паллада",
    year: "1802",
    description: "Второй по величине объект главного пояса астероидов.",
  },
];

export default function Commet() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white">

      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-5">☄️ Мир Комет</h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Исследуйте загадочные космические объекты, путешествующие через
          Солнечную систему.
        </p>

        <button className="mt-8 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Узнать больше
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-10 py-12">

        <div className="bg-slate-800 p-6 rounded-2xl">
          <div style={{ fontSize: "40px", marginBottom: "15px" }}></div>
          <h3 className="font-bold text-xl mb-2">Что такое комета?</h3>
          <p className="text-gray-300">
            Комета — небесное тело, состоящее из льда, пыли и камней.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <div style={{ fontSize: "40px", marginBottom: "15px" }}></div>
          <h3 className="font-bold text-xl mb-2">Орбита</h3>
          <p className="text-gray-300">
            Кометы движутся вокруг Солнца по сильно вытянутым орбитам.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <div style={{ fontSize: "40px", marginBottom: "15px" }}></div>
          <h3 className="font-bold text-xl mb-2">Исследования</h3>
          <p className="text-gray-300">
            Космические аппараты изучают состав и строение комет.
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
              NASA — космическое агентство США, занимающееся исследованиями космоса.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">Миссии</h3>
            <p className="text-gray-300">
              Агентство отправляет миссии к Луне, Марсу и другим объектам Солнечной системы.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">Достижения</h3>
            <p className="text-gray-300">
              Среди известных проектов — Apollo, Hubble, Curiosity и Perseverance.
            </p>
          </div>

        </div>
      </section>

      <section className="px-10 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Известные кометы и малые тела
        </h2>

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
        Космос — бесконечная загадка, которую человечество продолжает исследовать.
      </footer>

    </div>
  );
}