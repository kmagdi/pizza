import React,{useState,useEffect} from 'react'
import axios from 'axios'

export const PizzaCard=({nev,foto})=>{
    const [detail,setDetail]=useState([])
    const url=`http://localhost:5000/${nev}`

    const fetchData=async (url) => {
      const resp=await axios.get(url)
      const data=resp.data
      setDetail(data) 
    }


   const handleClick=() => {
       console.log(nev)
       fetchData(url)
   }
   const handleClear=()=>{
    setDetail([]);
   }
  return (
      <>
    <div className="col-md-4 col-sm-6 d-flex justify-content-center mt-3 ">
        <div className="card">
            <img src={foto} className="card-img-top" alt="pizza"/>
            <div className="card-body">
                <h5 className="card-title">{nev}</h5>
                <div  onClick={()=>handleClick()} className="btn btn-success">Részletek...</div>
            </div>
        </div>
    </div>
    {detail.length>0 &&(
            <div className="backdrop" onClick={handleClear}>
                <div className="dataResult"><h6 className="text-white">{nev}</h6>
                { detail.map((obj,i) =><div key={i} className="text-white text-center">🍕Méret: {obj.meret}cm - {obj.ar}Ft</div>)}
                </div>
            </div>
            
        )}

    </>
  )
}
