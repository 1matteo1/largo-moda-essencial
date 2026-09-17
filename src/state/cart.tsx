import { createContext, useContext, useEffect, useMemo, useReducer, useState, type ReactNode } from "react";
import type { Product } from "@/data/products";
export type CartItem={product:Product;size:string;color:string;quantity:number};
type CartContextValue={items:CartItem[];count:number;subtotal:number;hydrated:boolean;add:(product:Product,size:string,color:string,quantity?:number)=>void;remove:(id:string,size:string,color:string)=>void;update:(id:string,size:string,color:string,quantity:number)=>void;clear:()=>void};
const CartContext=createContext<CartContextValue|undefined>(undefined);
type Action={type:"hydrate";items:CartItem[]}|{type:"add";item:CartItem}|{type:"remove";id:string;size:string;color:string}|{type:"update";id:string;size:string;color:string;quantity:number}|{type:"clear"};
function reducer(state:CartItem[],action:Action){
 if(action.type==="hydrate") return action.items;
 if(action.type==="clear") return [];
 if(action.type==="remove") return state.filter(i=>!(i.product.id===action.id&&i.size===action.size&&i.color===action.color));
 if(action.type==="update") return state.map(i=>i.product.id===action.id&&i.size===action.size&&i.color===action.color?{...i,quantity:Math.max(1,action.quantity)}:i);
 const found=state.find(i=>i.product.id===action.item.product.id&&i.size===action.item.size&&i.color===action.item.color);
 return found?state.map(i=>i===found?{...i,quantity:i.quantity+action.item.quantity}:i):[...state,action.item];
}
export function CartProvider({children}:{children:ReactNode}){const [items,dispatch]=useReducer(reducer,[]);const[hydrated,setHydrated]=useState(false);useEffect(()=>{try{const raw=localStorage.getItem("largo-cart");if(raw)dispatch({type:"hydrate",items:JSON.parse(raw) as CartItem[]});}catch{}setHydrated(true)},[]);useEffect(()=>{if(hydrated)localStorage.setItem("largo-cart",JSON.stringify(items))},[items,hydrated]);const value=useMemo(()=>({items,hydrated,count:items.reduce((a,i)=>a+i.quantity,0),subtotal:items.reduce((a,i)=>a+i.product.price*i.quantity,0),add:(product:Product,size:string,color:string,quantity=1)=>dispatch({type:"add",item:{product,size,color,quantity}}),remove:(id:string,size:string,color:string)=>dispatch({type:"remove",id,size,color}),update:(id:string,size:string,color:string,quantity:number)=>dispatch({type:"update",id,size,color,quantity}),clear:()=>dispatch({type:"clear"})}),[items,hydrated]);return <CartContext.Provider value={value}>{children}</CartContext.Provider>}
export function useCart(){const value=useContext(CartContext);if(!value)throw new Error("useCart must be used within CartProvider");return value}
