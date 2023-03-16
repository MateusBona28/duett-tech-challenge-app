import { useEffect, useState } from 'react';
import { API } from '../../api';
import { IFruit } from '../../interfaces/Fruits.interfaces';
import { ISelectedProps } from '../../interfaces/SelectedProps.interfaces';
import FruitCard from '../FruitCard';
import './styles.css';

const FruitsList = ({ setIsSelected, setSelectedFruit }: ISelectedProps) => {

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
                <div className='container-fruits__textBox'>
                    <span>Descrição</span>
                </div>
                <div className='container-fruits__textBox'>
                    <span>Valor A</span>
                </div>
                <div className='container-fruits__textBox'>
                    <span>Valor B</span>
                </div>
                <div className='container-fruits__textBox'>
                    <span>Ação</span>
                </div>
            </div>
            <div className='container-fruits__underline'></div>
            {fruitsList?.map((fruit: IFruit) => <FruitCard 
            key={fruit.id} 
            description={fruit.description}
            valueOne={fruit.valueOne}
            valueTwo={fruit.valueTwo}
            setIsSelected={setIsSelected}
            setSelectedFruit={setSelectedFruit}
            />)}
        </div>
    )
}

export default FruitsList;
