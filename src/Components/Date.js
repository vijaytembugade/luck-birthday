import React, { useState } from "react";

const Date = () => {
  const [date, setDate] = useState();
  const [number, setNumber] = useState();
  const [lucky, setLucky] = useState(false);
  const [unlucky, setUnLucky] = useState(false);
  const [privacyNotice, setPrivacyNotice] = useState(true);

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleLuckyNumberChange(e) {
    setNumber(e.target.value);
  }

  const handleCheck = () => {
    if(date && number){
        let dateInt = String(date.replaceAll("-", ""));
        let i = dateInt.length;
        let sum = 0;
        while (i--) {
          sum += parseInt(dateInt[i]);
        }
    
        if (sum % number === 0) {
          setLucky(true);
          setUnLucky(false)
        } else {
          setUnLucky(true);
          setLucky(false)
        }
    }else{
        alert("Invalid Inputs! Please Check date and number")
    }
   
  };

  const ShowStatus = () => {
    if (lucky) {
      return <h2>Your birthday is lucky!!</h2>;
    } else if (unlucky) {
      return <h2>Oops! Your birthday is not Lucky</h2>;
    }
    return true;
  };

  return (
    <div class="container">
      {privacyNotice && (
        <div className="privacy">
          <strong>Privacy Notice!</strong> We are not storing your data
          <button class="privacy-close" onClick={()=>setPrivacyNotice(false)}>
            X
          </button>
        </div>
      )}

      <h3>Enter your birthdate and Lucky number</h3>
      <h5>Birth Date</h5>
      <input required onChange={handleDateChange} type="date"></input>
      <h5>Your lucky number</h5>
      <input required type="number" onChange={handleLuckyNumberChange} />
      <button className="check-button" onClick={handleCheck}>Check</button>
      <div class="status">
        <ShowStatus />
      </div>
    </div>
  );
};

export default Date;
