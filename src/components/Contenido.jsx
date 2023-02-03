import React, { useState } from "react";
import uselist from "../hooks/useList";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Contenido() {
  const tasks = uselist([]);
  const [newTask, setNewTask] = useState("");

  function newTaskIn(e) {
    e.preventDefault();
    if (newTask.trim().length > 1) {
      tasks.push(newTask);
      setNewTask("");
    } else {
      console.log(newTask.trim());
      console.log("Está vacio");
    }
  }

  return (
    <div
      style={{
        border: "0px",
        backgroundColor: "black",
        marginTop: "-5px",
      }}
    >
      <form onSubmit={(e) => newTaskIn(e)}>
        <div style={{ padding: "10px" }}>
          <input
            onChange={(e) => setNewTask(e.target.value)}
            pattern="[A-Za-z- -á-é-í-ó-ú]{3,35}"
            style={{
              padding: "8px",
              textAlign: "10px",
              marginLeft: "40px",
              width: "250px",
            }}
            value={newTask}
            autoFocus
          />
        </div>
        <div>
          <button
            style={{
              margin: "10px",
              backgroundColor: "#fe0624",
              marginLeft: "50px",
            }}
          >
            Crear
          </button>
        </div>
      </form>
      <div
        style={{
          width: "395px",
        }}
      >
        {tasks.value.length >= 1 ? (
          <ul style={{ maxHeight: "240px", overflowY: "auto" }}>
            {tasks.value.map((task, i) => (
              <div key={i} style={{ padding: "5px", position: "relative" }}>
                <li>{task}</li>
                <div
                  style={{
                    position: "absolute",
                    marginLeft: "295px",
                    marginTop: "-27px",
                    cursor: "pointer",
                  }}
                >
                  <DeleteForeverIcon
                    style={{ color: "red" }}
                    onClick={() => tasks.remove(i)}
                  />
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <div style={{ padding: "5px", marginLeft: "25px" }}>
            <div>
              Lista de tareas vacia {":("}
              <br />
              Inserte alguna
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
