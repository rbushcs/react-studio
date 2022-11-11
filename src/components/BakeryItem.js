// TODO: create a component that displays a single bakery item
function BakeryOption(props) {
    return (
        <div>
        <img src = {props.image}></img>
        <h2>{props.name}</h2>
        <h4>{props.description}</h4>
        <h4>{props.price}</h4>
        </div>
    );
}