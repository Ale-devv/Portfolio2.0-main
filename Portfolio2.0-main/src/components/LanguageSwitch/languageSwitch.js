import React, { useState } from 'react';
import i18n from '../../i18n';
import { Translation } from 'react-i18next';

const JsonToggleButton = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeJSONFile = async (en) => {
    try {
      const filePath = `./i18n/Translation/ptBR.json`;
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error(`Failed to load ${en}.json`);
      }

      const jsonContent = await response.json();
      console.log(jsonContent);

      // Faça algo com o conteúdo do arquivo JSON, se necessário

      // Atualize o estado da linguagem
      setCurrentLanguage(en);
    } catch (error) {
      console.error(`Error changing to ${en}.json:`, error);
    }
  };

  const handleButtonClick = async () => {
    const newLanguage = currentLanguage === 'en' ? 'ptBR' : 'en';
    await changeJSONFile(newLanguage);
  };

  return (
    <button onClick={handleButtonClick}>
      Toggle JSON Files (Current Language: {currentLanguage})
    </button>
  );
};

export default JsonToggleButton;