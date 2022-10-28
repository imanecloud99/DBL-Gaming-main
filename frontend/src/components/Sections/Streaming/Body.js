import React from 'react'
import Profil from './Profil'

import './Body.css'
import Stream from './Stream'

const Body = () => {
    return (
        <div className="body">
            
            <div className="body--left">
                <Stream/>
                <Profil />
            </div>

            <div className="body_rightPlaceHolder">
                
            </div>
        </div>
    )
}

export default Body
