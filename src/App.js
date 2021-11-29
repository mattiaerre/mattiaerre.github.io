import { version } from '../package.json';
import './App.css';

function App() {
  return (
    <main className="App">
      <h1>mattiaerre.github.io</h1>
      <p>Product Engineering at OpenTable</p>
      <p>
        <textarea cols="50" rows="25"></textarea>
      </p>
      <footer>{version}</footer>
    </main>
  );
}

export default App;
