

export default function Verso(props){
    //const {id, frente, verso} = props;
    
    return (
        <div className="Verso">
            <p>{props.verso}</p>
            <div class="botoes-resposta">
                <button class="resposta-nao-lembrei">
                    <p>Não lembrei</p>
                </button>
                <button class="resposta-quase">
                    <p>Quase não lembrei</p>
                </button>
                <button class="resposta-zap">
                    <p>Zap!</p>
                </button>
            </div>
        </div>
    );
}