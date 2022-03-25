import React from 'react';
import Play from "./../assets/play.png";
import RespostaNaoLembrei from "./../assets/resposta-nao-lembrei.png";
import RespostaQuase from "./../assets/resposta-quase.png";
import RespostaZap from "./../assets/resposta-zap.png";
import Frente from "./Frente";

export default function Capa(props) {
    const { id, frente, verso } = props;

    const [capaVisivel, setCapaVisivel] = React.useState(true);
    const [status, setStatus] = React.useState("nao-respondido");

    function definirStatus(opcao) {
        setCapaVisivel(true);
        setStatus(opcao);
    }

    if (capaVisivel && status === "nao-respondido") {
        return (
            <div
                className="Capa"
                onClick={() => setCapaVisivel(false)}
            >
                <p className=".capa-nao-respondido">Pergunta {id}</p>
                <img 
                    src={Play} 
                    alt="Ícone de play: abrir pergunta" 
                />
            </div>
        );
    } else if (capaVisivel && status === "resposta-nao-lembrei") {
        return (
            <div
                className="Capa"
                onClick={() => setCapaVisivel(false)}
            >
                <p className=".capa-resposta-nao-lembrei">Pergunta {id}</p>
                <img 
                    src={RespostaNaoLembrei} 
                    alt="Ícone de um x vermelho: não lembrou a resposta" 
                />
            </div>
        );
    } else if (capaVisivel && status === "resposta-quase") {
        return (
            <div
                className="Capa"
                onClick={() => setCapaVisivel(false)}
            >
                <p className=".capa-resposta-quase">Pergunta {id}</p>
                <img 
                    src={RespostaQuase} 
                    alt="Ícone de uma interrogação laranja: quase acertou a resposta" 
                />
            </div>
        );
    } else if (capaVisivel && status === "resposta-zap") {
        return (
            <div
                className="Capa"
                onClick={() => setCapaVisivel(false)}
            >
                <p className=".resposta-zap">Pergunta {id}</p>
                <img 
                    src={RespostaZap} 
                    alt="Ícone do símbolo de correto verde: acertou a resposta" 
                />
            </div>
        );
    } else {
        return (
            <Frente
                id={id}
                frente={frente}
                verso={verso}
                definirStatus={definirStatus}
            />
        );
    }

    /*
    return visivel ? (
        <div
            className="Capa"
            onClick={() => setVisivel(false)}
        >
            <p>Pergunta {id}</p>
            <img src={Play} alt="Abrir pergunta" />
        </div>
    ) : (
        <Frente id={id} frente={frente} verso={verso} />
    );*/
}