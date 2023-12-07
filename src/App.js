import "./index.css";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefa, setListaTarefas] = useState([]);
  const [listaConcluida, setListaConcluida] = useState([]);
  var [n, setN] = useState(1);

  const handleEntradaTarefa = (evento) => {
    setTarefa(evento.target.value);
  };

  const handleadicionarTarefa = (evento) => {
    if (evento.key === "Enter") {
      if (tarefa.trim() !== "") {
        setN(n + 1);
        setListaTarefas([...listaTarefa, n + "." + tarefa]);
        setTarefa("");
      }
    }
  };

  const handleTarefaConcluida = (indice) => {
    setListaConcluida([...listaConcluida, listaTarefa[indice]]);

    setListaTarefas(listaTarefa.filter((_, i) => i !== indice));
  };

  const handleDesfazerTarefa = (indice) => {
    setListaTarefas([...listaTarefa, listaConcluida[indice]]);

    setListaConcluida(listaConcluida.filter((_, i) => i !== indice));
  };

  return (
    <div>
      <h2>Tarefas Pendentes</h2>
      <input
        placeholder="Digite aqui a tarefa que deseja adicionar"
        type="text"
        value={tarefa}
        onChange={handleEntradaTarefa}
        onKeyDown={handleadicionarTarefa}
      />

      {listaTarefa.map((tarefa, indice) => (
        <div key={indice}>
          <p className="tarefa"> {tarefa} </p>
          <button onClick={() => handleTarefaConcluida(indice)}>
            Concluir
          </button>
        </div>
      ))}

      <h2>Tarefas Concluídas</h2>

      {listaConcluida.map((tarefa, indice) => (
        <div key={indice}>
          <p className="texto-riscado">{tarefa}</p>
          <button onClick={() => handleDesfazerTarefa(indice)}>Desfazer</button>
        </div>
      ))}
    </div>
  );
}

export default App;
