import React, { useState } from 'react';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if ((username === 'admin' || username === 'nhanvien1') && password === '123456') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu! (Dùng: admin / 123456)');
    }
  };

  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', fontFamily: 'sans-serif', margin: 0, padding: 0, overflow: 'hidden' }}>
      <div style={{ 
        flex: 1, 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
        padding: '50px', 
        color: 'white' 
      }}>
        <div style={{ background: 'rgba(123, 17, 19, 0.85)', padding: '10px 16px', borderRadius: '8px', width: 'fit-content', marginBottom: '15px', fontWeight: 'bold', fontSize: '14px' }}>
          DINHDUYSHOP - QUY NHƠN
        </div>
        <h1 style={{ fontSize: '3rem', margin: '0 0 15px 0', fontWeight: '800', letterSpacing: '1px' }}>Management</h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '450px', lineHeight: '1.6', color: '#f0f0f0', margin: 0 }}>
          Hệ thống quản lý cửa hàng thể thao toàn diện, thống kê doanh thu, quản lý kho hàng và thuế VAT tại Quy Nhơn.
        </p>
      </div>

      <div style={{ width: '500px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <div style={{ width: '60px', height: '60px', background: '#7b1113', borderRadius: '14px', margin: '0 auto 15px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
            D
          </div>
          <h2 style={{ fontSize: '1.8rem', color: '#111', margin: '0 0 8px 0' }}>Chào mừng trở lại</h2>
          <p style={{ color: '#666', fontSize: '0.95rem', margin: 0 }}>Đăng nhập để tiếp tục quản lý cửa hàng</p>
        </div>

        {error && (
          <div style={{ background: '#f8d7da', color: '#721c24', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.9rem', textAlign: 'center', border: '1px solid #f5c6cb' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Tên đăng nhập hoặc Email</label>
            <input 
              type="text" 
              placeholder="Nhập admin hoặc nhanvien1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }}
              required 
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Mật khẩu</label>
            <input 
              type="password" 
              placeholder="Nhập 123456"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }}
              required 
            />
          </div>

          <button 
            type="submit"
            style={{ width: '100%', padding: '14px', background: '#7b1113', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Đăng nhập
          </button>
        </form>

        <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.85rem', color: '#888' }}>
          Gợi ý tài khoản test nhanh: <b style={{ color: '#333' }}>admin</b> / <b style={{ color: '#333' }}>123456</b>
        </div>
      </div>
    </div>
  );
}

export default App;
