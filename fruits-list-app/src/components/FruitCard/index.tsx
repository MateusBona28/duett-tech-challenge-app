import { IFruitProps } from "../../interfaces/Fruits.interfaces";
import './styles.css';

const FruitCard = ({ description, valueOne, valueTwo }: IFruitProps) => {
    return(
        <div className='fruit-card'>
            <div className="fruit-card__textBox">
                <span>{description}</span>
            </div>
            <div className="fruit-card__textBox">
                <span>{valueOne}</span>
            </div>
            <div className="fruit-card__textBox">
                <span>{valueTwo}</span>
            </div>
            <button type="button" className="fruit-card__selectBtn">Selecionar</button>
        </div>
    )
}

export default FruitCard;
