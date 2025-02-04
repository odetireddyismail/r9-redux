import React, { useEffect } from 'react'
import axios from 'axios';
import { Inc } from '../action/Action';
import { useDispatch } from 'react-redux';
import Produ from './produ';
const Home = () => {


  const dispatch = useDispatch()


  //de-Structuring 




  //console.log(getState)
  const products = async () => {

    const res = await axios.get("https://fakestoreapi.com/products")
      .catch((error) => { console.log(error) })
    //console.log(res.data);
    dispatch(Inc(res.data));
    //console.log(res.data)
  }

  useEffect(() => {
    products()
  }, [])

  //const getState=useSelector((re)=>{return re.allProducts.Ismail.data})
  //Close the UseEffect

  return (
    <div>
      <Produ />
    </div>
  )
}

export default Home