import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 style={{ fontSize: "36px" }}>Teknolojik<br/>Yemekler</h3>
          <p style={{ marginBottom: "20px" }}>
            <img src="images/iteration-2-images/footer/icons/icon-1.png" /> 341 Londonderry Road,<br />İstanbul Türkiye
          </p>
          <p style={{ marginBottom: "20px" }}>
            <img src="images/iteration-2-images/footer/icons/icon-2.png" /> acliktim@teknolojikyemekler.com
          </p>
          <p>
            <img src="images/iteration-2-images/footer/icons/icon-3.png" /> +90 216 123 45 67
          </p>
        </div>
        <div className="footer-column" style={{ marginTop: "50px" }}>
          <h3>Hot Menu</h3>
          <ul>
            <li><a href="#">Terminal Pizza</a></li>
            <li><a href="#">5 Kişilik Hackathlon Pizza</a></li>
            <li><a href="#">useEffect Tavuklu Pizza</a></li>
            <li><a href="#">Beyaz Console Frosty</a></li>
            <li><a href="#">Testler Geçti Mutlu Burger</a></li>
            <li><a href="#">Position Absolute Acı Burger</a></li>
          </ul>
        </div>
        <div className="footer-column" style={{ marginTop: "50px" }}>
          <h3>Instagram</h3>
          <div className="insta-gallery">
            <img src="images/iteration-2-images/footer/insta/li-0.png" alt="Yemek 1" />
            <img src="images/iteration-2-images/footer/insta/li-1.png" alt="Yemek 2" />
            <img src="images/iteration-2-images/footer/insta/li-2.png" alt="Yemek 3" />
            <img src="images/iteration-2-images/footer/insta/li-3.png" alt="Yemek 4" />
            <img src="images/iteration-2-images/footer/insta/li-4.png" alt="Yemek 5" />
            <img src="images/iteration-2-images/footer/insta/li-5.png" alt="Yemek 6" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2023 Teknolojik Yemekler.</span>
        <span style={{ fontSize: "24px" }} className="fa">&#xf099;</span>
      </div>
    </footer>
  );
}

export default Footer;
