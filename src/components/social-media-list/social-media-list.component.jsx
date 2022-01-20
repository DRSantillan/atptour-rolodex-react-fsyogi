import React from 'react';

import SocialMediaItem from '../social-media/social-media.component';

const SocialMediaList = ({socialmedia}) => {
   
    console.log(socialmedia)
	return(<div>
        {
            socialmedia.map(socialMediaItem => (
                <SocialMediaItem  socialmediaitem={socialMediaItem}/>
            ))
        }

    </div>)
};

export default SocialMediaList;
