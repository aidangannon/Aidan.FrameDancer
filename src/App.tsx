import React, {useState} from 'react';

function App() {
    let [ count, setCount ] = useState(0);
    return (
        <div className="App">
            <p>{count}</p>
            <button onClick={ ()=>setCount(++count) }>
                Increment Counter
            </button>
        </div>
    );
}

export default App;
