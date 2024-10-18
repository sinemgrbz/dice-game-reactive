import { useState } from 'react'
import './App.css'
import dice1 from './assets/images/dice1.png'
import dice2 from './assets/images/dice2.png'
import dice3 from './assets/images/dice3.png'
import dice4 from './assets/images/dice4.png'
import dice5 from './assets/images/dice5.png'
import dice6 from './assets/images/dice6.png'
import Player from './components/Player'

function App() {

  const diceImg = [
      dice1,
      dice2,
      dice3,
      dice4,
      dice5,
      dice6
    ]
  

  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");

  const [diceImg1, setDice1] = useState(diceImg[0]);
  const [diceImg2, setDice2] = useState(diceImg[1]);

  const rollDice = () => {

    const interval = 100; // Zar yüzlerinin değişim süresi (ms)
    const totalTime = 3000; // Toplam gösterim süresi (ms)
    const iterations = totalTime / interval; // Kaç kere değişecek

    let count = 0; // Değişim sayacı

    const changeDice = setInterval(() => {
      const roll1 = Math.floor(Math.random() * 6);
      const roll2 = Math.floor(Math.random() * 6);

      setDice1(diceImg[roll1]);
      setDice2(diceImg[roll2]);

      count++;
      if (count === iterations) {
        clearInterval(changeDice); // Değişimi durdur
        // Son zar yüzlerini ayarla
        setDice1(diceImg[Math.floor(Math.random() * 6)]);
        setDice2(diceImg[Math.floor(Math.random() * 6)]);
      }
    }, interval);
  }

  return (
    <>
    <div className="container">
      <div className="result">Draw
      </div>
      
      <div className="players">
        <Player 
          name={player1Name} 
          onChange={(e) => setPlayer1Name(e.target.value)} 
          readOnly={false} // İlk oyuncu için degistirilebilir
          img={diceImg1} imgAlt={dice1}/>
        <Player 
          name={player2Name} 
          onChange={(e) => setPlayer2Name(e.target.value)} 
          readOnly={true} // ikinci oyuncu için readOnly
          img={diceImg2} imgAlt={dice2} inputStyle={{backgroundColor: 'transparent'}}/>
      </div>
      
      <button onClick={rollDice}>Roll Dice</button>
      
    </div>
    </>
  )
}

export default App
