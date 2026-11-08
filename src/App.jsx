import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gọi API từ Backend của bạn (kiểm tra lại cổng 5128 xem khớp chưa)
    axios.get('http://localhost:5128/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Lỗi khi tải danh sách sản phẩm:", error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Cửa Hàng Đồ Thể Thao DinhDuyShop</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3>{product.name}</h3>
            <p style={{ color: 'red', fontWeight: 'bold' }}>{product.price} VNĐ</p>
            <button style={{ background: '#007bff', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;