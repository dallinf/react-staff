import "./Staff.css";

export interface StaffProps {
  clef?: string;
  notes: number[];
}

export interface Note {
  value: number;
  id: number;
}

const noteHeight: { [id: number]: number } = {
  19: 300,
  21: 287.5,
  23: 275,
  24: 262.5,
  26: 250,
  28: 237.5,
  29: 225,
  31: 212.5,
  33: 200,
  35: 187.5,
  36: 175,
  38: 162.5,
  40: 150,
  41: 137.5,
  43: 125, // G3
  45: 112.5,
  47: 100, // B3
  48: 87.5,
  50: 75, // D4
  52: 62.5,
  53: 50, // F4
  55: 37.5,
  57: 25, // A4
  59: 12.5,
  60: 0.01,
  62: -12.5,
  64: -25, // E5
  65: -37.5, // F5
  67: -50, // G5
  69: -62.5, // A5
  71: -75, // B5
  72: -87.5, // C6
  74: -100, // D6
  76: -112.5,
  77: -125,
  79: -137.5,
  81: -150,
  83: -162.5,
  84: -175,
  86: -187.5,
  88: -200,
  89: -212.5,
  91: -225,
  93: -237.5,
  95: -250,
  96: -262.5,
  98: -275,
  100: -287.5,
  101: -300,
  103: -312.5,
  105: -325,
  107: -337.5,
  108: -350,
  110: -362.5,
  112: -375,
  113: -387.5,
  115: -400,
  117: -412.5,
  119: -425,
  120: -437.5,
  122: -450,
  124: -462.5,
  125: -475,
  127: -487.5,
};

function Staff({ clef = "treble", notes }: StaffProps) {
  let viewBox = "0 290 230 260"; // viewBox for SVG
  let lines: { id: string; note: number; height: number }[] = [];

  switch (clef) {
    case "grand":
      viewBox = "0 320 250 360";
      break;
    case "treble":
      viewBox = "0 295 230 260";
      lines = [
        { id: "F6", note: 77, height: 375 },
        { id: "D6", note: 74, height: 400 },
        { id: "B5", note: 71, height: 425 },
        { id: "G5", note: 67, height: 450 },
        { id: "E5", note: 64, height: 475 },
      ];
      break;
    case "bass":
      viewBox = "0 445 230 260";
      lines = [
        { id: "A4", note: 57, height: 525 },
        { id: "F4", note: 53, height: 550 },
        { id: "D4", note: 50, height: 575 },
        { id: "B3", note: 47, height: 600 },
        { id: "G3", note: 43, height: 625 },
      ];
      break;
    case "alto":
      viewBox = "0 370 230 260";
      break;
    case "tenor":
      viewBox = "0 395 230 260";
      break;
  }

  const ledgerLines = [
    { id: "E7L", note: 88, height: 300 },
    { id: "C7L", note: 84, height: 325 },
    { id: "A6L", note: 81, height: 350 },
    { id: "F6L", note: 77, height: 375 },
    { id: "D6L", note: 74, height: 400 },
    { id: "B5L", note: 71, height: 425 },
    { id: "G5L", note: 67, height: 450 },
    { id: "E5L", note: 64, height: 475 },
    { id: "C5L", note: 60, height: 500 },
    { id: "A4L", note: 57, height: 525 },
    { id: "F4L", note: 53, height: 550 },
    { id: "D4L", note: 50, height: 575 },
    { id: "B3L", note: 47, height: 600 },
    { id: "G3L", note: 43, height: 625 },
    { id: "E3L", note: 40, height: 650 },
    { id: "C3L", note: 36, height: 675 },
    { id: "A2L", note: 33, height: 700 },
    { id: "F2L", note: 29, height: 725 },
    { id: "D2L", note: 26, height: 750 },
    { id: "B1L", note: 23, height: 775 },
    { id: "G1L", note: 19, height: 800 },
  ];

  let highestNote = notes[0];
  let lowestNote = notes[0];
  notes.forEach((note) => {
    if (note < lowestNote) {
      lowestNote = note;
    }
    if (note > highestNote) {
      highestNote = note;
    }
  });

  const highestLine = lines[0].note;
  const lowestLine = lines[4].note;

  return (
    <div className="staff">
      <svg id="myStaff" viewBox={viewBox}>
        <g>
          {lines.map((line) => {
            return (
              <path
                key={`line-${line.id}`}
                id={`line-${line.id}`}
                className="l1"
                d={`M 0,  ${line.height}  L 10000, ${line.height}`}
              ></path>
            );
          })}

          {ledgerLines.map((line) => {
            let shouldDraw = false;
            if (line.note >= lowestNote && line.note < lowestLine) {
              shouldDraw = true;
            }

            if (line.note <= highestNote && line.note > highestLine) {
              shouldDraw = true;
            }

            if (!shouldDraw) {
              return null;
            }

            return (
              <path
                key={`ledger-${line.id}`}
                id={`ledger-${line.id}`}
                className="l1"
                d={`M 135,  ${line.height}  L 205, ${line.height}`}
              ></path>
            );
          })}

          <g className="noteGroup">
            {notes.map((note) => {
              const notePlacement = noteHeight[note];
              const transformGroup = `translate(0, ${500 + notePlacement})`;

              return (
                <g
                  key={`note-${note}`}
                  className="noteG"
                  transform={transformGroup}
                >
                  <text className="note" transform="translate(145, 0)">
                    a
                  </text>
                </g>
              );
            })}
          </g>
          <g id="clefs">
            {/* <rect className="trebleRect" x="3" y="325" width="70" height="190" /> */}
            {/* <rect className="altoRect" x="3" y="450" width="70" height="100" /> */}
            {/* <rect className="tenorRect" x="3" y="450" width="70" height="100" /> */}
            {/* <rect className="bassRect" x="3" y="525" width="70" height="90" /> */}
            {clef === "treble" && (
              <text className="trebleClef" x="0" y="450">
                &
              </text>
            )}
            {clef === "alto" && (
              <text className="altoClef" x="0" y="500">
                B
              </text>
            )}
            {clef === "tenor" && (
              <text className="tenorClef" x="0" y="500">
                B
              </text>
            )}
            {clef === "bass" && (
              <text className="bassClef" x="10" y="550">
                ?
              </text>
            )}
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Staff;
