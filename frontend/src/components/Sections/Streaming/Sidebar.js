import React from 'react';

import Channel from './Channel';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h6>FOLLOWED CHANNELS</h6>
                <Channel avatar='https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__340.jpg'
                    name='cleverprogrammer'
                    followers='828k'/>

                <Channel avatar='https://cdn.pixabay.com/photo/2016/07/31/12/59/charcoal-drawing-1558900__340.jpg'
                    name='cleverprogrammer'
                    followers='828k'/>


                <h6>RECOMMENDED CHANNELS</h6>
                <Channel avatar='https://cdn.pixabay.com/photo/2016/10/16/22/44/glass-ball-1746506__340.jpg'
                    name='cleverprogrammer'
                    followers='828k'/>

                <Channel avatar='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__340.jpg'
                    name='cleverprogrammer'
                    followers='828k'/>
                    
                <Channel avatar='https://cdn.pixabay.com/photo/2021/01/20/09/42/lake-5933622__340.jpg'
                    name='cleverprogrammer'
                    followers='828k'/>


                <p className='sidebar__topShowMore'>Show more</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder='Search to Add Friends' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
