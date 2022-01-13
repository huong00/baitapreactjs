import {useState, useCallback} from 'react';
import './style.css'
import Content from './Content'

function TestCallBack(props) {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback( () => {
        setCount(prevCount => prevCount + 1)
    }, [])
    return (
        <div className='TestCallBack'>
            <Content onIncrease={handleIncrease}/>
            <h1>{count}</h1>
        </div>
    );
}

export default TestCallBack;