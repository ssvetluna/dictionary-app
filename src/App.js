import dictionary from "./dictionary.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>
            <a
              href="https://github.com/ssvetluna/dictionary-app"
              target="_blanck"
            >
              Open-source code on GitHub
            </a>{" "}
            by Stepanenko Svitlana
          </small>
          <br />
          <br />
        </footer>
      </div>
    </div>
  );
}
