import React from 'react';

const Box3D = () => {
  return (
    <div className="box-container">
      <div className="rotating-box">
        <div className="box-face front">
          <img src="/img/1.png" alt="Green Box Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
        </div>
        <div className="box-face back">
          <img src="/img/2.jpg" alt="BistrôBox" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
        </div>
        <div className="box-face right">
          <img src="/img/3.jpg" alt="BrechóBox" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
        </div>
        <div className="box-face left">
          <img src="/img/4.jpg" alt="EngBox" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
        </div>
        <div className="box-face top">
          <img src="/img/5.jpg" alt="FarmaBox" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
        </div>
        <div className="box-face bottom">
          <img src="/img/6.jpg" alt="VetBox" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  );
};

export default Box3D;