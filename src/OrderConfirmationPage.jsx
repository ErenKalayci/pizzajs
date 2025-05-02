import { useLocation, useNavigate } from "react-router-dom";
import "./OrderConfirmationPage.css";

function OrderConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.response; 
  // Sayaç + yönlendirme eklenebilir

  return (
    <div className="confirmation-container">
      <h2>Teknolojik Yemekler</h2>
      <h1>TEBRİKLER!</h1>
      <p>SİPARİŞİNİZ ALINDI!</p>

      {order && (
        <div className="order-summary">
          <h3>Sipariş Özeti</h3>
          <p><strong>Boyut:</strong> {order.boyut}</p>
          <p><strong>Hamur:</strong> {order.hamur}</p>
          <p><strong>Malzemeler:</strong> {order.malzemeler?.join(", ")}</p>
          <p><strong>Adet:</strong> {order.adet}</p>
          <p><strong>Toplam:</strong> {order.toplam}₺</p>
          {order.not && <p><strong>Not:</strong> {order.not}</p>}
        </div>
      )}

      <button onClick={() => navigate("/")}>
        Anasayfaya Dön
      </button>
    </div>
  );
}

export default OrderConfirmationPage;
