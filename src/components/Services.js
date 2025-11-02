import React from "react";
import "./Services.css";
import logo from "./images/logo.png";

const Services = () => {
  return (
    <div className="services">
      <header className="services-header">
      <a href="/">
        <img src={logo} alt="DigiMenu.az Logo" className="logo" />
      </a>  
        <h1>Xidmətlərimiz</h1>
      </header>

      <main className="services-content">
        <section className="services-list">
          <div className="service-card">
            <div className="icon">📱</div>
            <h3>Rəqəmsal Menyular</h3>
            <p>QR kodlar vasitəsilə asan və sürətli menyu həlləri təqdim edirik.</p>
          </div>
          <div className="service-card">
            <div className="icon">📢</div>
            <h3>Reklamların Edilməsi</h3>
            <p>Biznesinizin sosial şəbəkələrimizdə reklamların edilməsi.</p>
          </div>
          <div className="service-card">
            <div className="icon">🔄</div>
            <h3>Menyu Yenilənmələri</h3>
            <p>Menyularınızı sürətli şəkildə yeniləmək üçün dəstək veririk.</p>
          </div>
        </section>

        <section className="services-cta">
          <h2>Biznesinizi rəqəmsal platformaya keçirməyə hazırsınız?</h2>
          <p>
            Xidmətlərimizdən faydalanmaq və biznesinizin müştəri təcrübəsini artırmaq üçün indi bizə qoşulun!
          </p>
          <a href="/contact" className="button2">Əlaqə saxlayın</a>
        </section>
      </main>

      <footer className="services-footer">
        © 2025 DigiMenu.az. Bütün hüquqlar qorunur.
      </footer>
    </div>
  );
};

export default Services;
