import twoAgain from './images/two_again.png';

function Header() {
  return (

    <header class="header">

      <div class="logo logo_place_header">
        <span>Практическая</span>
      </div>

      <div class="header__title">
        <h1>Научиться учиться</h1>
      </div>

      <div class="header__subtitle">
        <span>Какие современные и эффективные подходы к обучению вы можете использовать в своей жизни?   <a href="" class="header__link"> Узнать 	&#8594 </a></span>
      </div>

      <div class="header__main-illustration">
        <img src={twoAgain} alt=" — картина художника Фёдора Решетникова Опять двойка" />
      </div>

      <div class="header__square-pic">
      </div>

    </header>

  )
}

export default Header;