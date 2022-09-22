import { version } from '../package.json';
import './App.css';

function App() {
  return (
    <main className="App">
      <h1>mattiaerre.github.io</h1>
      <p>Product Engineering at GitHub</p>
      <p>
        <textarea cols="85" rows="20"></textarea>
      </p>
      <footer>{version}</footer>
    </main>
  );
}

export default App;
