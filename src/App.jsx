import React, { useState, useEffect } from 'react';
import '../src/App.css';
import { SlSocialInstagram, SlSocialGithub, SlPhone, SlSupport, SlArrowDown } from "react-icons/sl";
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import Box3D from './components/Box3D';

// Componente para o Card do App
const AppCard = ({ title, index, onClick }) => (
  <a href={`#${title}`} onClick={onClick}>
    <img 
      className="cards" 
      src={`/img/${index + 2}.jpg`} 
      alt={`App ${title}`}
      loading="lazy"
    />
  </a>
);

// Componente para a Seção do App
const AppSection = ({ title, index, isEven }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  });

  const SectionComponent = isEven ? "primary-section" : "secondary-section";
  
  return (
    <div 
      ref={sectionRef}
      className={`section ${SectionComponent}`} 
      id={title}
    >
      <div className={`content-text animate-on-scroll ${isVisible ? (isEven ? 'fade-in-left' : 'fade-in-right') : ''}`}>
        <h1>{title}</h1>
        <p>
          A GREEN BOX oferece dicas rápidas de como fazer um consumo consciente.
          Somos um conjunto de aplicativos que atuam em diferentes áreas com a mesma finalidade:
          Promover um mundo mais sustentável e consciente, de forma simples e corriqueira.
        </p>
        <a href={`/downloads/apps/${title}.apk`} download className="download-button">
          Baixar {title} App
        </a>
      </div>
      <div className={`content-img animate-on-scroll ${isVisible ? (isEven ? 'fade-in-right' : 'fade-in-left') : ''}`}>
        <img 
          src={`/img/${index + 2}.jpg`} 
          alt={`Imagem de ${title}`} 
          loading="lazy"
        />
      </div>
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const appTitles = ['BistrôBox', 'BrechóBox', 'EngBox', 'FarmaBox', 'VetBox'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='externa'>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="content-header">
          <div className="logo">
            <img src="/img/1.png" alt="Logo Green Boxing" />
          </div>
          <h4>GREEN BOXING</h4>
        </div>
        <nav className="btn-menu">
          <div className="menu">
            <a href="#apps"></a>
            <a href="#comunidade"></a>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="display">
          <div className="display-title">
            <h1 id="title" className="animate-on-scroll fade-in-up">GREEN BOXING</h1>
            <Box3D />
            <p id="sub-title" className="animate-on-scroll fade-in-up" style={{animationDelay: '0.2s'}}>
              PENSE FORA DA CAIXA, E PROMOVA UM FUTURO MAIS SUSTENTÁVEL
            </p>
            <SlArrowDown 
              size={26} 
              color="#fff" 
              className="arrow-down animate-on-scroll fade-in-up" 
              style={{animationDelay: '0.4s'}}
            />
          </div>
          <div className="img-apps-inline"> 
            {appTitles.map((title, index) => (
              <AppCard key={index} title={title} index={index} onClick={() => scrollToSection(title)} />
            ))}
          </div>

          {appTitles.map((title, index) => (
            <AppSection key={title} title={title} index={index} isEven={index % 2 === 0} />
          ))}
        </div>

        <footer className="footer">
          <div className="container-footer">
            <div className="icons">
              <p>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <SlSocialInstagram size={22} color="#333" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <SlSocialGithub size={22} color="#333" />
                </a>
                <a href="tel:+123456789" aria-label="Telefone">
                  <SlPhone size={22} color="#333" />
                </a>
                <a href="mailto:support@greenboxing.com" aria-label="Suporte">
                  <SlSupport size={22} color="#333" />
                </a>
              </p>
            </div>
            <div className="content-footer">
              <h3>Explore</h3>
              <p>
                <a href="#apps">Apps</a> <br />
                <a href="#comunidade">Comunidade</a> <br />
                <a href="#eco-pontos">Eco pontos</a> <br />
                <a href="#sobre-nos">Sobre nós</a> <br />
              </p>
            </div>
            <div className="content-footer">
              <h3>Recursos</h3>
              <p>
                <a href="#boas-praticas">Boas práticas</a> <br />
                <a href="#biblioteca">Biblioteca de uso</a> <br />
                <a href="#suporte">Suporte</a> <br />
                <a href="#contato">Fale conosco</a> <br />
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;