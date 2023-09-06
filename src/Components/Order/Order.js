import React,{useContext,useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MyContext } from "../../Context/My-context";
import { services } from "../../Services/Services";

const Order = (props) => {
    const {cart}=useContext(MyContext)
    const [data,setData]=useState({})
    const handleInputChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const onOrder=async()=>{
        console.log(data)
        const response=await services.postOrderProducts({data,
            title:cart.map((e)=>e.title)
        })
        console.log(response)
        props.onHide()
    }
  return (
    <Modal 
      {...props}
      className="vpn"
      size="smshow"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="ll" closeButton>
        <Modal.Title className="fff" id="contained-modal-title-vcenter">
           Оформить Товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <div className="d-flex flex-column gap-3">
            <input style={{width: '467px',height:'36px'}} type="text" onChange={handleInputChange} placeholder="ФИО" name="name" id="" />
            <input style={{width: '467px',height:'36px'}} type="number" onChange={handleInputChange} placeholder="Number" name="phone" id="" />
            <input style={{width: '467px',height:'36px'}} type="text" onChange={handleInputChange} placeholder="Address" name="address" id="" />
        </div>
        {
            cart.map((elem)=>{
                return <p key={elem.title} >{elem.title}</p>
            })
        }
      </Modal.Body>
      <Modal.Footer>

        <div>
        <Button className="www" onClick={props.onHide}>Отменить</Button>
        </div>

        <div>
        <Button className="qqq" onClick={onOrder}>Заказать</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Order;
