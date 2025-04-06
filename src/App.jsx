import { useEffect, useState } from 'react'
import './App.css'
const width = 8; // width of candy
const candyColors = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
]
function App() {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  // crete a 2d array of 8x8 = 64 random colour
  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomNumberFrom0to5 = Math.floor(Math.random() * candyColors.length)
      const randomColor = candyColors[randomNumberFrom0to5]
      randomColorArrangement.push(randomColor)

    }
    setCurrentColorArrangement(randomColorArrangement)
    console.log("randomColorArrangement:", randomColorArrangement)
  }

  useEffect(() => {
    createBoard();
  }, [])

  return (
    <div className='app'>
      <div className='game'>
        {currentColorArrangement.map((candyColor, index) => {
          return (
            <img
              key={index}
              className='candy'
              style={{ backgroundColor: candyColor }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
