import React, { useState } from 'react';
import './OrderPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const extras = [
  'Pepperoni', 'Sosis', 'Kavurma-Jambon', 'Tavuk Izgara', 'Soğan', 'Domates',
  'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'
];

function OrderPage() {
  const navigate = useNavigate();

  // State'ler
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Fiyat hesaplama
  const basePrice = 85.5;
  const extraPrice = 5;
  const sizePrice = size === "Orta" ? 10 : size === "Büyük" ? 20 : 0;
  const totalExtras = selectedExtras.length * extraPrice;
  const total = (basePrice + sizePrice + totalExtras) * quantity;

  // Checkbox değişimi
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedExtras(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  // Submit fonksiyonu
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form doğrulama
    if (!name || name.length < 3 || !size || !dough || selectedExtras.length < 4) {
      alert("Lütfen tüm gerekli alanları doldurun ve en az 4 malzeme seçin. İsim en az 3 karakter olmalı.");
      return;
    }

    // Payload
    const payload = {
      isim: name,
      boyut: size,
      hamur: dough,
      malzemeler: selectedExtras,
      not: note,
      adet: quantity,
      toplam: total.toFixed(2)
    };

    try {
      const response = await axios.post('https://reqres.in/api/pizza', payload);
      console.log("Sipariş yanıtı:", response.data);
      navigate("/onay", { state: { response: response.data } });
    } catch (error) {
      console.error("Sipariş gönderilemedi:", error);
      alert("Bir hata oluştu. Lütfen internet bağlantınızı kontrol edin.");
    }
  };

  return (
    <div className="order-page-wrapper">
      <div className="order-header">
        <h2>Teknolojik Yemekler</h2>
      </div>
        <img src="images\iteration-2-images\pictures\form-banner.png" alt="Pizza" className="pizza-banner" />

      <div className="order-container">

      <p className="breadcrumb">Anasayfa &gt; Sipariş Oluştur</p>
        <h1 className="pizza-title">Position Absolute Acı Pizza</h1>
        <p className="price">85.50₺</p>
        <p className="desc">
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana
        göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>

        <form className="order-form" onSubmit={handleSubmit}>
          

          <div className="form-row">
            <div className="form-group">
              <label>Boyut Seç *</label>
              <div className="radio-group">
                <label><input type="radio" name="size" value="Küçük" onChange={() => setSize('Küçük')} /> Küçük</label>
                <label><input type="radio" name="size" value="Orta" onChange={() => setSize('Orta')} /> Orta</label>
                <label><input type="radio" name="size" value="Büyük" onChange={() => setSize('Büyük')} /> Büyük</label>
              </div>
            </div>

            <div className="form-group">
              <label>Hamur Seç *</label>
              <select onChange={(e) => setDough(e.target.value)} defaultValue="">
                <option value="" disabled>Hamur Kalınlığı</option>
                <option value="İnce">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
              </select>
            </div>
          </div>

          <div className="form-group">
  <label>Ek Malzemeler</label>
  <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
  <div className="extras-grid">
    {extras.map((item, idx) => (
      <label
        key={idx}
        className={`extra-item ${selectedExtras.includes(item) ? "selected" : ""}`}
      >
        <input
          type="checkbox"
          value={item}
          checked={selectedExtras.includes(item)}
          onChange={handleCheckboxChange}
          disabled={selectedExtras.length >= 10 && !selectedExtras.includes(item)}
        />
        <span className="check-icon">✔</span>
        {item}
      </label>
    ))}
  </div>
</div>



          <div className="form-group">
            <label>Sipariş Notu</label>
            <input
              type="text"
              placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div className="form-summary">
  <div className="quantity-box">
    <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
    <span>{quantity}</span>
    <button type="button" onClick={() => setQuantity(q => q + 1)}>+</button>
  </div>

  <div className="order-total-box">
    <h3>Sipariş Toplamı</h3>
    <div className="price-summary">
      <p><span>Seçimler</span> <span>{totalExtras.toFixed(2)}₺</span></p>
      <p><span>Boyut Farkı</span> <span>{sizePrice}₺</span></p>
      <p className="total"><span>Toplam</span> <span>{total.toFixed(2)}₺</span></p>
    </div>
    <button
      className="submit-button"
      type="submit"
      disabled={!size || !dough || selectedExtras.length < 4}

    >
      SİPARİŞ VER
    </button>
  </div>
</div>




        </form>
      </div>
    </div>
  );
}

export default OrderPage;
