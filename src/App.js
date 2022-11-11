import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
// import BakeryOption from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function BakeryOption(props) {
  return (
      <div>
      <img src = {props.image}></img>
      <h2>{props.name}</h2>
      <h4>{props.description}</h4>
      <h4>{props.price}</h4>
      {/* <button onClick={() => setCount(count + {props,price})}>Add to Cart</button> */}
      {/* <button onClick={() => setCount(props.varr + props.price)}>Add to Cart</button> */}
      <button onClick={() => props.cart(props.prices, props.names)}>Add to Cart</button>
      </div>
  );
}

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [count, setCount] = useState(0);
  const [lister, setLister] = useState([]);

  function CartMath(price, name) {
    return (
      <div>



      {setCount(count + price)}
      <p>{count}</p>
      {console.log({price})}
      {console.log({count})}
      {console.log({name})}
      <p>{name}</p>
      {/* {var holder = list.concat([name])} */}
      {setLister(lister.concat(name))}
      {console.log({lister})}
     
      {/* {setList(holder)} */}
      </div>
      
      
    )
  }

  // function CartAdd(name){
  //   return(
  //     <div>

  //     </div>
  //   )
  // }

  return (
    <div className="App">
      <h1>The Bakeshop!!!</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p> // replace with BakeryItem component

        <BakeryOption key={index} name={item.name} names={item.name} image={item.image} description={item.desciption} price={item.price} prices={item.price} cart={CartMath}/>
      ))}

      <div className="top">
        <h2>Cart</h2>
        <p>Cost: ${count}</p>
        {/* <li>{lister}</li> */}
        {lister.map((x) => (
          <li>Item: {x}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
