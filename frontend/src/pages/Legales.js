import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import Back from '../components/Back';

const Legales = () => {
    useEffect(() => {
        window.scroll(0,0)
      }, [])
    const theme = useSelector((state) => state.theme);
    return (
        <div className={'legales '+ theme}>
            <Header />
            <Back />
            <Footer />
        </div>
    );
};

export default Legales;