import Key from './Key';

function createNoteTable() {

    let noteFreq = [];

    const A_BASE_OCTAVE = 27.50000000000000

    for (let i=0; i< 8;i++) {
        noteFreq[i] = [];
        noteFreq[i]["A"] = Math.pow(2, i) * A_BASE_OCTAVE;
        noteFreq[i]["A#"] = Math.pow(2, 13/12 * i) * A_BASE_OCTAVE;
        noteFreq[i]["B"] = Math.pow(2, 14/12 * i) * A_BASE_OCTAVE;
        noteFreq[i+1]["C"] = Math.pow(2, 15/12 * i) * A_BASE_OCTAVE;
        noteFreq[i+1]["C#"] = Math.pow(2, 16/12 * i) * A_BASE_OCTAVE;
        noteFreq[i+1]["D"] = Math.pow(2, 17/12 * i) * A_BASE_OCTAVE;
        noteFreq[i+1]["D#"] = Math.pow(2, 18/12 * i) * A_BASE_OCTAVE;
        noteFreq[i+1]["E"] = Math.pow(2, 19/12 * i) * A_BASE_OCTAVE;
        noteFreq[i+1]["F"] = Math.pow(2, 20/12 * i) * A_BASE_OCTAVE;
        noteFreq[i+1]["F#"] = Math.pow(2, 21/12 * i) * A_BASE_OCTAVE;
        noteFreq[i+1]["G"] = Math.pow(2, 22/12 * i) * A_BASE_OCTAVE;
        noteFreq[i+1]["G#"] = Math.pow(2, 23/12 * i) * A_BASE_OCTAVE;
    }
    return noteFreq;
}

function getKeyLayout(noteFreq) {
    let layout = [];
    for (let i = 0; i < 8;i++){
        layout[i]["A"] = noteFreq[i]["A"];
        layout[i]["A#"] = noteFreq[i]["A#"];
        layout[i]["B"] = noteFreq[i]["B"];
        layout[i]["C"] = noteFreq[i+1]["C"];
        layout[i]["C#"] = noteFreq[i+1]["C#"];
        layout[i]["D"] = noteFreq[i+1]["D"];
        layout[i]["D#"] = noteFreq[i+1]["D#"];
        layout[i]["E"] = noteFreq[i+1]["E"];
        layout[i]["F"] = noteFreq[i+1]["F"];
        layout[i]["F#"] = noteFreq[i+1]["F#"];
        layout[i]["G"] = noteFreq[i+1]["G"]
        layout[i]["G#"] = noteFreq[i+1]["G#"]

    }
    return layout;
}

const keyboardLayout = getKeyLayout(createNoteTable());

function Keys(props) {
    return (
        <div className="Keys">
            {noteFreq.map(key  => (
                <Key key={key.id} />
            ))}
        </div>
    )
}

export default Keys