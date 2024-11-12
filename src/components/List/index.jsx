import { Component } from "react";
import { CardNota } from "../CardNota";

export class ListaDeCompras extends Component {
  render() {
    return (
      <div>
        <h1>Minha lista de compras</h1>

        <ul>
          {Array.of("Jantar", "Supermercado", "Carnes", "Uber", "Roupas").map((gasto) => {
            return (
              <li>
                <CardNota descricao = { gasto }/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
