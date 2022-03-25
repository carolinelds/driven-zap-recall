import "./../css/reset.css";
import "./../css/styles.css";
import TelaInicio from "./TelaInicio";
import TelaCards from "./TelaCards";

export default function App(){
    return (
        <div class="App">
            <TelaInicio />
            <TelaCards />
        </div>
    );
}