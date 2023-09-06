import React,{useEffect,useContext} from 'react'
import CartItem from '../Components/Cart-item/Cart-item'
import { services } from '../Services/Services'
import { MyContext } from '../Context/My-context'

const Home = () => {

  const {getAllProduct,products, addToCard }=useContext(MyContext)
  useEffect(()=>{
    const data=async()=>{
      const product=await services.allPorducts()
      getAllProduct(product.data.products)
    }
    data()
  },[])
  return (
    <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
      {
        products.map((product,index)=>{

          return  <CartItem children='Add to Cart' onClick={()=> addToCard (product.id)} key={index} {...product} />
        })  
      } 
    </div>
  )
}
export default Home