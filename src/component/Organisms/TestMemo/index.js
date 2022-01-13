import {useMemo, useState} from 'react';
import './style.css'

function TestMemo(props) {
    const [year, setYear] = useState('')
    const [products, setProducts] = useState([])

    const handleSubmit = () => {
        setProducts([...products, {
            year: +year
        }])
    }

    const total = useMemo (() => {
        const result = products.reduce((result, prod) => {
            result = 2022
            return result - prod.year
        }, 0)

        return result
    }, [products])


    return (
        <div className='TestMemo'>
            <h1>Example useMemo</h1>
            <input
                value={year}
                placeholder='Enter year...'
                onChange={e => setYear(e.target.value)}
            />
            <br/>
            <button onClick={handleSubmit}>Sub</button>
            <br/>
            <h1>Tuổi: {total}</h1>
        </div>
    );
}

export default TestMemo;