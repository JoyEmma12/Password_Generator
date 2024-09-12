import React from "react";
import "./PasswordInput.css";

const PasswordInput = ({ userOptions, setUserOptions }) => {
  const passwordLogic = () => {
    const { charnum, uppercase, lowercase, numbers } = userOptions;

    let characters = "";
    let password = "";

    if (uppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
      characters += "0123456789";
    }

    for (let i = 0; i < charnum; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    return password;
  };

  const handleUserOptions = (e) => {
    const { name, value, type, checked } = e.target;
    setUserOptions({
      ...userOptions,
      [name]:
        type === "checked"
          ? checked
          : type === "number"
          ? parseInt(value, 10) || ""
          : value,
    });
  };
  const handlepassword = (e) => {
    e.preventDefault();
    const generatedPassword = passwordLogic();
    const passwordDisplay = document.querySelector(".password-display");
    passwordDisplay.innerHTML = generatedPassword;
    console.log(generatedPassword);
  };
  return (
    <div className="generator-container">
      <header>Password Generator</header>
      <div className="password-display"></div>
      <form onSubmit={handlepassword}>
        <div className="input">
          <label>Number of Characters</label>
          <input
            type="number"
            name="charnum"
            value={userOptions.charnum}
            onChange={handleUserOptions}
          />
        </div>
        <div>
          <label>Include Uppercase</label>
          <input
            type="checkbox"
            name="uppercase"
            value={userOptions.uppercase}
            onChange={handleUserOptions}
          />
        </div>
        <div>
          <label>Include Lowercase</label>
          <input
            type="checkbox"
            name="lowercase"
            value={userOptions.lowercase}
            onChange={handleUserOptions}
          />
        </div>
        <div>
          <label>Include Numbers</label>
          <input
            type="checkbox"
            name="numbers"
            value={userOptions.numbers}
            onChange={handleUserOptions}
          />
        </div>
        <div>
          <button>Generate Password</button>
        </div>
      </form>
    </div>
  );
};

export default PasswordInput;
