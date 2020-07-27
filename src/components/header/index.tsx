import React from 'react';
import './index.scss';

export const Header: React.FC = () => {
    return (
        <div className="app-header">
            <div className="app-header__col-left header">
                <h1>#Youtube</h1>
                <h2>community</h2>
            </div>
            <div className="app-header__col-right">Lorem iprum nemo voluptate, doloribus ipsam tenetur ipsum! Dicta quidem@ <br/>
            <a href="#" target="_blank" className='link-admin'>aliquid ducimus.</a><br/><a href="#" target="_blank" className='link-admin'>aliquid ducimus.</a></div>
            {/* <div className="app-header_col-right"></div> */}
        </div>
    );
};
