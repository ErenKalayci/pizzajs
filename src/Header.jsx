import React from "react";
import { useNavigate } from "react-router-dom"; 

function Header() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/siparis"); 
  };

  return (
    <header>
      <div className="header-div">
        <img src="images/iteration-1-images/logo.svg" alt="Logo" />
        <p className="font-p1">fırsatı kaçırma</p>
        <p className="font-p2">
          KOD ACIKTIRIR <br /> PIZZA,DOYURUR
        </p>
        <button onClick={handleClick}>ACIKTIM</button>
      </div>
    </header>
  );
}

export default Header;