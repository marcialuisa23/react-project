import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main className="App-form">
          <h1> What word do you want to look up? 🧐</h1>
          <Dictionary />
        </main>
        <footer className="App-footer">coded by Marcia Monteiro</footer>
      </div>
    </div>
  );
}

export default App;
