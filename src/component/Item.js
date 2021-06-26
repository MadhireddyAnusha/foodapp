

function Item(props)
{
    const menuObj=props.menuObj;
    const addItem=props.addItem;
    const removeItem=props.removeItem
    

    return(
        <ul className="list-unstyled d-flex justify-content-between ms-5 w-75 p-3 bg-light ">

         <li className="text-primary">{menuObj.item} </li>
         
         <li >
         <span className="increment p-2" onClick={()=>addItem(menuObj)} >+</span>
             Rs{menuObj.price} 
            <span className="decrement p-2"  onClick={()=>removeItem(menuObj)} >-</span>
            </li>
        </ul>
    )
}

export default Item;