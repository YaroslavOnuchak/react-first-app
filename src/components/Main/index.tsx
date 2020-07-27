import React from 'react';
import './index.scss';

export const Main: React.FC = () => {
    return (
        <main className='tags-list'>
            <div className="tags-list__group"><div className="tags-list__group-title">title</div>
                <div className="tags-list__group-content">content</div>
            </div>
        </main>
    );
};
