import './Shop.css';
import { useState } from 'react';
function Item(props){
    return (<div key={props.id} onClick={()=>props.callback(props)}>
        <img src={props.img} width={200} height={200}/><br/>
        id: {props.id} <br/>
        name: {props.name}<br/>
        price: {props.price}<br/>
    </div>);
}
export default function Shop(){
    const products=[
        {id:0,name:"Notebook Acer Swift",price:45900,img:"https://img.advice.co.th/images_nas/pic_product4/A0147295/A0147295_s.jpg"},
        {id:1,name:"Notebook Asus Vivo",price:19900,img:"https://img.advice.co.th/images_nas/pic_product4/A0146010/A0146010_s.jpg"},
        {id:2,name:"Notebook Lenovo Ideapad",price:32900,img:"https://img.advice.co.th/images_nas/pic_product4/A0149009/A0149009_s.jpg"},
        {id:3,name:"Notebook MSI Prestige",price:54900,img:"https://img.advice.co.th/images_nas/pic_product4/A0149954/A0149954_s.jpg"},
        {id:4,name:"Notebook DELL XPS",price:99900,img:"https://img.advice.co.th/images_nas/pic_product4/A0146335/A0146335_s.jpg"},
        {id:5,name:"Notebook HP Envy",price:46900,img:"https://img.advice.co.th/images_nas/pic_product4/A0145712/A0145712_s.jpg"}];
        const [cart,setCart]=useState([]);
        function addCart(item){
         setCart([...cart,{id:item.id,name:item.name,price:item.price,img:item.img}]);
        }
        const productList=products.map(item=><Item {...item} callback={addCart}/>);
        const cartList=cart.map((item,index)=><li>{item.id} {item.name} {item.price}
        <button onClick={()=>{
            alert('you click'+index)
            setCart(cart.filter((i,_index)=>index!=_index));
            }}>Delete </button>
        </li>);
       
        let totalprice=0;
        for(let i=0;i<cart.length;i++){
            totalprice+=cart[i].price;
        }
        return (<>
        <div className='grid-container'>{productList}</div>
        <h1>Cart</h1>
        <ol>{cartList}</ol>
        <button onClick={()=>setCart([])}>Clear All</button>
        <h2>Total Price {totalprice}</h2>
        </>);
}
