function Key (props) {
    let context = new AudioContext();
    let note = context.createOscillator();
    const real = new Float32Array(2);
    const imag = new Float32Array(2);
    real[0] = 0;
    imag[0] = 0;
    real[1] = 1;
    imag[0] = 0;

    var wave = context.createPeriodicWave(real, imag, {disableNormalization: true});
    note.frequency.value = 440;
    note.setPeriodicWave(wave);
    note.type = "square";
    note.connect(context.destination);

    note.start();
    note.stop(1);
    note.frequency.value *= 1.0595

    return (
        <div className="key">{props.name}</div>
    )
}

export default Key;