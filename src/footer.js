function Footer() {
  return (
    <footer class="footer">
      <div class="footer__columns">

        <div class="footer__column footer__column_content_copyright">
          <div class="logo logo_place_footer"> <span>Практическая</span> </div>
          <div class="footer__autor"> &copy Виктор Абанькин</div>
        </div>

        <div class="footer__column footer__column_content_info">
          <div class="footer__column-heading">О Практикуме </div>
          <div class="footer__column-links">
            <a href="" class="footer__column-link"> Главная  </a>
            <a href="" class="footer__column-link"> Концепция   </a>
            <a href="" class="footer__column-link"> Наставники  </a>
          </div>
        </div>

        <div class="footer__column footer__column_content_social">
          <div class="footer__column-heading">Соцсети</div>
          <a href="footer__social-icon" class="footer__social-icon"> <img src="./images/youtube_color_white.svg" alt="Youtube" />Youtube</a>
          <a href="footer__social-icon" class="footer__social-icon"> <img src="./images/vk_color_white.svg" alt="VK" />Вконтакте</a>
          <a href="footer__social-icon" class="footer__social-icon"> <img src="./images/tiktok_color_white.svg" alt="tiktok" />Tiktok</a>


        </div>

      </div>

    </footer>
  )
}
export default Footer;