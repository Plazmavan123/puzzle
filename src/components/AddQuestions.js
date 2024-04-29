import React, { useState } from 'react';

function AddQuestions() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newOptions, setNewOptions] = useState(['', '']);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: newQuestion, options: newOptions }]);
    setNewQuestion('');
    setNewOptions(['', '']);
  };

  const handleQuestionChange = (index, event) => {
    const updatedOptions = [...newOptions];
    updatedOptions[index] = event.target.value;
    setNewOptions(updatedOptions);
  };

  const handleOptionAdd = () => {
    setNewOptions([...newOptions, '']);
  };

  return (
    <div>
      <h2>Тестовые вопросы</h2>
      {questions.map((q, idx) => (
        <div key={idx}>
          <p>{q.question}</p>
          <ul>
            {q.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
      <h3>Добавить новый вопрос</h3>
      <input
        type="text"
        placeholder="Введите вопрос"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      {newOptions.map((option, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Вариант ответа ${index + 1}`}
          value={option}
          onChange={(e) => handleQuestionChange(index, e)}
        />
      ))}
      <button onClick={handleOptionAdd}>Добавить вариант ответа</button>
      <button onClick={handleAddQuestion}>Добавить вопрос</button>
    </div>
  );
}

export default AddQuestions;
