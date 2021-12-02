import './App.css';
import { Tours } from "./Tours/Tours"

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h6>Travelers are always looking for inspiration to guide their adventures.here is</h6>
          <h3>15 awesome Tourist Attractions </h3>
          <div className="underline"></div>
        </div>
        <Tours/>
      </section>
  </main>
  );
}

export default App;
