import React, { useState } from 'react';

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', fontFamily: 'sans-serif', margin: 0, padding: 0, background: '#f8f9fa' }}>
      {/* Sidebar đỏ đô bên trái */}
      <div style={{ width: '280px', background: '#7b1113', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '25px 20px' }}>
        <div>
          <div style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.4rem', margin: '0 0 5px 0', fontWeight: 'bold' }}>CỬA HÀNG DINHDUYSHOP</h2>
            <p style={{ fontSize: '0.85rem', color: '#ffcccc', margin: 0 }}>📍 Trụ sở: TP. Quy Nhơn, Bình Định</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button onClick={() => setActiveTab('overview')} style={{ textAlign: 'left', padding: '12px 15px', background: activeTab === 'overview' ? '#5a0c0e' : 'transparent', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
              📊 Tổng quan & Doanh thu
            </button>
            <button onClick={() => setActiveTab('inventory')} style={{ textAlign: 'left', padding: '12px 15px', background: activeTab === 'inventory' ? '#5a0c0e' : 'transparent', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
              📦 Kho & Sản phẩm
            </button>
            <button onClick={() => setActiveTab('customers')} style={{ textAlign: 'left', padding: '12px 15px', background: activeTab === 'customers' ? '#5a0c0e' : 'transparent', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
              👥 Tài khoản Khách hàng
            </button>
            <button onClick={() => setActiveTab('staff')} style={{ textAlign: 'left', padding: '12px 15px', background: activeTab === 'staff' ? '#5a0c0e' : 'transparent', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
              👤 Tài khoản Nhân viên
            </button>
            <button onClick={() => setActiveTab('finance')} style={{ textAlign: 'left', padding: '12px 15px', background: activeTab === 'finance' ? '#5a0c0e' : 'transparent', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
              💳 Giao dịch & Thuế
            </button>
          </div>
        </div>

        <div>
          <button onClick={onLogout} style={{ width: '100%', padding: '12px', background: '#4a0709', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            Đăng xuất
          </button>
        </div>
      </div>

      {/* Main content bên phải */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <div style={{ background: 'white', padding: '20px 30px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, color: '#333', fontSize: '1.1rem' }}>Hệ thống Quản lý DinhDuyShop - Chi nhánh Quy Nhơn</h3>
          <div style={{ fontWeight: '600', color: '#333' }}>Trần Đinh Duy (Quản trị viên) 👨‍💻</div>
        </div>

        <div style={{ padding: '30px' }}>
          <h1 style={{ fontSize: '1.8rem', color: '#222', textAlign: 'center', marginBottom: '8px' }}>Tổng quan hệ thống kinh doanh</h1>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Báo cáo tài chính, doanh thu ngày, tháng, năm và quản lý kho hàng tại Quy Nhơn.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#666', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>Doanh thu hôm nay</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#b91c1c' }}>8.400.000 đ</div>
            </div>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#666', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>Doanh thu tháng (11/2026)</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#111' }}>72.100.000 đ</div>
            </div>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#666', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>Doanh thu năm (2026)</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#111' }}>750.000.000 đ</div>
            </div>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#666', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>Thuế VAT đã khấu trừ</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#b91c1c' }}>75.000.000 đ</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', color: '#333' }}>📦 Cảnh báo Kho hàng</h3>
              <p style={{ color: '#555', margin: '0 0 10px 0' }}>Tổng danh mục sản phẩm: <b>8 dòng hàng thể thao</b></p>
              <div style={{ background: '#fff3cd', color: '#856404', padding: '12px', borderRadius: '8px', fontSize: '0.9rem', border: '1px solid #ffeeba' }}>
                ⚠️ Sản phẩm sắp hết / Cần nhập thêm: <b>2 sản phẩm</b> (Giày Nike Vapor 15, Găng tay Phantom)
              </div>
            </div>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', color: '#333' }}>📍 Địa điểm kinh doanh</h3>
              <p style={{ color: '#555', margin: '0 0 10px 0' }}>Tên doanh nghiệp: <b>DinhDuyShop Sports & Fitness</b></p>
              <p style={{ color: '#555', margin: 0 }}>Trụ sở chính: <b>Thành phố Quy Nhơn, Tỉnh Bình Định</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
