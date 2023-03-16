import { useEffect, useState } from 'react';
import { API } from '../../api';
import './styles.css'

const FruitsList = () => {

    const [fruitsList, setFruitsList] = useState([])

    useEffect(() => {
        API.get('/Fruit')
        .then((res) => {
            setFruitsList(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <div className='container-fruits'>
            <button onClick={() => { console.log(fruitsList) }}>teste</button>
        </div>
    )
}

export default FruitsList;
