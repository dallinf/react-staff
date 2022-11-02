import "./App.css";
import Staff from "./staff/Staff";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="app-staff">
          <Staff clef="treble" notes={[50, 55, 60, 88]} />
          {/* <Staff clef="bass" notes={[48, 65]} /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
