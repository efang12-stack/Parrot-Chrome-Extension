function ControlPanel({ onStart, onPause, onStop, }: { 
    onStart: () => void; 
    onPause: () => void; 
    onStop: () => void; 
}) {
    return (
        <div>
            <button onClick={onStart}>Play</button>
            <button onClick={onPause}>Pause</button>
            <button onClick={onStop}>Stop</button>
        </div>
    );
}

export default ControlPanel;
