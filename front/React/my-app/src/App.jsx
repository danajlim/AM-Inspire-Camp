import { useState } from 'react'
import './App.css'

//컴포넌트 코드 작성 
function Header(){
  return(
    <header>
      <h1>WEB</h1>
      World Wide Web!
    </header>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Header></Header>
      </div>
    </>
  )
}

export default App
