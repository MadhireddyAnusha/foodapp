
const initialState=[
    {id:1,item:"Biryani",price:350},
    {id:2,item:"Soup",price:100},
    {id:3,item:"Apollo fish",price:400},
    {id:4,item:"Mushroom",price:250},
    {id:5,item:"Curd rice",price:150},
    {id:6,item:"Fried rice",price:250}
]

const MenuReducer=(state=initialState,action)=>{
    return state;
}
export default MenuReducer;