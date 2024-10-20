import { useState } from 'react'
import './App.css'
import dice1 from './assets/images/dice1.png'
import dice2 from './assets/images/dice2.png'
import dice3 from './assets/images/dice3.png'
import dice4 from './assets/images/dice4.png'
import dice5 from './assets/images/dice5.png'
import dice6 from './assets/images/dice6.png'
import Player from './components/Player'
import Result from './components/Result'

function App() {

  const diceImg = [
      dice1,
      dice2,
      dice3,
      dice4,
      dice5,
      dice6
    ]
  



  const [diceImg1, setDice1] = useState(diceImg[0]);
  const [diceImg2, setDice2] = useState(diceImg[1]);
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [result, setResult] = useState("lets play");

  const rollDice = () => {

    const interval = 100; // Zar yüzlerinin değişim süresi (ms)
    const totalTime = 3000; // Toplam gösterim süresi (ms)
    const iterations = totalTime / interval; // Kaç kere değişecek

    let count = 0; // Değişim sayacı
    let finalRoll1 = 0; 
    let finalRoll2 = 0;

    const changeDice = setInterval(() => {
      const roll1 = Math.floor(Math.random() * 6);
      const roll2 = Math.floor(Math.random() * 6);

      setDice1(diceImg[roll1]);
      setDice2(diceImg[roll2]);

      count++;
      if (count === iterations) {
        clearInterval(changeDice); // Değişimi durdur
        // Son zar yüzlerini ayarla
        finalRoll1 = Math.floor(Math.random() * 6);
        finalRoll2 = Math.floor(Math.random() * 6);

        setDice1(diceImg[finalRoll1]);
        setDice2(diceImg[finalRoll2]);

        if (finalRoll1 > finalRoll2) {
          setResult(`${player1} wins!`);
      } else if (finalRoll2 > finalRoll1) {
          setResult(`${player2} wins!`);
      } else {
          setResult("It's a draw!");
      }
      }
    }, interval);
  };
  
  const editName = (playerSetter) => {
    const playerNewName = prompt("What is your name?");
    if (playerNewName.length < 1) {
      alert("Please enter a valid name");
    } else {
      playerSetter(playerNewName);
    }
  };

  return (
    <>
    <div className="container">
      <Result resultGame={result}/>
      <div className="players">
        <Player 
          playerName={player1}
          playerX={player1}
          showButton={true}
          editName={() => editName(setPlayer1)}
          img={diceImg1} imgAlt={dice1}/>
        <Player 
          playerName={player2}
          playerX={player2}
          showButton={false}
          img={diceImg2} imgAlt={dice2}/>
      </div>
      
      <button className='roll-btn' onClick={rollDice}>Roll Dice</button>
      
    </div>
    </>
  )
}

export default App
