import { Component } from "react";

export class FormularioDeEnvio extends Component {
  render() {
    return (
      <div className="formulario">
        <form>
          <div>
            <label>Descrição</label>
            <input></input>
          </div>
          <div>
            <label>Forma de pagamento</label>
            <input></input>
          </div>
          <div>
            <label>Valor</label>
            <input></input>
          </div>
          <div>
            <button>Salvar</button>
          </div>
        </form>
      </div>
    );
  }
}
