import { useState } from 'react';
import type { Flashcard } from '../content/tracks/part-107/flashcards';

export function Flashcards({cards}:{cards:Flashcard[]}){
  const [index,setIndex]=useState(0); const [flipped,setFlipped]=useState(false);
  const card=cards[index];
  const move=(step:number)=>{setIndex(i=>(i+step+cards.length)%cards.length);setFlipped(false)};
  return <section id="flashcards" className="flashcards"><div className="section-heading"><div><span className="eyebrow">Active recall</span><h2>Part 107 flashcards</h2></div><span className="counter">{index+1} / {cards.length}</span></div>
    <button className={`flashcard ${flipped?'flipped':''}`} onClick={()=>setFlipped(v=>!v)} aria-label="Flip flashcard"><small>{card.topic}</small><strong>{flipped?card.back:card.front}</strong><span>{flipped?'Verified source: '+card.references.join(' · '):'Tap to reveal'}</span></button>
    <div className="flash-controls"><button className="secondary" onClick={()=>move(-1)}>Previous</button><button onClick={()=>move(1)}>Next card</button></div>
  </section>;
}
