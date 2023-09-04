import { BlockBlog } from "./BlockBlog"

export const BlockPost = () => {






    return (

        <section className="block_post_wrapper container">
            <div className="block_box">
                <aside className="block_box_aside">
                    <h2>Все що потрібно знати</h2>
                    <div className="desire_list">
                        <h3>Ми підібрали</h3>
                        <ul className="desire_ul">
                            <li className="desire_li">lorem</li>
                            <li className="desire_li">lorem</li>
                            <li className="desire_li">lorem</li>
                        </ul>
                        <hr />
                    </div>
                    <div className="subcribe_tous">
                        <h4 className="desire_h4">Ти можешь нас знайти</h4>
                        <ul className="subcribe_ul">
                            <li className="subcribe_li">Facebook</li>
                            <li className="subcribe_li">Discord</li>
                            <li className="subcribe_li">Telegram</li>
                        </ul>
                    </div>
                </aside>
                <div className="block_post_right">

                    <div className="block_box_post">
                        <h5 className="block_post_right_h5">Останні ігрові новини</h5>
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
                        <button style={{ cursor: "crosshair" }}>Глянути Більше</button>
                    </div>
                    <>
                        <BlockBlog />
                    </>
                </div>

            </div>
        </section>
    )
}