import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import ReactDOM from 'react-dom';
import React from 'react';
import {
  FaLinkedin,
  FaTelegram,
  FaDiscord,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

function Modalinfo() {
  // ReactDom tiene este método para crear portales
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className="info">
        <h1>Todo Machine</h1>
        <p>
          📚 Una lista de pendientes sencilla, tiene las funciones normales,
          como agregar, eliminara, y completar tus tareas, también te damos la
          opción de poder filtras tus pendientes. Así que te invito a probar
          esta app.
        </p>
      </div>
      <div>
        <footer className="footer">
          <h3>Luis Candelo</h3>
          <h4>Frontent Developer</h4>
          <address>luiscandelo30@gmail.com</address>
          <p>Mis redes sociales</p>

          <div>
            <ul className="Social-content__new">
              <li>
                <a
                  href="https://www.linkedin.com/in/luis-eduardo-c-6015131ab/"
                  target="_blank"
                >
                  <FaLinkedin className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://t.me/Candelo_30" target="_blank">
                  <FaTelegram className="fa-brands fa-telegram" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/channels/@me/933515593863295067"
                  target="_blank"
                >
                  <FaDiscord className="fa-brands fa-discord" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Luis.Candelo.bass/"
                  target="_blank"
                >
                  <FaFacebook className="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+573182584548" target="_blank">
                  <FaWhatsapp className="fa-brands fa-whatsapp" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/luis_bass_1/?hl=es-la"
                  target="_blank"
                >
                  <FaInstagram className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Candelo30" target="_blank">
                  <FaGithub className="fa-brands" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>,
    document.getElementById('modalinfo')
  );
}

export { Modalinfo };
