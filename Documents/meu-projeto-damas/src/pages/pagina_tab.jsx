import Head from 'next/head';
import Tabuleiro from '../components/Tabuleiro';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tabuleiro de Damas</title>
      </Head>

      <main>
        <h1>Tabuleiro de Damas</h1>
        <Tabuleiro />
      </main>
    </div>
  );
}