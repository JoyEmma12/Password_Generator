// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import PasswordInput from "./PasswordInput";

function App() {
  const [userOptions, setUserOptions] = useState({
    charnum: "",
    uppercase: false,
    lowercase: false,
    numbers: false,
  });
  return (
    <div className="App">
      <PasswordInput userOptions={userOptions} setUserOptions={setUserOptions} />
    </div>
  );
}

export default App;
