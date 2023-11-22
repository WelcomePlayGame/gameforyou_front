import { Helmet } from 'react-helmet';

export const NotFound = ()=> {



    return (
        <>
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="notfound_box">
          <img src={`${process.env.PUBLIC_URL}/icons/404.png`} alt="404" className="notfound_img" />
        </div>
      </>
    )
}