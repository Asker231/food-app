import './App.css'
import Button from './components/Button/Button'
import { TypeButton } from './components/Button/button.props'

function App() {

  return (
    <>
      <Button typeButton={TypeButton.SMALL}>Some button</Button>
    </>
  )
}

export default App
