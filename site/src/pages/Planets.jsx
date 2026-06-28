import React from "react";
import React, { useState } from 'react'
import './styles/Planets.css'

const planetsData = [
  { id: 1, name: 'Меркурий', type: 'Каменистая', desc: 'Ближайшая к Солнцу и самая маленькая планета с огромными перепадами температур.' },
  { id: 2, name: 'Венера', type: 'Каменистая', desc: 'Вторая планета от Солнца с плотной атмосферой и сильнейшим парниковым эффектом.' },
  { id: 3, name: 'Земля', type: 'Каменистая', desc: 'Наша родная планета, единственное известное место во Вселенной, где есть жизнь.' },
  { id: 4, name: 'Марс', type: 'Каменистая', desc: 'Четвертая планета, известная своим пустынным красным ландшафтом и замерзшей водой.' },
  { id: 5, name: 'Юпитер', type: 'Газовый гигант', desc: 'Крупнейшая планета Солнечной системы, знаменитая Большим красным пятном.' },
  { id: 6, name: 'Сатурн', type: 'Газовый гигант', desc: 'Газовый великан с величественной и сложной системой ледяных колец.' },
  { id: 7, name: 'Уран', type: 'Ледяной гигант', desc: 'Самая холодная планета системы, которая вращается вокруг Солнца, «лежа на боку».' },
  { id: 8, name: 'Нептун', type: 'Ледяной гигант', desc: 'Далекая планета, охваченная сильнейшими ветрами и ледяными штормами.' },
  { id: 9, name: 'Плутон', type: 'Карликовая', desc: 'Бывшая девятая планета, теперь классифицируется как ледяной карликовый мир.' }
]

function Planets() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPlanets = planetsData.filter(planet =>
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="planets-page">
      <header className="planets-header">
        <h1>Каталог планет</h1>
        <p>Изучите миры нашей Солнечной системы</p>
        
        {/* Поисковая строка */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Введите название планеты..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      <main className="planets-grid">
        {filteredPlanets.length > 0 ? (
          filteredPlanets.map(planet => (
            <div key={planet.id} className="planet-card">
              <span className="planet-badge">{planet.type}</span>
              <h3 className="planet-title">{planet.name}</h3>
              <p className="planet-desc">{planet.desc}</p>
            </div>
          ))
        ) : (
          <p className="no-results">Планета не найдена. Попробуйте другой запрос.</p>
        )}
      </main>
    </div>
  )
}

export default Planets
