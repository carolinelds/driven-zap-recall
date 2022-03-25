

export default function Verso(props){
    
    return (
        <div className="Verso">
            <p>{props.verso}</p>
            <div className="botoes-resposta">

                <button 
                    className="resposta-nao-lembrei"
                    onClick={() => 
                        props.definirStatus("resposta-nao-lembrei")
                    }
                >
                    <p>Não lembrei</p>
                </button>

                <button 
                    className="resposta-quase"
                    onClick={() => 
                        props.definirStatus("resposta-quase")
                    }
                >
                    <p>Quase não lembrei</p>
                </button>

                <button
                    className="resposta-zap"
                    onClick={() => 
                        props.definirStatus("resposta-zap")
                    }
                >
                    <p>Zap!</p>
                </button>
            </div>
        </div>
    );
}