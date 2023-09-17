import React from 'react';
import styles from './tabuleiro.module.css'; 

function Tabuleiro() {
  const board = [];

  for (let lin = 0; lin < 8; lin++) {
    for (let col = 0; col < 8; col++) {
      const quadrado_preto = (lin + col) % 2 === 1;
      const cor_quadrado = quadrado_preto ? styles.dark : styles.light;

      board.push(
        <div key={`${lin}-${col}`} className={`square ${cor_quadrado}`} />
      );
    }
  }

  return <div className={styles['chess-board']}>{board}</div>;
}

export default Tabuleiro