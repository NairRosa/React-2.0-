import React from 'react';
import '../src/App.css'; // Importando o CSS

const App = () => {
  return (
    <div>
      <header className="header">
        <div className="content-header">
          <div className="logo">
            <img src="/img/1.png" alt="logo" />
          </div>
          <h4>GREEN BOXING</h4>
        </div>
        <nav className="btn-menu">
          <div className="menu">
            <a href="#">Inscrever-se</a>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="display">
          <div className="display-title">
            <h1 id="title">GREEN BOXING</h1>
            <p id="sub-title">PENSE FORA DA CAIXA, E PROMOVA UM FUTURO MAIS SUSTENTÁVEL</p>
            <img className="arrow-down" src="/img/arrow-down.png" alt="arrow down" />
          </div>
          <div className="img-apps-inline">
            {[2, 3, 4, 5, 6].map(num => (
              <img key={num} className="cards" src={`/img/${num}.png`} alt={`App ${num}`} />
            ))}
          </div>
          <div className="content">
            <p>
              A GREEN BOX oferece dicas rápidas de como fazer um consumo consciente. <br />
              Somos um conjunto utilitários de aplicativos, que atuam em diferentes áreas com a mesma finalidade: <br />
              Promover um mundo mais sustentável e consciente, de forma simples e corriqueira.
            </p>
            <div className="content-img">
              <img src="/img/2.png" alt="teste" />
            </div>
          </div>
        </div>

        {['BrechóBox', 'EngBox', 'FarmaBox', 'GastrôBox', 'VetBox'].map((title, index) => (
          <div className="section" key={title}>
            <h1>{title}</h1>
            <div className="content">
              <p>
                A GREEN BOX oferece dicas rápidas de como fazer um consumo consciente. <br />
                Somos um conjunto utilitários de aplicativos, que atuam em diferentes áreas com a mesma finalidade: <br />
                Promover um mundo mais sustentável e consciente, de forma simples e corriqueira.
              </p>
              <div className="content-img">
                <img src={`/img/${index + 3}.png`} alt={`Teste ${title}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="container-footer">
          <div className="icons">
            <p>ghbgfvdnhbgfnybgvf</p>
          </div>
          <div className="content-footer">
            <h3>Explore</h3>
            <p>
              <a href="">Apps</a> <br />
              <a href="">Comunidade</a> <br />
              <a href="">Eco pontos</a> <br />
              <a href="">Sobre nós</a> <br />
            </p>
          </div>
          <div className="content-footer">
            <h3>Recursos</h3>
            <p>
              <a href="">Boas práticas</a> <br />
              <a href="">Biblioteca de uso</a> <br />
              <a href="">Suporte</a> <br />
              <a href="">Fale conosco</a> <br />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;