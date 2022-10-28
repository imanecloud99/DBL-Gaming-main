import React from 'react';

import './Channel.css'

const Channel = ({ avatar, name, followers}) => {
    return (
        <div className='chaine'>
            <div className='chaine__details'>
                <img src={avatar} alt="avatar"/>
                <p>{name}</p>
            </div>
            <p>🔴 {followers}</p>

        </div>
    )
}

export default Channel
