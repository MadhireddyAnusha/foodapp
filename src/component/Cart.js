
import {useSelector} from 'react-redux'
function Cart()
{
  const cartItems=useSelector(store=>store.CartReducer)
  console.log("cartitems", cartItems)
  const getCount=()=>{
      if(cartItems.length===0)
      {
          return 0;
      }
      let total=0;
      let totalPrice=0;
     cartItems.forEach((cartObj)=>{
         total=total+cartObj.count;
         totalPrice=totalPrice+cartObj.totalPrice
     })
     return {total,totalPrice}
  }

  const getDeletedCount=()=>{
      if(cartItems.length!==0){
          
      }
  }
    return(
        <div>
            {getCount().totalPrice}
            <button className="btn btn-warning">Cart
            <span className="badge ms-2 me-2" >{getCount().total}</span>
            </button>
        </div>
    )

}
export default Cart;