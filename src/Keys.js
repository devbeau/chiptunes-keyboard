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
        layout[i][`A${i}`] = noteFreq[i]["A"];
        layout[i][`A#${i}`] = noteFreq[i]["A#"];
        layout[i][`B${i}`] = noteFreq[i]["B"];
        layout[i][`C${i}`] = noteFreq[i+1]["C"];
        layout[i][`C#${i}`] = noteFreq[i+1]["C#"];
        layout[i][`D${i}`] = noteFreq[i+1]["D"];
        layout[i][`D#${i}`] = noteFreq[i+1]["D#"];
        layout[i][`E${i}`] = noteFreq[i+1]["E"];
        layout[i][`F${i}`] = noteFreq[i+1]["F"];
        layout[i][`F#${i}`] = noteFreq[i+1]["F#"];
        layout[i][`G${i}`] = noteFreq[i+1]["G"];
        layout[i][`G#${i}`] = noteFreq[i+1]["G#"];
        layout[i][`A${i+1}`] = noteFreq[i+1]["A"];
        layout[i][`A#${i+1}`] = noteFreq[i+1]["A#"];
        layout[i][`B${i+1}`] = noteFreq[i+1]["B"];
        
    }
    return layout;
}

function createKeyPressMap() {
    let keyMap = {};
    keyMap["A"]  =  'z';
    keyMap["A#"] =  's';
    keyMap["B"]  =  'x';
    keyMap["C"]  =  'c';
    keyMap["C#"] =  'f';
    keyMap["D"]  =  'v';
    keyMap["D#"] =  'g';
    keyMap["E"]  =  'b';
    keyMap["F"]  =  'n';
    keyMap["F#"] =  'j';
    keyMap["G"]  =  'm';
    keyMap["G#"] =  'k';
    return keyMap;
}

const keyboardLayout = getKeyLayout(createNoteTable());
const keyMap = createKeyPressMap();

function Keys(props) {
    const [octave, setOctave] = useState(4);
    const [waveForm, setWaveForm] = useState("Sine");
    const [isMouseDown, setMouseDown] = useState(false);

    const currentKeys = Object.entries(keyboardLayout[octave]);
    function onOctaveChange(e) {
        setOctave(e.target.value)
    }

    function onWaveFormChange(e) {
        setWaveForm(e.target.value)
    }

    return (
        <div className="Keys">

            {currentKeys.map((key) => { 
                return (
                <Key 
                    key={key[0]}
                    noteInfo={key} 
                    waveForm={waveForm} 
                    keyMapping={keyMap[`${key[0]}`]}
                    isMouseDown={isMouseDown}
                    setMouseDown={setMouseDown}
                />
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