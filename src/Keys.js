import {useState} from 'react';

import Key from './Key';

function createNoteTable() {

    let noteFreq = [];
    noteFreq[0] = {};
    
    const A_BASE_OCTAVE = 27.50000000000000
    let aNote = A_BASE_OCTAVE

    for (let i=0; i< 8;i++) {
        noteFreq[i+1] = {};
        noteFreq[i]["A"] = aNote;
        noteFreq[i]["A#"] = noteFreq[i]["A"]*1.0595
        noteFreq[i]["B"] = noteFreq[i]["A#"]*1.0595
        noteFreq[i+1]["C"] = noteFreq[i]["B"]*1.0595
        noteFreq[i+1]["C#"] = noteFreq[i+1]["C"]*1.0595
        noteFreq[i+1]["D"] = noteFreq[i+1]["C#"]*1.0595
        noteFreq[i+1]["D#"] = noteFreq[i+1]["D"]*1.0595
        noteFreq[i+1]["E"] = noteFreq[i+1]["D#"]*1.0595
        noteFreq[i+1]["F"] = noteFreq[i+1]["E"]*1.0595
        noteFreq[i+1]["F#"] = noteFreq[i+1]["F"]*1.0595
        noteFreq[i+1]["G"] = noteFreq[i+1]["F#"]*1.0595
        noteFreq[i+1]["G#"] = noteFreq[i+1]["G"]*1.0595
        aNote = aNote*2
    }
    return noteFreq;
}

async function addNoteTableMember(noteFreq, noteName, tableObject) {
    tableObject[`${noteName}`] = noteFreq
}

function getKeyLayout(noteFreq) {
    let layout = [];
    for (let i = 0; i < 8;i++){
        layout[i] = {};
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
    const [octave, setOctave] = useState(4);
    const [waveForm, setWaveForm] = useState("Sine");

    const currentKeys = Object.entries(keyboardLayout[octave]);
    
    function onOctaveChange(e) {
        setOctave(e.target.value)
    }

    function onWaveFormChange(e) {
        setWaveForm(e.target.value)
    }

    return (
        <div className="Keys">
            {currentKeys.map((key, index) => { 
                return (
                <Key key={key[0]} noteInfo={key} waveForm={waveForm} />
                )
            })}
            <div className="Controls">
                <div>
                    Octave:
                    <select id='octave' onChange={e => onOctaveChange(e)} value={octave}>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                    </select>
                </div>
                <div>
                    Wave Form:
                    <select id='wave-form' onChange={e => onWaveFormChange(e)} value={waveForm}>
                        <option value='sine'>Sine</option>
                        <option value='triangle'>Triangle</option>
                        <option value='square'>Square</option>
                        <option value='sawtooth'>Sawtooth</option>
                    </select>       
                </div>
            </div>         
        </div>
    )
}

export default Keys