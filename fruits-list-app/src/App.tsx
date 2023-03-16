import { useState } from 'react';
import './App.css';
import FruitForm from './components/FruitForm';
import FruitsList from './components/FruitsList';
import { ISelectedFruit } from './interfaces/Fruits.interfaces';

function App() {

  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [selectedFruit, setSelectedFruit] = useState<ISelectedFruit>({})

  return (
    <div className="App">
      <FruitsList 
      setIsSelected={setIsSelected}
      setSelectedFruit={setSelectedFruit}
      />
      {
        isSelected ? 
        <FruitForm 
        description={selectedFruit?.description} 
        valueOne={selectedFruit?.valueOne} 
        valueTwo={selectedFruit?.valueTwo}
        />
         :
        <div className='App-noSelectedFruitContainer'>
          <h2>Você ainda não selecionou nenhum item.</h2>
        </div> 
      }
    </div>
  );
}

export default App;
