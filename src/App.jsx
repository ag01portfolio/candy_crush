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
    <>
      Yo its working!
    </>
  )
}

export default App
