import React from 'react';
import Setinha from "./../assets/setinha.png";
import Verso from "./Verso";

export default function Frente(props) {
    const {id, frente, verso} = props;

    const [visivel, setVisivel] = React.useState(true);
    
    return visivel ? (
        <div class="Frente">
            <p>{frente}</p>
            <div
                class="setinha"
                onClick={() => setVisivel(false)}
            >
                <img src={Setinha} alt="Exibir resposta" />
            </div>
        </div>
    ) : (
        <Verso id={id} frente={frente} verso={verso}/>
    );
}