import React from 'react';
import Setinha from "./../assets/setinha.png";
import Verso from "./Verso";

export default function Frente(props) {
    const {id, frente, verso, definirStatus} = props;

    const [visivel, setVisivel] = React.useState(true);
    
    return visivel ? (
        <div className="Frente">
            <p>{frente}</p>
            <div
                className="setinha"
                onClick={() => setVisivel(false)}
            >
                <img src={Setinha} alt="Exibir resposta" />
            </div>
        </div>
    ) : (
        <Verso 
            id={id} 
            frente={frente} 
            verso={verso}
            definirStatus={definirStatus} 
        />
    );
}