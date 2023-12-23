import { useState } from "react";

function useInput(initialValue) {

    const [ value, setValue ] = useState(initialValue);

    const reset = (resetValue = initialValue) => { setValue(resetValue) };

    const bind = {

        value,

        onChange: (event) => { setValue(event.target.value) }

    }

    return [value, bind, reset];

}

export default useInput;
