import './App.css'
import HomePage from './HomePage'
import NavigationMenu from './NavigationMenu'

function App() {
  return (
    <>
      <NavigationMenu activaPage={'home'}/>
      <HomePage />
    </>
  )
}

export default App
