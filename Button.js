import React, { useState } from 'react';

const FutureButton = () => {
    let k = 4

    let [value, setValue] = useState(0);

    const addValue = () => {
        setValue(++value)
        if (value > k - 1) {
            setValue(0)
        }
    }

    return (
        <button onClick={addValue}>{value}</button>
    )
}

export default FutureButton;