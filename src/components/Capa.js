import React from 'react';
import Play from "./../assets/play.png";
import Frente from "./Frente";

export default function Capa(props) {
    const {id, frente, verso} = props;

    const [visivel, setVisivel] = React.useState(true);
    
    return visivel ? (
        <div
            class="Capa"
            onClick={() => setVisivel(false)}
        >
            <p>Pergunta {id}</p>
            <img src={Play} alt="Abrir pergunta" />
        </div>
    ) : (
        <Frente id={id} frente={frente} verso={verso}/>
    );
}