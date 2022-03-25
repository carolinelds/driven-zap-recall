import React from "react";
import Capa from "./Capa";

export default function Card(props) {
    const { id, frente, verso } = props;

    return (
        <div class="Card">
            <Capa id={id} frente={frente} verso={verso} />
        </div>
    );
}