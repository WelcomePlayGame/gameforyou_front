import words from "../wordsvariable/WORDS"
import { BlockBlog } from "./BlockBlog"
import { BlockHelpDiscus } from "./BlockHelpDiscus"
import { BlockHotDiscus } from "./BlockHotDiscus"
import { BlockHotPost } from "./slide/BlockHotPost"

export const BlockPost = () => {






    return (

        <section className="block_post_wrapper container">
            <div className="block_box">
                <aside className="block_box_aside">
                    <div className="desire_list">
                        <h3>{words.US_INTERESTING }</h3>
                        <ul className="desire_ul">
                            <li className="desire_li">{words.LATEST_BLOGS}</li>
                        </ul>
                        <hr />
                    </div>
                    <div className="subcribe_tous">
                        <h4 className="desire_h4">{words.YOU_FIND_US}</h4>
                        <ul className="subcribe_ul">
                            <li className="subcribe_li">
                                 <a href="https://www.facebook.com/GameVadymPetrovich/" target="_blank">
                                    <img src={`${process.env.PUBLIC_URL}/icons/facebook.png`} alt="facebook" className="soc_icons_img"/>
                                </a>
                            </li>
                            <li className="subcribe_li">
                                <a href="https://www.facebook.com/GameVadymPetrovich/" target="_blank">
                                    <img src={`${process.env.PUBLIC_URL}/icons/discord.png`} alt="discord" className="soc_icons_img"/>
                                </a>
                            </li>
                            <li className="subcribe_li">
                            <a href="https://www.facebook.com/GameVadymPetrovich/" target="_blank">
                                    <img src={`${process.env.PUBLIC_URL}/icons/telegram.png`} alt="discord" className="soc_icons_img"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="block_post_right">

                    <div className="block_box_post">
                        <h5 className="block_post_right_h5">{words.LatestGamingNews}</h5>
                        <ul className="block_post_ul">
                            <li className="block_post_li">
                                <a href="/" className="block_post_a">
                                    <picture className="block_post_picture">
                                        <img src="/img/game.jpg" alt="picture" className="block_post_img" />
                                    </picture>
                                    <span style={{ display: "flex" }}>Today</span>
                                    <span>loremf,efoeffefe</span>
                                </a>
                            </li>                            <li className="block_post_li">
                                <a href="/" className="block_post_a">
                                    <picture className="block_post_picture">
                                        <img src="/img/game.jpg" alt="picture" className="block_post_img" />
                                    </picture>
                                    <span style={{ display: "flex" }}>Today</span>
                                    <span>loremf,efoeffefe2222</span>
                                </a>
                            </li>                            <li className="block_post_li">
                                <a href="/" className="block_post_a">
                                    <picture className="block_post_picture">
                                        <img src="/img/game.jpg" alt="picture" className="block_post_img" />
                                    </picture>
                                    <span style={{ display: "flex" }}>Today</span>
                                    <span>loremf,efoeffefe</span>
                                </a>
                            </li>                            <li className="block_post_li">
                                <a href="/" className="block_post_a">
                                    <picture className="block_post_picture">
                                        <img src="/img/game.jpg" alt="picture" className="block_post_img" />
                                    </picture>
                                    <span style={{ display: "flex" }}>Today</span>
                                    <span>loremf,efoeffefe</span>
                                </a>
                            </li>                            <li className="block_post_li">
                                <a href="/" className="block_post_a">
                                    <picture className="block_post_picture">
                                        <img src="/img/game.jpg" alt="picture" className="block_post_img" />
                                    </picture>
                                    <span style={{ display: "flex" }}>Today</span>
                                    <span>loremf,efoeffefe</span>
                                </a>
                            </li>                            <li className="block_post_li">
                                <a href="/" className="block_post_a">
                                    <picture className="block_post_picture">
                                        <img src="/img/game.jpg" alt="picture" className="block_post_img" />
                                    </picture>
                                    <span style={{ display: "flex" }}>Today</span>
                                    <span>loremf,efoeffefe</span>
                                </a>
                            </li>
                        </ul>
                        <button className="block_pos_btn">{words.MORE}</button>
                    </div>
                    <>
                        <BlockBlog />
                        <BlockHotPost />
                        <BlockBlog />
                        <BlockHotDiscus />
                        <BlockBlog />
                        <BlockHotPost />
                        <BlockBlog />
                        <BlockHotDiscus />
                        <BlockBlog />
                        <BlockHotPost />
                        <BlockBlog />
                        <BlockHelpDiscus />
                    </>
                </div>

            </div>
        </section>
    )
}