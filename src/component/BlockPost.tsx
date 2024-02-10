import words from "../wordsvariable/WORDS";
import BlogPostRight from "../component/BlogPostRight";
export const BlockPost = () => {
  return (
    <section className="block_post_wrapper container">
      <div className="block_box">
        <aside className="block_box_aside">
          <div className="desire_list">
            <h3>{words.US_INTERESTING}</h3>
            <ul className="desire_ul">
              <li className="desire_li">{words.LATEST_BLOGS}</li>
            </ul>
            <hr />
          </div>
          <div className="subcribe_tous">
            <h4 className="desire_h4">{words.YOU_FIND_US}</h4>
            <ul className="subcribe_ul">
              <li className="subcribe_li">
                <a
                  href="https://www.facebook.com/GameVadymPetrovich/"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/facebook.png`}
                    alt="facebook"
                    className="soc_icons_img"
                  />
                </a>
              </li>
              <li className="subcribe_li">
                <a href="https://discord.gg/RFgrFhXJzk" target="_blank">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/discord.png`}
                    alt="discord"
                    className="soc_icons_img"
                  />
                </a>
              </li>
              <li className="subcribe_li">
                <a
                  href="https://www.facebook.com/GameVadymPetrovich/"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/telegram.png`}
                    alt="discord"
                    className="soc_icons_img"
                  />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <BlogPostRight />
      </div>
    </section>
  );
};
export default BlockPost;
