import "./App.css";
import Staff from "./staff/Staff";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="staff">
          <Staff clef="treble" notes={[60, 65]} />
        </div>
      </header>
    </div>
  );
}

export default App;
