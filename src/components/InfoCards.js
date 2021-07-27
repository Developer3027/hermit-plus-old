import React from 'react';
import mumboCard from '../images/mumboCard.png';
import gemCard from '../images/GeminiTayCard.png';
import pearlCard from '../images/pearlCard.png';
import bdubsCard from '../images/bdubsCard.png';

const InfoCards = () => {
  return (
    <>
      <section className='cards'>
        <img src={mumboCard} alt='mumbo jumbo information' />
        <img src={gemCard} alt='Gemini Tay information' />
        <img src={pearlCard} alt='Gemini Tay information' />
        <img src={bdubsCard} alt='Gemini Tay information' />
      </section>
    </>
  );
};

export default InfoCards;
