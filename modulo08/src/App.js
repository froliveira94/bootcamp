import React, { useState, useEffect, useMemo, useCallback } from 'react';

// useState
// Recebe o valor padrão de um estado e retorna o valor e uma função para atualizar

// useEffect
// Substitui os métodos do cliclo que vida existentes na aplicação
// O primeiro parâmetro que ele recebe é a função que será executada, e o segundo parâmetro é quando a função será executada.

// useMemo
// utilizado quando precisa se processar muitas coisas. A função tech.length só é executada quando ocorrer alguma modificação na variável no estado tech

// useCallback
// Parecido com o useMemo mas retorna uma função
// é mais utilizado nas funções que utilizam estado

function App() {
  const [tech, setTech] = useState(['React', 'React Native']);
  const [newTech, setNewTech] = useState('');

  // A função só é recriada na memória do computador quando as variáveis de estado tech e newTech sofrerem alterações

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  // fim

  //Como o hook não está "escutando" nenhuma variável ele é executado apenas uma vez

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');
    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // fim

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
