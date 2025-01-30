import styles from "./styles.module.css";
import Vector from "../vectores/vector";

export const Header = () => {
  return (
    <header className={styles.header_container}>
      <div className={styles.header_content}>
        <h1 className={styles.header_text}>Lista de Tarefas</h1>
        <Vector />
      </div>
    </header>
  );
};
