import './App.css';
import React,{useState,useEffect} from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {PizzaCard} from './components/PizzaCard'
import axios from 'axios'

function App() {
  const [products,setProduct]=useState([])
  useEffect(() => {
    const url='http://localhost:5000/'
    fetchData(url)
  },[])
const fetchData=async (url) => {
  const resp=await axios.get(url)
  const data=resp.data
  setProduct(data) 
  
}
//console.log(products)
  return (
    <>
    <div className="container-fluid" >
      <div className="d-flex banner justify-content-center align-items-center ">
              <h1 className="text-white text-center p-2 w-100">Szeretnéd "A <b>legjobb</b>" pizzát ebédre vagy vacsorára?</h1>
              <div className="contact">
                <h6 >Hívj ! 📞 +36 30 111 2626</h6>
                <h6 >Írj!  📧 pizzafutar@gmail.com</h6>
              </div>
        </div>
        <div className="container border shadow ">
          <div className="row justify-content-center">
            {products.map(obj=><PizzaCard key={obj.nev} {...obj}/> )}
        </div>
        </div>
    </div>
    </>
  );
}

export default App;
