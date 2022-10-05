import { useState } from "react";
import "./Staff.css";

export interface StaffProps {
  clef?: string;
  notes: number[];
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
  43: 125,
  45: 112.5,
  47: 100,
  48: 87.5,
  50: 75,
  52: 62.5,
  53: 50,
  55: 37.5,
  57: 25,
  59: 12.5,
  60: 0.01,
  62: -12.5,
  64: -25,
  65: -37.5,
  67: -50,
  69: -62.5,
  71: -75,
  72: -87.5,
  74: -100,
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
  const [allowMoveNote, setAllowMoveNote] = useState(false);

  console.log(clef, notes);
  let viewBox = "0 290 230 260"; // viewBox for SVG

  switch (clef) {
    case "grand":
      viewBox = "0 320 250 360";
      break;
    case "treble":
      viewBox = "0 295 230 260";
      break;
    case "bass":
      viewBox = "0 445 230 260";
      break;
    case "alto":
      viewBox = "0 370 230 260";
      break;
    case "tenor":
      viewBox = "0 395 230 260";
      break;
  }

  const mouseDown = (e: any) => {
    setAllowMoveNote(true);
  };

  const mouseMove = (e: any) => {
    if (allowMoveNote) {
      // console.log(e, "mousemove");
    }
  };

  const mouseUp = (e: any) => {
    setAllowMoveNote(false);
  };

  const mouseClick = (e: any) => {
    console.log("mouseclick", e.clientY);

    const clickLocation = e.clientY - 500;
    let bestNoteHeight = 0;
    let bestFit = 500;

    Object.values(noteHeight).forEach((height) => {
      const currentFit = Math.abs(height - clickLocation);
      if (currentFit < bestFit) {
        bestFit = currentFit;
        bestNoteHeight = height;
      }
    });

    console.log("best", bestNoteHeight);

    const newNote = Object.keys(noteHeight)
      .map((key: string) => Number(key))
      .filter((key: number) => noteHeight[key] === bestNoteHeight);

    console.log(newNote);
  };

