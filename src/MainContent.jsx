import React from "react";

function MainContent() {
  return (
    <main style={{ backgroundColor: "#FAF7F2" }}>
      <div className="main-background">
        <div className="left-image-container">
          <img src="images/iteration-2-images/cta/kart-1.png" alt="Left Image" className="left-image" />
          <div className="text-and-button">
            <p>Özel<br/>Lezzetus</p>
            <p style={{ fontSize: "medium" }}>Position:Absolute Acı Burger</p>
            <button>SİPARİŞ VER</button>
          </div>
        </div>
        <div className="right-image-container">
          <div className="right-image">
            <img src="images/iteration-2-images/cta/kart-2.png" alt="Right Image 1" />
            <div className="text-and-button">
              <p style={{ fontSize: "30px" }}>Hackathlon<br/>Burger Menü</p>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
          <div className="right-image">
            <img src="images/iteration-2-images/cta/kart-3.png" alt="Right Image 2" />
            <div className="text-and-button">
              <p style={{ fontSize: "30px" }}><span className="right-span" style={{ color: "red" }}>Çoooook</span> hızlı<br/>npm gibi kurye</p>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-content-yazi">
        <p>en çok paketlenen menüler</p>
      </div>
      <div className="text-content">
        <p>Acıktıran Kodlara Doyuran Lezzetler</p>
      </div>
      <div className="button-container">
        <button><img src="images/iteration-2-images/icons/1.svg" alt="Icon 1"/>Ramen</button>
        <button style={{ backgroundColor: "#292929", color: "white" }}><img src="images/iteration-2-images/icons/2.svg" alt="Icon 2"/>Pizza</button>
        <button><img src="images/iteration-2-images/icons/3.svg" alt="Icon 3"/>Burger</button>
        <button><img src="images/iteration-2-images/icons/4.svg" alt="Icon 4"/>Frenc fries</button>
        <button><img src="images/iteration-2-images/icons/5.svg" alt="Icon 5"/>Fast food</button>
        <button><img src="images/iteration-2-images/icons/6.svg" alt="Icon 6"/>Soft Drinks</button>
      </div>
      <div className="card-container">
        <div className="card">
          <img src="images/iteration-2-images/pictures/food-1.png" alt="Kart Resmi 1" />
          <p style={{ fontWeight: "bold" }}>Terminal Pizza</p>
          <div className="rating-container">
            <span>4.9</span>
            <span>(200)</span>
            <span style={{ fontWeight: "bold" }}>60₺</span>
          </div>
        </div>
        <div className="card">
          <img src="images/iteration-2-images/pictures/food-2.png" alt="Kart Resmi 2" />
          <p style={{ fontWeight: "bold" }}>Position Absolute Acı Pizza</p>
          <div className="rating-container">
            <span>4.9</span>
            <span>(200)</span>
            <span style={{ fontWeight: "bold" }}>60₺</span>
          </div>
        </div>
        <div className="card">
          <img src="images/iteration-2-images/pictures/food-3.png" alt="Kart Resmi 3" />
          <p style={{ fontWeight: "bold" }}>useEffect Tavuklu Burger</p>
          <div className="rating-container">
            <span>4.9</span>
            <span>(200)</span>
            <span style={{ fontWeight: "bold" }}>60TL</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
