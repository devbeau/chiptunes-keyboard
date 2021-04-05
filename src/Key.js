function Key (props) {
    let context = new AudioContext();
    let note = context.createOscillator();
    note.type = props.waveForm;
    note.frequency.value = props.noteInfo[1];
    note.connect(context.destination)

    function stopNote(note) {
        note.stop()

    }
    function onMouseDown() {
        // props.setMouseDown(true);
        note.start();
    }

    function onMouseUp() {
        // props.setMouseDown(false);
        note.stop();
        note = context.createOscillator();
        note.type = props.waveForm;
        note.frequency.value = props.noteInfo[1];
        note.connect(context.destination)
    }

    function onMouseLeave(e) {
        console.log(e.type, e.target);
        if (e.buttons === 1) {
            note.stop();
            note = context.createOscillator();
            note.type = props.waveForm;
            note.frequency.value = props.noteInfo[1];
            note.connect(context.destination)
        }
    }
    
    function onMouseEnter(e) {
        console.log(e.type, e.target);
        if (e.buttons === 1) {
            note.start();
        }
    }

    function onKeyDown(e) {
        console.log(e)
        if (e.key === props.keyMapping) {
            note.start();
        }
    }

    function onKeyUp(e) {
        console.log(e)
        if(e.key === props.keyMapping) {
            note.stop();
            note = context.createOscillator();
            note.type = props.waveForm;
            note.frequency.value = props.noteInfo[1];
            note.connect(context.destination)
        }
    }

    return (
        <div 
            className="key"
            onMouseDown={e => {onMouseDown(e)}}
            onMouseUp= {e => {onMouseUp(e)}}
            onMouseEnter={e => {onMouseEnter(e)}}
            onMouseLeave={e => {onMouseLeave(e)}}
            onKeyDown={e => {onKeyDown(e)}}
            onKeyUp={e => {onKeyUp(e)}}
        >
            {props.noteInfo[0]}
            {/* <sub>{props}</sub> */}
        </div>
    )
}

export default Key;