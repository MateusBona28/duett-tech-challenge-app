import { IFruitProps } from "../../interfaces/Fruits.interfaces";
import './styles.css';

const FruitForm = ({ description, valueOne, valueTwo } : IFruitProps) => {
    return (
        <div className="fruit-form">
            <span>Descrição: {description}</span>
            <span>Valor A: {valueOne}</span>
            <span>Valor B: {valueTwo}</span>
            <span>Resultado: {valueOne && valueTwo !== undefined && valueOne * valueTwo}</span>
        </div>
    )
}

export default FruitForm;
