import React,{useEffect,useContext} from 'react'
import { services } from '../../Services/Services'
import { MyContext } from '../../Context/My-context'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const {getCategoryState,categories}=useContext(MyContext)
  useEffect(()=>{
    const data=async()=>{
      const result=await services.getCategories()
      getCategoryState(result.data)
    }
    data()
  },[])
  const navigate=useNavigate()
  const togggleClick=(title)=>{
    navigate(`/product/${title}`)
  }
  return (
    <div className='nav-menu'>
      <h5>Category Product</h5>
      <ol>
        {
          categories.map((elem,index)=>{
            return <li onClick={()=>togggleClick(elem)} key={index} >  {elem}</li>
          })
        }
      </ol>
    </div>
  )
}

export default Nav