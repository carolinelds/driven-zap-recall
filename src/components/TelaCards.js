import Card from "./Card";
import LogoPequeno from "./../assets/logo-pequeno.png";

export default function TelaCards(){

    const deck = [
        {
            id: 1,
            frente: "O que é JSX?", 
            verso: "Uma extensão de linguagem do JavaScript"
        },
        {
            id: 2,
            frente: "O React é __", 
            verso: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            id: 3,
            frente: "Componentes devem iniciar com __", 
            verso: "letra maiúscula"
        },
        {
            id: 4,
            frente: "Podemos colocar __ dentro do JSX", 
            verso: "expressões"
        },
        {
            id: 5,
            frente: "O ReactDOM nos ajuda __", 
            verso: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            id: 6,
            frente: "Usamos o npm para __", 
            verso: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            id: 7,
            frente: "Usamos props para __", 
            verso: "passar diferentes informações para componentes"
        },
        {
            id: 8,
            frente: "Usamos estado (state) para __", 
            verso: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ];

    return (
        <div class="TelaCards">
            <header>
                <img src={LogoPequeno} alt="Logo do Zap Recall"/>
                <p>ZapRecall</p>
            </header>

            {deck.map(card =>
                    <Card 
                        key={card.id}
                        id={card.id} 
                        frente={card.frente} 
                        verso={card.verso} 
                    />
                )
            }
        </div>
    );
}