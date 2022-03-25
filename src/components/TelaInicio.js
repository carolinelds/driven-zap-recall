import React from 'react';
import Logo from "./../assets/logo.png";

export default function TelaInicio(){

    const [visivel, setVisivel] = React.useState(true);

    return visivel ? (
        <div class="TelaInicio">
            <img src={Logo} alt="Logo do Zap Recall" />
            <p>ZapRecall</p>
            <button onClick={() => setVisivel(false)}>
                <p>Iniciar Recall!</p>
            </button>
        </div>
    ) : ( <></> );
}