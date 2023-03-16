import { useEffect, useState } from "react";
import { IEventChangeInput } from "../../interfaces/EventChange.interfaces";
import { IFruitProps } from "../../interfaces/Fruits.interfaces";
import './styles.css';

const FruitForm = ({ description, valueOne, valueTwo } : IFruitProps) => {

    const [result, setResult] = useState<number>(0)
    const [valueOneInput, setValueOneInput] = useState(valueOne)
    const [valueTwoInput, setValueTwoInput] = useState(valueTwo)

    const handleChangeValueOne = (e:IEventChangeInput) => {
        setValueOneInput(e.target.value)
    }

    const handleChangeValueTwo = (e:IEventChangeInput) => {
        setValueTwoInput(e.target.value)
    }

    const handleDivideResult = () => {
        if(valueOneInput && valueTwoInput !== undefined) {
            setResult(valueOneInput / valueTwoInput)
        }
    }

    const handleMultiplyResult = () => {
        if(valueOneInput && valueTwoInput !== undefined) {
            setResult(valueOneInput * valueTwoInput)
        }
    }


    
    useEffect(() => {
        setValueOneInput(valueOne)
        setValueTwoInput(valueTwo)
        setResult(0)
    }, [valueOne, valueTwo])

    return (
        <div className="fruit-form">
            <div className="fruit-form__header">
                <h2>Item selecionado:</h2>
            </div>
            <div className="fruit-form__body">
                <span>Descrição</span>
                <input
                value={description}
                disabled={true}
                />
            </div>
            <div className="fruit-form__body">
                <span>Valor A</span>
                <input 
                onChange={(e) => {handleChangeValueOne(e)}}
                value={valueOneInput}
                />
            </div>
            <div className="fruit-form__body">
                <span>Valor B</span>
                <input
                onChange={(e) => {handleChangeValueTwo(e)}}
                value={valueTwoInput}
                />
            </div>
            <div className="fruit-form__body">
                <span>Resultado</span>
                <input
                value={result}
                disabled={true}
                />
            </div>
            <div className="fruit-form__footer">
                <button type="button" className="operationBtn" onClick={() => { handleDivideResult() }}>Dividir</button>
                <button type="button" className="operationBtn" onClick={() => { handleMultiplyResult() }}>Multiplicar</button>
            </div>
        </div>
    )
}

export default FruitForm;
