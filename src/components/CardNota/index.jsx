import { Component } from "react";

export class CardNota extends Component {
  render() {
    const { descricao } = this.props;
    return (
      <div>
        <section>
          <header>
            <h3>{ descricao }</h3>
          </header>
          <p>Cartão</p>
          <p>Valor</p>
        </section>
      </div>
    );
  }
}
