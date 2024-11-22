import './App.css';

const version = '2.5.0';

function App() {
  return (
    <main className="App">
      <h1>mattiaerre.github.io</h1>
      <p>
        Engineering Leadership, Meditation, Running, and Yoga (in alphabetical
        order)
      </p>
      <p>
        <textarea cols="85" rows="20"></textarea>
      </p>
      <footer>{version}</footer>
    </main>
  );
}

export default App;
