import { useEffect, useState } from 'react';
import { API } from '../../api';
import FruitCard from '../FruitCard';
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
            <div className='container-fruits__cardsDescription'>
                <span>Descrição</span>
                <span>Valor A</span>
                <span>Valor B</span>
                <span>Ação</span>
            </div>
            <div className='container-fruits__underline'></div>
            <button onClick={() => { console.log(fruitsList) }}>teste</button>
            {fruitsList?.map((fruit) => <FruitCard />)}
        </div>
    )
}

export default FruitsList;
