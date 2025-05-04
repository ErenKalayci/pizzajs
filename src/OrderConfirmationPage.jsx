
  // Sayaç + yönlendirme eklenebilir

import { useLocation, useNavigate } from "react-router-dom";
import "./OrderConfirmationPage.css";

function OrderConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.response;

  return (
    <div className="confirmation-container">
      <img
        src="/images/iteration-1-images/logo.svg"
        alt="Teknolojik Yemekler"
        className="brand-logo"
      />
      <p className="slogan">lezzetin yolda</p>
      <h1 className="main-title">SİPARİŞ ALINDI</h1>
      <hr />

      <h3 className="pizza-title">Position Absolute Acı Pizza</h3>

      {order && (
  <div className="order-details">
    <p>
      <strong>Boyut:</strong> {order.boyut}
    </p>
    <p>
      <strong>Hamur:</strong> {order.hamur}
    </p>
    <p>
      <strong>Ek Malzemeler:</strong>{" "}
      {order.malzemeler?.map((item, i) => (
        <span key={i}>
          <strong>{item}</strong>
          {i < order.malzemeler.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
    {/*Not*/}
    {order.not && (
      <p>
        <strong>Not:</strong> {order.not}
      </p>
    )}
  </div>
)}

      <div className="total-box">
        <h4>Sipariş Toplamı</h4>
        <p>
          <span>Seçimler</span> <span>{order?.malzemeler.length * 5}.00₺</span>
        </p>
        <p>
          <span>Toplam</span> <span>{order?.toplam}₺</span>
        </p>
      </div>

      <button onClick={() => navigate("/")}>Anasayfaya Dön</button>
    </div>
  );
}

export default OrderConfirmationPage;
