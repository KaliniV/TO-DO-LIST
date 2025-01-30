"use client";

import { useState, useEffect, use } from "react";
import axios from "axios";
import styles from "./page.module.css";
import Link from "next/link";
import VectorModify from "@/components/vectores/vector-modify";

export default function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [task, setTask] = useState<Task | undefined>(undefined);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");

  const { id } = use(params);

  const fetchTask = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:8080/tasks/${id}`);
      setTask(response.data);
      setNewTitle(response.data.title);
      setNewDescription(response.data.description);
    } catch (error) {
      console.error("Erro ao buscar tarefa", error);
    }
  };

  useEffect(() => {
    fetchTask(id);
  }, [id]);

  const modifyTask = async () => {
    if (!task) {
      console.error("Tarefa não encontrada");
      return;
    }

    const updatedTask: Task = {
      id: task.id,
      title: newTitle,
      description: newDescription,
      status: task.status,
    };

    try {
      await axios.put(`http://localhost:8080/tasks/${task.id}`, updatedTask);
      setTask(updatedTask);
    } catch (error) {
      console.error("Erro ao atualizar tarefa", error);
    }
  };

  if (!task) return <div>Loading...</div>;

  return (
    <section className={styles.container}>
      <div className={styles.task_details}>
        <h1>{task.title}</h1>
        <p className={styles.description}>
          <strong>Descrição: </strong> {task.description}
        </p>
        <p className={styles.status}>
          <strong>Status: </strong> {task.status}
        </p>

        <div className={styles.textarea_container}>
          <label htmlFor="description">Descrição</label>
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Nova descrição"
          />
        </div>

        <button className={styles.modify} onClick={modifyTask}>
          Modificar <VectorModify />
        </button>
        <Link href="/" className={styles.back}>
          Voltar para a lista
        </Link>
      </div>
    </section>
  );
}

interface Task {
  id: number;
  title: string;
  description: string;
  status: "EM_ANDAMENTO" | "NAO_INICIADO" | "CONCLUIDO";
}
