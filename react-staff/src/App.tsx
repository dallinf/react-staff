import "./App.css";
import Staff from "./staff/Staff";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="app-staff">
          <Staff clef="treble" notes={[60, 65]} />
          {/* <Staff clef="bass" notes={[48, 50]} /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
