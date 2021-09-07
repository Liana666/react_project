import React from "react";


function Input() {

    let text = React.createRef();
    let textOut = React.createRef();

    function f1() {
        textOut.current.innerHTML += `<li>${text.current.value}</li>`;
    }

    return (
        <>
            <h1>Input</h1>
            <div className="input__wrapper">
                <textarea className="textArea" ref={text}></textarea>
                <button onClick={f1} style={{ marginTop: 15, padding: 6 }}>Add comment</button>
                <div ref={textOut}></div>
            </div>

        </>
    )
}

export default Input;