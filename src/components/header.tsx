import React, { useEffect } from 'react';

const Header = () => {
  return (
    <header className="fixed">
      <div className="text-center title-area">
        <h1 id="title" className="hide">
          The F2E 4th
        </h1>
        <button>比賽資訊</button>
        <button>攻略資源</button>
        <button>求職專區</button>
      </div>
      <div className="login-area absolute">
        <button className="button button-primary">註冊報名</button>
        <button className="button button-secondary">登入</button>
      </div>
    </header>
  );
};

export default Header;
