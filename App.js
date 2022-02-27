import './App.css';
import Title from './components/Title'
import ShoppingListContent from './components/ShoppingListContent';
import { useState } from 'react';

function App() {

  const [ counterValue, setCounterValue ] = useState(0);
  //Haetaan palvelimelta ostoslistan sisältö
  const shoppingListItems = [
    {
      id: 1,
      name: "Maitoa",
      qty: 4,
      isChecked: false
    },
    {
      id: 2,
      name: "Leipää",
      qty: 5,
      isChecked: false
    },
    {
      id: 3,
      name: "Pullaa",
      qty: 2,
      isChecked: true
    }   
    
  ];

  const handleItemCheckedToggle = (item) => {
    console.log("Toggling item status");
    console.log(item);

    let newShoppingListItems = [...shoppingListItems];

    let itemClickedIndex = newShoppingListItems.findIndex(i => item.id == i.id);
    if(itemClickedIndex != -1) {
      let newElement = {...newShoppingListItems[itemClickedIndex]}
      newElement.isChecked = !newElement.isChecked;
      newShoppingListItems[itemClickedIndex] = newElement;
     // setShoppingListItems(newShoppingListItems);
    }
  }


  return (
    <div className="App">
      <Title />
      <div>Laskuri: {counterValue }</div>
      <button onClick={ () => setCounterValue(counterValue + 1) }>Increase counter</button>
      <ShoppingListContent listItems={ shoppingListItems } itemClickedEvent={ handleItemCheckedToggle }/>  
      
    
    </div>

  );
}

export default App;
