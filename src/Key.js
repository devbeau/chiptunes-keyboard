function Key (props) {
    let context = new AudioContext();
    let note = context.createOscillator();
    note.type = "square";
    note.frequency.value = props.noteInfo[1];
    note.connect(context.destination)

    function onMouseDown() {
        note.start();
    }
    function onMouseUp() {
        note.stop();
        note = context.createOscillator();
        note.type = "triangle";
        note.frequency.value = props.noteInfo[1];
        note.connect(context.destination)
    }
    return (
        <div 
        className="key"
        onMouseDown={e => {onMouseDown()}}
        onMouseUp= {e => {onMouseUp()}}
        >
            {props.noteInfo[0]}
        </div>
    )
}

export default Key;