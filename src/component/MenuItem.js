import {useSelector,useDispatch} from 'react-redux'
import Item from './Item'
import {bindActionCreators} from 'redux'
import actionCreators from '../component/store/actionCreators'





function MenuItem()

{
    const menu=useSelector(store=>store.MenuReducer)
   const dispatch=useDispatch();
   const {addItem,removeItem}=bindActionCreators(actionCreators,dispatch)

    return(
        <div >
            {
                menu.map((menuObj,ind)=>{
                    {
                        return <Item menuObj={menuObj} key={ind} addItem={addItem} removeItem={removeItem} />
                    }
                })
            }
        </div>
    )

}
export default MenuItem;