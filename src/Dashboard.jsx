import React, { useState } from 'react';

function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');

  // ĐÃ XÓA ÁO REAL MADRID, BẮT ĐẦU TRỰC TIẾP TỪ QUẢ BÓNG C1
  const [products] = useState([
    { 
      id: 1, 
      name: "Quả bóng UEFA Champions League Pro", 
      price: 3300000, 
      stock: 4, 
      minStock: 5, 
      colors: "Trắng họa tiết sao đa sắc, Xanh/Hồng", 
      sizes: "Size 5", 
      imageUrl: "https://www.futbolemotion.com/imagesarticulos/333764/750/balon-adidas-uefa-champions-league-2026-2027-pro-white-multicolor-1.webp" 
    },
    { 
      id: 2, 
      name: "Giày Nike Zoom Mercurial Vapor 15 Pro TF 'Mad'", 
      price: 5100000, 
      stock: 3, 
      minStock: 5, 
      colors: "Hồng pastel sọc đen, Đỏ cam, Trắng", 
      sizes: "40, 41, 42, 43", 
      imageUrl: "https://bizweb.dktcdn.net/100/352/697/products/3-7289d65b-22f8-48f7-937a-3a5a6b12b389.jpg?v=1718625027977" 
    },
    { 
      id: 3, 
      name: "Giày đá bóng Nike Phantom GX II Elite", 
      price: 2900000, 
      stock: 6, 
      minStock: 4, 
      colors: "Trắng hồng, Đen tuyền, Xanh ngọc", 
      sizes: "39, 40, 41, 42, 43", 
      imageUrl: "https://images.prodirectsport.com/productimages/Gallery_5/1023333_Gallery_5_1869758.jpg" 
    },
    { 
      id: 4, 
      name: "Giày đá bóng Nike Tiempo Legend 10 Pro", 
      price: 2400000, 
      stock: 8, 
      minStock: 4, 
      colors: "Cam san hô, Trắng bạc, Đen", 
      sizes: "39, 40, 41, 42", 
      imageUrl: "https://nikeclprod.vtexassets.com/arquivos/ids/1208950/DV4333_800_A_PREM.jpg?v=638719684456470000" 
    },
    { 
      id: 5, 
      name: "Găng tay thủ môn Nike Vapor Grip3 (VG3)", 
      price: 1250000, 
      stock: 5, 
      minStock: 3, 
      colors: "Đen phối hồng neon, Trắng xanh", 
      sizes: "8, 9, 10", 
      imageUrl: "https://www.bestbuysoccer.com/cdn/shop/files/nike-vapor-grip3-goalkeeper-gloves-siren-redblue-437329.jpg?crop=center&height=1200&v=1750739506&width=1200" 
    },
    { 
      id: 6, 
      name: "Găng tay thủ môn Nike Phantom Elite", 
      price: 1400000, 
      stock: 2, 
      minStock: 3, 
      colors: "Cam sáng logo vàng, Xanh đậm", 
      sizes: "9, 10", 
      imageUrl: "https://shop.torwart.de/out/pictures/master/product/1/ncn6724-406_1.jpg" 
    },
    { 
      id: 7, 
      name: "Áo giữ nhiệt thể thao dài tay đá bóng", 
      price: 180000, 
      stock: 35, 
      minStock: 10, 
      colors: "Đen tuyền logo trắng, Xám, Xanh rêu", 
      sizes: "S, M, L, XL", 
      imageUrl: "https://contents.mediadecathlon.com/s1451506/k%2493c72dacebf8e875a4ff9fc07d4b6a94/8f5e18b5-1b23-40f0-bf3a-d499ac810a8f.jpg?f=1920x0&format=auto" 
    },
    { 
      id: 8, 
      name: "Dây tập thể lực đa năng kháng lực (Resistance Band)", 
      price: 220000, 
      stock: 20, 
      minStock: 5, 
      colors: "Xanh nhạt tay cầm đen, Đỏ, Vàng", 
      sizes: "Standard", 
      imageUrl: "https://i.ebayimg.com/images/g/Ue8AAeSwgOlqumM7/s-l500.jpg" 
    }
  ]);

  const [customers] = useState([
    { id: 1, name: 'Trần Văn An', username: 'khachhang1', pass: '123456', email: 'an.tran@gmail.com', phone: '0905123456', address: '120 Lê Hồng Phong, TP. Quy Nhơn', totalSpent: '5.100.000 đ' },
    { id: 2, name: 'Nguyễn Thị Bình', username: 'khachhang2', pass: '123456', email: 'binh.nt@gmail.com', phone: '0918987654', address: '45 Trần Hưng Đạo, TP. Quy Nhơn', totalSpent: '3.300.000 đ' }
  ]);

  const [staffs] = useState([
    { id: 'NV01', name: 'Trần Đinh Duy', username: 'admin', pass: '123456', role: 'Quản lý cửa hàng (Admin)', phone: '0969111222', address: '22 Nguyễn Huệ, TP. Quy Nhơn, Bình Định' },
    { id: 'NV02', name: 'Lê Văn Khải', username: 'nhanvien1', pass: '123456', role: 'Nhân viên Bán hàng', phone: '0905333444', address: '15 Hoàng Văn Thụ, TP. Quy Nhơn, Bình Định' }
  ]);

  const [orders] = useState([
    { id: 'GD001', date: '08/11/2026', customer: 'Trần Văn An', product: 'Giày Nike Mercurial Vapor 15 (Màu hồng, Size 40)', total: '5.100.000 đ', tax: '510.000 đ', status: 'Hoàn thành' }
  ]);

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: '"Segoe UI", Tahoma, sans-serif', backgroundColor: '#f8f9fa' }}>
      
      {/* SIDEBAR BÊN TRÁI */}
      <div style={{ width: '270px', backgroundColor: '#7b1113', color: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '25px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '900' }}>DINHDUYSHOP</h2>
          <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>📍 Trụ sở: TP. Quy Nhơn, Bình Định</span>
        </div>

        <div style={{ padding: '20px 10px', flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div onClick={() => setActiveTab('overview')} style={{ padding: '12px 15px', borderRadius: '8px', backgroundColor: activeTab === 'overview' ? 'rgba(255,255,255,0.2)' : 'transparent', cursor: 'pointer', fontWeight: 'bold' }}>📊 Tổng quan & Doanh thu</div>
          <div onClick={() => setActiveTab('products')} style={{ padding: '12px 15px', borderRadius: '8px', backgroundColor: activeTab === 'products' ? 'rgba(255,255,255,0.2)' : 'transparent', cursor: 'pointer', fontWeight: 'bold' }}>📦 Kho & Sản phẩm</div>
          <div onClick={() => setActiveTab('customers')} style={{ padding: '12px 15px', borderRadius: '8px', backgroundColor: activeTab === 'customers' ? 'rgba(255,255,255,0.2)' : 'transparent', cursor: 'pointer', fontWeight: 'bold' }}>👥 Tài khoản Khách hàng</div>
          <div onClick={() => setActiveTab('staff')} style={{ padding: '12px 15px', borderRadius: '8px', backgroundColor: activeTab === 'staff' ? 'rgba(255,255,255,0.2)' : 'transparent', cursor: 'pointer', fontWeight: 'bold' }}>👔 Tài khoản Nhân viên</div>
          <div onClick={() => setActiveTab('transactions')} style={{ padding: '12px 15px', borderRadius: '8px', backgroundColor: activeTab === 'transactions' ? 'rgba(255,255,255,0.2)' : 'transparent', cursor: 'pointer', fontWeight: 'bold' }}>💳 Giao dịch & Thuế</div>
        </div>

        <div style={{ padding: '20px' }}>
          <button onClick={onLogout} style={{ width: '100%', padding: '10px', backgroundColor: 'rgba(0,0,0,0.3)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Đăng xuất
          </button>
        </div>
      </div>

      {/* NỘI DUNG CHÍNH BÊN PHẢI */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        
        {/* HEADER */}
        <div style={{ backgroundColor: 'white', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
          <span style={{ fontWeight: '700', color: '#555' }}>Hệ thống Quản lý DinhDuyShop - Chi nhánh Quy Nhơn</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', color: '#333' }}>
            <span>Trần Đinh Duy (Admin)</span>
            <div style={{ width: '35px', height: '35px', backgroundColor: '#ddd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👨‍💻</div>
          </div>
        </div>

        <div style={{ padding: '30px 40px' }}>
          
          {/* TAB 1: TỔNG QUAN */}
          {activeTab === 'overview' && (
            <div>
              <h1 style={{ margin: '0 0 5px 0', fontSize: '1.8rem', color: '#1a1a1a' }}>Tổng quan hệ thống kinh doanh</h1>
              <p style={{ color: '#666', margin: '0 0 30px 0' }}>Báo cáo tài chính, doanh thu ngày, tháng, năm và quản lý kho hàng tại Quy Nhơn.</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '25px' }}>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #eee' }}>
                  <span style={{ color: '#777', fontSize: '0.8rem', fontWeight: '700' }}>DOANH THU HÔM NAY</span>
                  <h2 style={{ color: '#7b1113', margin: '10px 0 0 0', fontSize: '1.4rem' }}>8.400.000 đ</h2>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #eee' }}>
                  <span style={{ color: '#777', fontSize: '0.8rem', fontWeight: '700' }}>DOANH THU THÁNG (11/2026)</span>
                  <h2 style={{ color: '#1a1a1a', margin: '10px 0 0 0', fontSize: '1.4rem' }}>72.100.000 đ</h2>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #eee' }}>
                  <span style={{ color: '#777', fontSize: '0.8rem', fontWeight: '700' }}>DOANH THU NĂM (2026)</span>
                  <h2 style={{ color: '#1a1a1a', margin: '10px 0 0 0', fontSize: '1.4rem' }}>750.000.000 đ</h2>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #eee' }}>
                  <span style={{ color: '#777', fontSize: '0.8rem', fontWeight: '700' }}>THUẾ VAT ĐÃ KHẤU TRỪ</span>
                  <h2 style={{ color: '#e53e3e', margin: '10px 0 0 0', fontSize: '1.4rem' }}>75.000.000 đ</h2>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #eee' }}>
                  <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', color: '#333' }}>📦 Cảnh báo Kho hàng</h3>
                  <p style={{ margin: '8px 0', color: '#555' }}>Tổng danh mục sản phẩm: <b>{products.length} dòng hàng thể thao</b></p>
                  <p style={{ margin: '8px 0', color: '#e53e3e' }}>⚠️ Sản phẩm sắp hết / Cần nhập thêm: <b>2 sản phẩm</b> (Giày Nike Vapor 15, Găng tay Phantom)</p>
                </div>
                <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #eee' }}>
                  <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', color: '#333' }}>📍 Địa điểm kinh doanh</h3>
                  <p style={{ margin: '8px 0', color: '#555' }}>Tên doanh nghiệp: <b>DinhDuyShop Sports & Fitness</b></p>
                  <p style={{ margin: '8px 0', color: '#555' }}>Trụ sở chính: <b>Thành phố Quy Nhơn, Tỉnh Bình Định</b></p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KHO & SẢN PHẨM */}
          {activeTab === 'products' && (
            <div>
              <h1 style={{ margin: '0 0 20px 0', fontSize: '1.8rem', color: '#1a1a1a' }}>Quản lý Kho & Danh mục Sản phẩm</h1>
              
              <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '1px solid #dee2e6' }}>
                      <th style={{ padding: '15px' }}>Hình ảnh thực tế</th>
                      <th style={{ padding: '15px' }}>Tên sản phẩm</th>
                      <th style={{ padding: '15px' }}>Giá bán</th>
                      <th style={{ padding: '15px' }}>Màu sắc tùy chọn</th>
                      <th style={{ padding: '15px' }}>Size / Kích cỡ</th>
                      <th style={{ padding: '15px' }}>Tồn kho</th>
                      <th style={{ padding: '15px' }}>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => {
                      const isLowStock = p.stock <= p.minStock;
                      return (
                        <tr key={p.id} style={{ borderBottom: '1px solid #f1f3f5' }}>
                          <td style={{ padding: '10px 15px' }}>
                            <img 
                              src={p.imageUrl} 
                              alt={p.name} 
                              style={{ width: '55px', height: '55px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#f8f9fa' }}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=500";
                              }}
                            />
                          </td>
                          <td style={{ padding: '15px', fontWeight: 'bold', color: '#333' }}>{p.name}</td>
                          <td style={{ padding: '15px', color: '#e53e3e', fontWeight: 'bold' }}>{p.price.toLocaleString('vi-VN')} ₫</td>
                          <td style={{ padding: '15px', color: '#4a5568', fontSize: '0.9rem' }}>{p.colors}</td>
                          <td style={{ padding: '15px' }}>
                            <span style={{ padding: '4px 8px', backgroundColor: '#edf2f7', border: '1px solid #cbd5e0', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700' }}>{p.sizes}</span>
                          </td>
                          <td style={{ padding: '15px', fontWeight: 'bold' }}>{p.stock} cái</td>
                          <td style={{ padding: '15px' }}>
                            {isLowStock ? (
                              <span style={{ padding: '4px 10px', backgroundColor: '#fff3cd', color: '#856404', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>⚠️ Sắp hết</span>
                            ) : (
                              <span style={{ padding: '4px 10px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>✅ Đủ hàng</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: KHÁCH HÀNG */}
          {activeTab === 'customers' && (
            <div>
              <h1 style={{ margin: '0 0 5px 0', fontSize: '1.8rem', color: '#1a1a1a' }}>Tài khoản Khách hàng (Dùng để test)</h1>
              <p style={{ color: '#666', margin: '0 0 20px 0' }}>Sử dụng thông tin dưới đây để đăng nhập và trải nghiệm tính năng chọn mua sản phẩm.</p>
              
              <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '1px solid #dee2e6' }}>
                      <th style={{ padding: '15px' }}>Họ tên</th>
                      <th style={{ padding: '15px' }}>Tên đăng nhập (Username)</th>
                      <th style={{ padding: '15px' }}>Mật khẩu (Password)</th>
                      <th style={{ padding: '15px' }}>Số điện thoại</th>
                      <th style={{ padding: '15px' }}>Địa chỉ giao hàng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map(c => (
                      <tr key={c.id} style={{ borderBottom: '1px solid #f1f3f5' }}>
                        <td style={{ padding: '15px', fontWeight: 'bold' }}>{c.name}</td>
                        <td style={{ padding: '15px', color: '#2b6cb0', fontWeight: 'bold' }}>{c.username}</td>
                        <td style={{ padding: '15px', color: '#718096' }}>{c.pass}</td>
                        <td style={{ padding: '15px' }}>{c.phone}</td>
                        <td style={{ padding: '15px' }}>{c.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: NHÂN VIÊN */}
          {activeTab === 'staff' && (
            <div>
              <h1 style={{ margin: '0 0 5px 0', fontSize: '1.8rem', color: '#1a1a1a' }}>Tài khoản Nhân viên & Quản trị</h1>
              <p style={{ color: '#666', margin: '0 0 20px 0' }}>Thông tin tài khoản nội bộ và địa chỉ thường trú tại Quy Nhơn của nhân viên.</p>

              <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '1px solid #dee2e6' }}>
                      <th style={{ padding: '15px' }}>Họ tên</th>
                      <th style={{ padding: '15px' }}>Chức vụ</th>
                      <th style={{ padding: '15px' }}>Username / Pass</th>
                      <th style={{ padding: '15px' }}>SĐT</th>
                      <th style={{ padding: '15px' }}>Địa chỉ tại Quy Nhơn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffs.map(s => (
                      <tr key={s.id} style={{ borderBottom: '1px solid #f1f3f5' }}>
                        <td style={{ padding: '15px', fontWeight: 'bold' }}>{s.name}</td>
                        <td style={{ padding: '15px' }}><span style={{ padding: '4px 10px', backgroundColor: '#e2e8f0', borderRadius: '15px', fontSize: '0.8rem', fontWeight: '600' }}>{s.role}</span></td>
                        <td style={{ padding: '15px', fontWeight: 'bold', color: '#7b1113' }}>{s.username} / {s.pass}</td>
                        <td style={{ padding: '15px' }}>{s.phone}</td>
                        <td style={{ padding: '15px' }}>{s.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: GIAO DỊCH */}
          {activeTab === 'transactions' && (
            <div>
              <h1 style={{ margin: '0 0 20px 0', fontSize: '1.8rem', color: '#1a1a1a' }}>Lịch sử Giao dịch & Báo cáo Thuế</h1>
              <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f1f3f5', borderBottom: '1px solid #dee2e6' }}>
                      <th style={{ padding: '15px' }}>Mã GD</th>
                      <th style={{ padding: '15px' }}>Ngày</th>
                      <th style={{ padding: '15px' }}>Khách hàng</th>
                      <th style={{ padding: '15px' }}>Sản phẩm & Tùy chọn</th>
                      <th style={{ padding: '15px' }}>Tổng tiền</th>
                      <th style={{ padding: '15px' }}>Thuế VAT (10%)</th>
                      <th style={{ padding: '15px' }}>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(o => (
                      <tr key={o.id} style={{ borderBottom: '1px solid #f1f3f5' }}>
                        <td style={{ padding: '15px', fontWeight: 'bold' }}>{o.id}</td>
                        <td style={{ padding: '15px' }}>{o.date}</td>
                        <td style={{ padding: '15px' }}>{o.customer}</td>
                        <td style={{ padding: '15px', fontWeight: '500' }}>{o.product}</td>
                        <td style={{ padding: '15px', color: '#e53e3e', fontWeight: 'bold' }}>{o.total}</td>
                        <td style={{ padding: '15px', color: '#666' }}>{o.tax}</td>
                        <td style={{ padding: '15px' }}>
                          <span style={{ padding: '4px 12px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                            {o.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
