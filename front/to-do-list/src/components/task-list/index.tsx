"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { TaskForm } from "../task-form";
import VectorClose from "../vectores/vector-close";
import axios from "axios";

export default function TaskList() {
  const [tasks, setTasks] = useState<
    { id: number; title: string; description: string; status: string }[]
  >([]);

  // Carregar tarefas do backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Erro ao carregar tarefas:", error));
  }, []);

  // Adicionar tarefa
  const addTask = (task: { title: string; description: string }) => {
    axios
      .post("http://localhost:8080/tasks", {
        ...task,
        status: "NAO_INICIADO",
      })
      .then((response) => setTasks([...tasks, response.data]))
      .catch((error) => console.error("Erro ao adicionar tarefa:", error));
  };
  // Remover tarefa
  const removeTask = (id: number) => {
    axios
      .delete(`http://localhost:8080/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((error) => console.error("Erro ao remover tarefa:", error));
  };

  // Atualizar status de uma tarefa
  const updateTaskStatus = (taskId: number, newStatus: string) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (!taskToUpdate) return;

    axios
      .put(`http://localhost:8080/tasks/${taskId}`, {
        ...taskToUpdate,
        status: newStatus,
      })
      .then((response) => {
        setTasks(
          tasks.map((task) => (task.id === taskId ? response.data : task))
        );
      })
      .catch((error) => console.error("Erro ao atualizar status:", error));
  };
  return (
    <section>
      <TaskForm addTask={addTask} />
      <ul className={styles.list_container}>
        {tasks.map((task) => (
          <li className={styles.list_content} key={task.id}>
            <div className={styles.title_status}>
              <Link className={styles.title} href={`/task/${task.id}`}>
                {task.title}
              </Link>
              <span className={styles.status}>{task.status}</span>
            </div>
            <p className={styles.description}>{task.description}</p>
            <div className={styles.label_container}>
              <label
                className={styles.label_title}
                htmlFor={`status-${task.id}`}
              >
                Atualizar status:
              </label>
              <select
                className={styles.label_options}
                onChange={(e) => updateTaskStatus(task.id, e.target.value)}
              >
                <option value="NAO_INICIADO">Não iniciado</option>
                <option value="EM_ANDAMENTO">Em andamento</option>
                <option value="CONCLUIDO">Concluído</option>
              </select>
              <button onClick={() => removeTask(task.id)}>
                <VectorClose />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
