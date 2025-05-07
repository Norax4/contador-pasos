import React from 'react';
import { useState } from 'react';

export function ContadorPasos() {
    const [contadorP, setContadorP] = useState(0);

    const aumentarPasos = () => setContadorP(contadorP + 1);
    return (
        <div>
            <p>Pasos: {contadorP}</p>
            <button onClick={aumentarPasos}> Dar un paso! </button>
        </div>
    )
}