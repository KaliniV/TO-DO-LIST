"use client";
import { useState } from "react";
import styles from "./styles.module.css";

type AddTask = (task: { title: string; description: string }) => void;

export const TaskForm = ({ addTask }: { addTask: AddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!title || !description) return;

    try {
      addTask({ title, description });
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.form_content} onSubmit={handleSubmit}>
        <div className={styles.form_label}>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.form_label}>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
};
