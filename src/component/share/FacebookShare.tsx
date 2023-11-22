
import React from 'react';
type Facebook = {
    url : string
}
export const FacebookShare : React.FC<Facebook> = ({url}) => {





    const handleShare = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, 'facebook-share-dialog', 'width=626,height=436');
        console.log(url)
      };

    return (
        <span onClick={handleShare}>facebook</span>
    )
}