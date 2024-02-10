const Footer = () => {
  return (
    <div className="block_footer-wrapper">
      <div className="container">
        <div className="block_footer_box">
          <div className="block_footer_left">
            <div className="block_footer_left_new_box">
              <a href="\" className="block_footer_left_new_a">
                <span className="block_footer_left_new_title">Новини</span>
              </a>
            </div>
            <div className="block_footer_left_tags_box">
              <a href="/news" className="block_footer_left_tag_a">
                All
              </a>
              <a href="/news" className="block_footer_left_tag_a">
                PC
              </a>
            </div>
          </div>
          <div className="block_footer_right">
            <div className="block_footer_right">
              <div className="block_footer_left_new_box">
                <a href="\" className="block_footer_left_new_a">
                  <span className="block_footer_left_new_title">Ігри</span>
                </a>
              </div>
              <div className="block_footer_right_tags_box">
                <a href="/news" className="block_footer_rigth_tag_a">
                  Усі
                </a>
                <a href="/news" className="block_footer_rigth_tag_a">
                  Каталог
                </a>
                <a href="/news" className="block_footer_rigth_tag_a">
                  Ігри по рейтингу
                </a>
                <a href="/news" className="block_footer_rigth_tag_a">
                  Відгуки
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
