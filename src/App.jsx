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

  const checkForColumnOfThree = () => {
    // 47 is to optimze the performance of the game after last 3rd row there wont be any colum to math 3
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2] // 3 col algo
      const decidedColor = currentColorArrangement[i]

      // Muru idre tagi brkuuu
      if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor)) {
        columnOfThree.forEach(square => currentColorArrangement[square] = '')
      }
    }
  }

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


  const checkForColumnOfFore = () => {
    for (let i = 0; i < 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3] // 4 col algo
      const decidedColor = currentColorArrangement[i]

      if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor)) {
        columnOfFour.forEach(square => currentColorArrangement[square] = '')
      }
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfThree();
      checkForColumnOfFore();
      setCurrentColorArrangement([...currentColorArrangement])
    }, 100)

    return () => clearInterval(timer);
  }, [checkForColumnOfThree, currentColorArrangement, checkForColumnOfFore])


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
