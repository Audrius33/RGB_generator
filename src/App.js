import React, {useRef, useState} from 'react';

function App() {

    const [buttonColor, setButtonColor] = useState("")

    const rRef = useRef()
    const gRef = useRef()
    const bRef = useRef()


    function RGBtoHex() {
        const rValue = rRef.current.value
        const gValue = gRef.current.value
        const bValue = bRef.current.value
        const r = parseInt(rValue).toString(16)
        const g = parseInt(gValue).toString(16)
        const b = parseInt(bValue).toString(16)

        const result = `#${r.length === 1 ? 0 + r : r}${g.length === 1 ? 0 + g : g}${b.length === 1 ? 0 + b : b}`
        setButtonColor(result)
    }

    return (

        <div>
            <input ref={rRef} type="number" placeholder="R"/>
            <input ref={gRef} type="number" placeholder="G"/>
            <input ref={bRef} type="number" placeholder="B"/>
            <button style={{backgroundColor: buttonColor}} onClick={RGBtoHex}>change color</button>
        </div>
    );
}

export default App;
