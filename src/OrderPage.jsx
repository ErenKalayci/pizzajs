import React, { useState } from 'react';
import './OrderPage.css';

const extras = [
  'Pepperoni', 'Sosis', 'Kavurma-Jambon', 'Tavuk Izgara', 'Soğan', 'Domates',
  'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Sucuk', 'Ananas', 'Kabak'
];

function OrderPage() {
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  const basePrice = 85.5;
  const extraPrice = 5;

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedExtras(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const totalExtras = selectedExtras.length * extraPrice;
  const total = (basePrice + totalExtras) * quantity;

  return (
    <div className="order-container">
      <h2 className="restaurant-name">Teknolojik Yemekler</h2>
      <p className="breadcrumb">Anasayfa &gt; Sipariş Oluştur</p>

      <h1 className="pizza-title">Position Absolute Acı Pizza</h1>
      <p className="price">85.50₺</p>
      <p className="desc">
        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak taş fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
      </p>

      <form className="order-form">
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

        <div className="form-group">
          <label>Ek Malzemeler</label>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="extras-grid">
            {extras.map((item, idx) => (
              <label key={idx}>
                <input
                  type="checkbox"
                  value={item}
                  checked={selectedExtras.includes(item)}
                  onChange={handleCheckboxChange}
                  disabled={
                    selectedExtras.length >= 10 &&
                    !selectedExtras.includes(item)
                  }
                />
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

          <div className="price-summary">
            <p>Seçimler: {totalExtras.toFixed(2)}₺</p>
            <p><strong>Toplam: {total.toFixed(2)}₺</strong></p>
          </div>
        </div>

        <button className="submit-button" type="submit">SİPARİŞ VER</button>
      </form>
    </div>
  );
}

export default OrderPage;
