import { memo } from 'react'

function Content({onIncrease}) {

    console.log('render');

    return (
        <>
            <h1>Example useCallBack</h1>
            <button onClick={onIncrease}>Count</button>
        </>
    );
}

export default memo(Content)