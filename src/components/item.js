

import React from 'react';


const Item = () => {
  const riddles = [
    {
      id: 1,
      description: "Под землёй туда-сюда быстро ездят поезда.",
      option1: " Метро",
      option2: "Велосипед",
      option3: "Скутер",
      option4: "Машина",
      correct: "Метро"
    },
    {
      id: 2,
      description: "Резвый конь не ест овса, у него два колеса.",
      option1: "Машина",
      option2: "Велосипед",
      option3: "Метро",
      option4: "Кирпич",
      correct: "Велосипед"
    },
    {
      id: 3,
      description: "Крылья есть, а всё ж не птица, он по небу быстро мчится.",
      option1: "Птица",
      option2: "Велосипед",
      option3: "Самолёт",
      option4: "Часы",
      correct: "Самолёт"
    }
   
  ];

  return (
      <div>
      {riddles.map((riddle) =>(
        <div>
        <h3>Загадка №{riddle.id}. {riddle.description}</h3>
       
        <label htmlFor='answers'>Выберите правильный ответ </label>
          <select id='answers'>
            <option>...</option>
            <option>{riddle.option1}</option>
            <option>{riddle.option2}</option>
            <option>{riddle.option3}</option>
            <option>{riddle.option4}</option>


          </select>
            
          <p>Правильный ответ: {riddle.correct}</p>

        </div>
        
      ))}
      
      </div>  
  );
};
export default Item;

       