  const moveNote = (e: any) => {
    console.log(e.clientY);
  };
  //   return (
  //     <svg height="210" width="400">
  //       <path className="l1" d="M 0, 12.5 L 10000, 12.5" />
  //     </svg>
  //   );
  //   return (
  //     <svg>
  //       <g>
  //         <path d="M 0, 12.5 L 10000, 12.5" />
  //       </g>
  //     </svg>
  //   );
  return (
    <div className="staff">
      <svg
        id="myStaff"
        // style={{ width: "100%", height: "100%" }}
        viewBox={viewBox}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onMouseMove={mouseMove}
        onClick={mouseClick}
      >
        <g>
          {/* <path className="l1" id="G10" d="M 0,  12.5   L 10000,  12.5" /> */}
          {/* <path className="l1" id="Gb10" d="M 0,  18.75  L 10000,  18.75" /> */}
          {/* <path className="l2" id="F10" d="M 0,  25     L 10000,  25" /> */}
          {/* <path className="l2" id="E10" d="M 0,  36     L 10000,  36" /> */}
          {/* <path className="l1" id="Eb10" d="M 0,  43.75  L 10000,  43.75" /> */}
          {/* <path className="l1" id="D10" d="M 0,  50     L 10000,  50" /> */}
          {/* <path className="l1" id="Db10" d="M 0,  56.25  L 10000,  56.25" /> */}
          {/* <path className="l2" id="C10" d="M 0,  64.5   L 10000,  64.5" /> */}
          {/* <path className="l2" id="B9" d="M 0,  75     L 10000,  75" /> */}
          {/* <path className="l1" id="Bb9" d="M 0,  81.25  L 10000,  81.25" /> */}
          {/* <path className="l1" id="A9" d="M 0,  87.5   L 10000,  87.5" /> */}
          {/* <path className="l1" id="Ab9" d="M 0,  93.75  L 10000,  93.75" /> */}
          {/* <path className="l1" id="G9" d="M 0,  100    L 10000,  100" /> */}
          {/* <path className="l2" id="Gb9" d="M 0,  106.25 L 10000,  106.25" /> */}
          {/* <path className="l2" id="F9" d="M 0,  112.5  L 10000,  112.5" /> */}
          {/* <path className="l1" id="E9" d="M 0,  125    L 10000,  125" /> */}
          {/* <path className="l1" id="Eb9" d="M 0,  131.25 L 10000,  131.25" /> */}
          {/* <path className="l1" id="D9" d="M 0,  137.5  L 10000,  137.5 " /> */}
          {/* <path className="l2" id="Db9" d="M 0,  143.75 L 10000,  143.75" /> */}
          {/* <path className="l1" id="C9" d="M 0,  150    L 10000,  150" /> */}
          {/* <path className="l1" id="B8" d="M 0,  156.25 L 10000,  156.25" /> */}
          {/* <path className="l1" id="Bb8" d="M 0,  162.5  L 10000,  162.5" /> */}
          {/* <path className="l1" id="A8" d="M 0,  175    L 10000,  175" /> */}
          {/* <path className="l2" id="Ab8" d="M 0,  181.25 L 10000,  181.25" /> */}
          {/* <path className="l2" id="G8" d="M 0,  185    L 10000,  185" /> */}
          {/* <path className="l1" id="Gb8" d="M 0,  192.5  L 10000,  192.5" /> */}
          {/* <path className="l1" id="F8" d="M 0,  200    L 10000,  200" /> */}
          {/* <path className="l1" id="E8" d="M 0,  206.25 L 10000,  206.25" /> */}
          {/* <path className="l1" id="Eb8" d="M 0,  212.5  L 10000,  212.5" /> */}
          {/* <path className="l1" id="D8" d="M 0,  225    L 10000,  225" /> */}
          {/* <path className="l1" id="Db8" d="M 0,  231.25 L 10000,  231.25" /> */}
          {/* <path className="l1" id="C8" d="M 0,  237.5  L 10000,  237.5" /> */}
          {/* <path className="l1" id="B7" d="M 0,  250    L 10000,  250" /> */}
          {/* <path className="l1" id="Bb7" d="M 0,  256.25 L 10000,  256.25" /> */}
          {/* <path className="l1" id="A7" d="M 0,  262.5  L 10000,  262.5" /> */}
          {/* <path className="l1" id="Ab7" d="M 0,  268.75 L 10000,  268.75" /> */}
          {/* <path className="l1" id="G7" d="M 0,  275    L 10000,  275" /> */}
          {/* <path className="l1" id="Gb7" d="M 0,  281.25 L 10000,  281.25" /> */}
          {/* <path className="l2" id="F7" d="M 0,  290    L 10000,  290" /> */}
          {/* <path className="l2" id="E7" d="M 0,  298.5  L 10000,  298.5" /> */}
          {/* <path className="l1" id="Eb7" d="M 0,  306.25 L 10000,  306.25" /> */}
          {/* <path className="l1" id="D7" d="M 0,  312.5  L 10000,  312.5" /> */}
          {/* <path className="l1" id="Db7" d="M 0,  318.75 L 10000,  318.75" /> */}
          {/* <path className="l1" id="C7" d="M 0,  325    L 10000,  325" /> */}
          {/* <path className="l2" id="B6" d="M 0,  333    L 10000,  333" /> */}
          {/* <path className="l2" id="Bb6" d="M 0,  342    L 10000,  342" /> */}
          {/* <path className="l1" id="A6" d="M 0,  350    L 10000,  350" /> */}
          {/* <path className="l1" id="Ab6" d="M 0,  356.25 L 10000,  356.25" /> */}
          {/* <path className="l1" id="G6" d="M 0,  362.5  L 10000,  362.5" /> */}
          {/* <path className="l1" id="Gb6" d="M 0,  368.75 L 10000,  368.75" /> */}
          {clef === "treble" && (
            <path className="l1" id="F6" d="M 0,  375    L 10000,  375" />
          )}
          {/* <path className="l2" id="E6" d="M 0,  383    L 10000,  383" /> */}
          {/* <path className="l2" id="Eb6" d="M 0,  392.5  L 10000,  392.5" /> */}
          {clef === "treble" && (
            <path className="l1" id="D6" d="M 0,  400    L 10000,  400" />
          )}
          {/* <path className="l2" id="Db6" d="M 0,  408    L 10000,  408" /> */}
          {/* <path className="l2" id="C6" d="M 0,  417.5  L 10000,  417.5" /> */}
          {clef === "treble" && (
            <path className="l1" id="B5" d="M 0,  425    L 10000,  425" />
          )}
          {/* <path className="l1" id="Bb5" d="M 0,  431.25 L 10000,  431.25" /> */}
          {/* <path className="l1" id="A5" d="M 0,  437.5  L 10000,  437.5" /> */}
          {/* <path className="l1" id="Ab5" d="M 0,  443.75 L 10000,  443.75" /> */}
          {clef === "treble" && (
            <path className="l1" id="G5" d="M 0,  450    L 10000,  450" />
          )}
          {/* <path className="l2" id="Gb5" d="M 0,  458    L 10000,  458" /> */}
          {/* <path className="l2" id="F5" d="M 0,  467.5  L 10000,  467.5" /> */}
          {clef === "treble" && (
            <path className="l1" id="E5" d="M 0,  475    L 10000,  475" />
          )}
          {/* <path className="l1" id="Eb5" d="M 0,  481.25 L 10000,  481.25" /> */}
          {/* <path className="l1" id="D5" d="M 0,  487.5  L 10000,  487.5" /> */}
          {/* <path className="l1" id="Db5" d="M 0,  493.75 L 10000,  493.75" /> */}
          {/* <path className="l1" id="C5" d="M 0,  500    L 10000,  500" /> */}
          {/* <path className="l2" id="B4" d="M 0,  508    L 10000,  508" /> */}
          {/* <path className="l2" id="Bb4" d="M 0,  517.5  L 10000,  517.5" /> */}
          {clef === "bass" && (
            <path className="l1" id="A4" d="M 0,  525    L 10000,  525" />
          )}
          {/* <path className="l1" id="Ab4" d="M 0,  531.25 L 10000,  531.25" /> */}
          {/* <path className="l1" id="G4" d="M 0,  537.5  L 10000,  537.5" /> */}
          {/* <path className="l1" id="Gb4" d="M 0,  543.75 L 10000,  543.75" /> */}
          {clef === "bass" && (
            <path className="l1" id="F4" d="M 0,  550    L 10000,  550" />
          )}
          {/* <path className="l2" id="E4" d="M 0,  558    L 10000,  558" /> */}
          {/* <path className="l2" id="Eb4" d="M 0,  567.5  L 10000,  567.5" /> */}
          {clef === "bass" && (
            <path className="l1" id="D4" d="M 0,  575    L 10000,  575" />
          )}
          {/* <path className="l2" id="Db4" d="M 0,  583    L 10000,  583" /> */}
          {/* <path className="l2" id="C4" d="M 0,  592.5  L 10000,  592.5" /> */}
          {clef === "bass" && (
            <path className="l1" id="B3" d="M 0,  600    L 10000,  600" />
          )}
          {/* <path className="l1" id="Bb3" d="M 0,  606.25 L 10000,  606.25" /> */}
          {/* <path className="l1" id="A3" d="M 0,  612.5  L 10000,  612.5" /> */}
          {/* <path className="l1" id="Ab3" d="M 0,  618.75 L 10000,  618.75" /> */}
          {clef === "bass" && (
            <path className="l1" id="G3" d="M 0,  625    L 10000,  625" />
          )}
          {/* <path className="l2" id="Gb3" d="M 0,  632.5  L 10000,  632.5" /> */}
          {/* <path className="l2" id="F3" d="M 0,  642    L 10000,  642" /> */}
          {/* <path className="l1" id="E3" d="M 0,  650    L 10000,  650" /> */}
          {/* <path className="l1" id="Eb3" d="M 0,  656.25 L 10000,  656.25" /> */}
          {/* <path className="l1" id="D3" d="M 0,  662.5  L 10000,  662.5" /> */}
          {/* <path className="l1" id="Db3" d="M 0,  668.75 L 10000,  668.75" /> */}
          {/* <path className="l1" id="C3" d="M 0,  675    L 10000,  675" /> */}
          {/* <path className="l1" id="B2" d="M 0,  687.5  L 10000,  687.5" /> */}
          {/* <path className="l1" id="Bb2" d="M 0,  693.75 L 10000,  693.75" /> */}
          {/* <path className="l1" id="A2" d="M 0,  700    L 10000,  700" /> */}
          {/* <path className="l1" id="Ab2" d="M 0,  706.25 L 10000,  706.25" /> */}
          {/* <path className="l1" id="G2" d="M 0,  712.5  L 10000,  712.5" /> */}
          {/* <path className="l1" id="Gb2" d="M 0,  718.75 L 10000,  718.75" /> */}
          {/* <path className="l1" id="F2" d="M 0,  725    L 10000,  725" /> */}
          {/* <path className="l1" id="E2" d="M 0,  737.5  L 10000,  737.5" /> */}
          {/* <path className="l1" id="Eb2" d="M 0,  743.75 L 10000,  743.75" /> */}
          {/* <path className="l1" id="D2" d="M 0,  750    L 10000,  750" /> */}
          {/* <path className="l1" id="Db2" d="M 0,  756.25 L 10000,  756.25" /> */}
          {/* <path className="l1" id="C2" d="M 0,  762.5  L 10000,  762.5" /> */}
          {/* <path className="l1" id="B1" d="M 0,  775    L 10000,  775" /> */}
          {/* <path className="l1" id="Bb1" d="M 0,  781.25 L 10000,  781.25" /> */}
          {/* <path className="l1" id="A1" d="M 0,  787.5  L 10000,  787.5" /> */}
          {/* <path className="l1" id="Ab1" d="M 0,  793.75 L 10000,  793.75" /> */}
          {/* <path className="l1" id="G1" d="M 0,  800    L 10000,  800" /> */}
          {/* <g className="ledgerLines">
          <path id="f10L" d="M 135,25  L 205, 25" />
          <path id="d10L" d="M 135,50  L 205, 50" />
          <path id="b9L" d="M 135,75  L 205, 75" />
          <path id="g9L" d="M 135,100 L 205, 100" />
          <path id="e9L" d="M 135,125 L 205, 125" />
          <path id="c9L" d="M 135,150 L 205, 150" />
          <path id="a8L" d="M 135,175 L 205, 175" />
          <path id="f8L" d="M 135,200 L 205, 200" />
          <path id="d8L" d="M 135,225 L 205, 225" />
          <path id="b7L" d="M 135,250 L 205, 250" />
          <path id="g7L" d="M 135,275 L 205, 275" />
          <path id="e7L" d="M 135,300 L 205, 300" />
          <path id="c7L" d="M 135,325 L 205, 325" />
          <path id="a6L" d="M 135,350 L 205, 350" />
          <path id="f6L" d="M 135,375 L 205, 375" />
          <path id="d6L" d="M 135,400 L 205, 400" />
          <path id="b5L" d="M 135,425 L 205, 425" />
          <path id="g5L" d="M 135,450 L 205, 450" />
          <path id="e5L" d="M 135,475 L 205, 475" />
          <path id="c5L" d="M 135,500 L 205, 500" />
          <path id="a4L" d="M 135,525 L 205, 525" />
          <path id="f4L" d="M 135,550 L 205, 550" />
          <path id="d4L" d="M 135,575 L 205, 575" />
          <path id="b3L" d="M 135,600 L 205, 600" />
          <path id="g3L" d="M 135,625 L 205, 625" />
          <path id="e3L" d="M 135,650 L 205, 650" />
          <path id="c3L" d="M 135,675 L 205, 675" />
          <path id="a2L" d="M 135,700 L 205, 700" />
          <path id="f2L" d="M 135,725 L 205, 725" />
          <path id="d2L" d="M 135,750 L 205, 750" />
          <path id="b1L" d="M 135,775 L 205, 775" />
          <path id="g1L" d="M 135,800 L 205, 800" />
        </g> */}

          <g className="noteGroup">
            {notes.map((note) => {
              const notePlacement = noteHeight[note];
              const transformGroup = `translate(0, ${500 + notePlacement})`;

              console.log(
                "transformgroup",
                note,
                notePlacement,
                transformGroup
              );

              return (
                <g
                  key={`note-${note}`}
                  className="noteG"
                  transform={transformGroup}
                  onClick={(e) => console.log("mouseclick", e)}
                  onMouseDown={moveNote}
                  onMouseUp={moveNote}
                >
                  <text
                    className="note"
                    transform="translate(145, 0)"
                    onClick={(e) => console.log("e mouseclick", e)}
                  >
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
