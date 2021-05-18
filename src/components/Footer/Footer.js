import React from 'react';
import './Footer.css';


export default function Footer() {

    function changeBG() {
        document.body.style.background = "url('../../images/bg-tile-small.jpg') repeat";

    }

    return (
        <footer>
            {/* <button onClick={changeBG}>CLICK </button> */}
            Made with ♥ by Alina, Anneli, Julia, Hösaam ©️ 2021
        </footer>
    )
}
