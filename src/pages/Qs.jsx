import React from 'react'
import { useState } from 'react';
import kaykeImg from "../assets/Kaykeimg.png"
import RenanImg from "../assets/Renanimg.png"
import RafaelImg from "../assets/Rafaelimg.png"

export function Qs() {
  return (


    <div>
        
        <h1 id='titleimg' align="center">Quem somos?</h1>
        
        <img src={kaykeImg} alt="foto do kayke" id='icon'/>
        <h3 id='subtitleimg'>Kayke Ferraz</h3>
        <p id='textimg'>Desenvolvedor de hardware,
        responsável pela programação.</p>
        
        <img src={RenanImg} alt="foto do renan" id='icon'/>
        <h3  id='subtitleimg'>Renan Salvador</h3>
        <p id='textimg'>Projetista de UX, responsável pela interface do usuário.</p>

        <img src={RafaelImg} alt="foto do rafael" id='icon'/>
        <h3  id='subtitleimg'>Rafael Rodrigues</h3>
        <p id='textimg'>Engenheiro de software, responsável em sensoriamento.</p>
    
    </div>

  )
}

