import React from "react";
import "./About.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
      {/* <a href="/">
        <img src={logo} alt="DigiMenu.az Logo" className="logo" />
      </a> */}
      <Link to="/">
      <img src={logo} alt="DigiMenu.az Logo" className="logo" />
       </Link>
        <h1>Haqqımızda</h1>
      </header>

      <main className="about-content">
        <section className="intro">
          <h2>Biz Kimik?</h2>
          <p>
            DigiMenu.az, restoran və kafelər üçün rəqəmsal menyu həlləri təqdim edən lider platformadır.
            Məqsədimiz müştərilərə yüksək keyfiyyətli və innovativ həllər təklif edərək işlərini asanlaşdırmaqdır.
          </p>
        </section>

        <section className="values">
          <div className="card">
            <h3>İnnovasiya</h3>
            <p>Hər zaman yeniliklərə açığıq və texnologiyanı sizin rahatlığınız üçün tətbiq edirik.</p>
          </div>
          <div className="card">
            <h3>Sadəlik</h3>
            <p>QR kodlarla istifadəsi asan olan menyu sistemləri yaradırıq.</p>
          </div>
          <div className="card">
            <h3>Etibar</h3>
            <p>Bizimlə əməkdaşlıq edən hər bir müştərinin ehtiyaclarını diqqətlə dinləyirik.</p>
          </div>
        </section>

        <section className="cta">
          <h2>Sizin üçün necə kömək edə bilərik?</h2>
          <p>Bizim xidmətlərimiz haqqında daha ətraflı öyrənmək və əməkdaşlıq etmək üçün bizimlə əlaqə saxlayın!</p>
          {/* <a href="/contact" className="button1">Əlaqə</a> */}
          <Link to="/contact" className="button1">
            Əlaqə
          </Link>
        </section>
      </main>

      <footer className="footer1">
        © 2025 DigiMenu.az. Bütün hüquqlar qorunur.
      </footer>
    </div>
  );
};

export default About;
