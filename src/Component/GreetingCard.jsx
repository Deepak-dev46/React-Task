import React, { useState } from 'react'

function GreetingCard(p) {
    let defaultname = p.initialName == undefined || p.initialName == null ? "Guest" : p.initialName;
    let [name, setName] = useState(defaultname)
    return (
        <div className='greetingCard'>
            <h1>Hello {name}! {p.title} </h1>
            <div className="btns">
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <button onClick={() => { setName(name = "Guest") }} >reset</button>
            </div>
        </div>
    )
}

export default GreetingCard
