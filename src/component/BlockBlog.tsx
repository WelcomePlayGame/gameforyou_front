export const BlockBlog = () => {


    return (
        <>
            <section className="block_blog_wrapper">
                <div className="block_blog_box">
                    <ul className="block_blog_ul">
                        <li className="block_blog_li">
                            <a href="/" className="block_blog_a">
                                <picture className="block_blog_picture">
                                    <img src="/img/game.jpg" alt="img" className="block_blog_img" />
                                </picture>
                            </a>
                            <div className="block_blog_box_info">
                                <span className="block_blog_type">Blog</span>
                                <span className="block_blog_author">GameforYou</span>
                            </div>
                            <div className="block_blog_box_title">
                                <a href="/">
                                    <h5 className="block_blog_h5">Title</h5>
                                </a>
                            </div>
                            <div className="block_blog_box_bottom_info">
                                <span className="block_blog_date">Today</span>
                                <span className="block_blog_comment">Comment</span>
                            </div>
                        </li>
                        <li className="block_blog_li">
                            <a href="/" className="block_blog_a">
                                <picture className="block_blog_picture">
                                    <img src="/img/game.jpg" alt="img" className="block_blog_img" />
                                </picture>
                            </a>
                            <div className="block_blog_box_info">
                                <span className="block_blog_type">Blog</span>
                                <span className="block_blog_author">GameforYou</span>
                            </div>
                            <div className="block_blog_box_title">
                                <a href="/">
                                    <h5 className="block_blog_h5">Title</h5>
                                </a>
                            </div>
                            <div className="block_blog_box_bottom_info">
                                <span className="block_blog_date">Today</span>
                                <span className="block_blog_comment">Comment</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
