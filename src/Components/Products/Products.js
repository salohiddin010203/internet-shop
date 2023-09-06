import React,{useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../../Services/Services'
import { MyContext } from '../../Context/My-context'
import CartItem from '../Cart-item/Cart-item';

const Products = () => {
  const {categoryProduct,data,addToCard}=useContext(MyContext)
  const {product}=useParams()
  
  useEffect(()=>{
    const data=async()=>{
      const result=await services.getCategoryProduct(product)

      console.log("result",result)
      categoryProduct(result.data.products)
    }
    data()
  },[product])

  console.log(data)
  return (
    <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
      {
        data?.map((elem,i)=>{
          return <CartItem onClick={()=>addToCard(elem.id)} children="Add To Card" key={i} {...elem} />
        })
      }
    </div>
  )
}

export default Products