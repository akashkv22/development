// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Left from "./components/Left";
import Right from "./components/Right" 
import "./App.css";
// import Profile from "./components/Profile";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="d-flex">
        <Left />
        <Right />
      </div>
    </>
  );
}

export default App;
