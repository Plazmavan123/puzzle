

import React from 'react';


const Item = () => {
  const riddles = [
    {
      id: 1,
      description: "What has to be broken before you can use it?",
      option1: "An egg",
      option2: "A pencil",
      option3: "A mirror",
      option4: "A window",
      correct: "An egg"
    },
    {
      id: 2,
      description: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
      option1: "A tree",
      option2: "A candle",
      option3: "A book",
      option4: "A bottle",
      correct: "A candle"
    },
    {
      id: 3,
      description: "What has keys but can't open locks?",
      option1: "A computer",
      option2: "A piano",
      option3: "A map",
      option4: "A clock",
      correct: "A map"
    }
   
  ];

  return (
      <div>
      {riddles.map((riddle) =>(
        <div>
        <h3>Riddle №{riddle.id}. {riddle.description}</h3>
       
        <label htmlFor='answers'>Choose the correct answer </label>
          <select id='answers'>
            <option>...</option>
            <option>{riddle.option1}</option>
            <option>{riddle.option2}</option>
            <option>{riddle.option3}</option>
            <option>{riddle.option4}</option>


          </select>
            
          <p>Correct answer is: {riddle.correct}</p>

        </div>
        
      ))}
      
      </div>  
  );
};
export default Item;

       
