import { useState } from 'react'
import './App.css'

//컴포넌트 코드 작성 
function Header(props){
  console.log(props);
  return(
    <header>
      <h1>{props.title}</h1>
      {props['desc']}
    </header>
  );
}

function Nav(props){
  return(
    <nav>
      <ul>
        <li><a href={props.link1}>{props.text1}</a></li>
        <li><a href={props.link2}>{props.text2}</a></li>
        <li><a href={props.link3}>{props.text3}</a></li>
      </ul>
    </nav>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Header title="WEB" desc={"World Wide Web!"}></Header>
        <Nav link1="1.html" link2="2.html" link3="3.html" text1="HTML" text2="CSS" text3="JavaScript">
        </Nav>
      </div>
    </>
  )
}

export default App
