import { Component } from "react";
import "./App.css";
import { FormularioDeEnvio } from "./components/Form";
import { ListaDeCompras } from "./components/List";

class App extends Component {
  render() {
    return (
      <div>
        <FormularioDeEnvio />
        <ListaDeCompras />
      </div>
    );
  }
}

export default App;
