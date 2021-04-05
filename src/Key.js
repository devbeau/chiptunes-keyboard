function Key (props) {
    let context = new AudioContext();
    let note = context.createOscillator();
    note.type = props.waveForm;
    note.frequency.value = props.noteInfo[1];
    note.connect(context.destination)

    function onMouseDown() {
        note.start();
    }

    function onMouseUp() {
        note.stop();
        note = context.createOscillator();
        note.type = props.waveForm;
        note.frequency.value = props.noteInfo[1];
        note.connect(context.destination)
    }

    function onMouseLeave(e) {
        if (e.buttons === 1) {
            note.stop();
            note = context.createOscillator();
            note.type = props.waveForm;
            note.frequency.value = props.noteInfo[1];
            note.connect(context.destination)
        }
    }
    
    function onMouseEnter(e) {
        if (e.buttons === 1) {
            note.start();
        }
    }

    function onKeyDown(e) {
        if (e.key === props.keyMapping) {
            note.start();
        }
    }

    function onKeyUp(e) {
        if(e.key === props.keyMapping) {
            note.stop();
            note = context.createOscillator();
            note.type = props.waveForm;
            note.frequency.value = props.noteInfo[1];
            note.connect(context.destination)
        }
    }

    function isSharp(noteName) {
        return noteName.length === 3
    }

    return (
        <div 
            className={isSharp(props.noteInfo[0]) ? 'key sharp' : 'key'}   
            onMouseDown={e => {onMouseDown(e)}}
            onMouseUp= {e => {onMouseUp(e)}}
            onMouseEnter={e => {onMouseEnter(e)}}
            onMouseLeave={e => {onMouseLeave(e)}}
            onKeyDown={e => {onKeyDown(e)}}
            onKeyUp={e => {onKeyUp(e)}}
            draggable={false}
            style={{userSelect: "none"}}
        >
            {props.noteInfo[0].slice(0, props.noteInfo[0].length - 1)}
            {/* <sub>{props}</sub> */}
        </div>
    )
}

export default Key;