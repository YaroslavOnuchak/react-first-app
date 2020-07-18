import React from 'react';
import { Header } from '../header'
import { Main } from '../Main'
import './index.scss';

export const App: React.FC = () => {
    return (
        <div className='App' >
            <Header />
            <Main />
        </div >
    )
}
export default App;