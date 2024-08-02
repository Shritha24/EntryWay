import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
import axios from 'axios'

const Bookings = () => {
  /*const[Bookings,setBookings]=useState([])
  const[auth,setAuth]=useAuth([])
  const getBookings=async()=>{
    try {
      const{data}=await axios.get('/api/v1/auth/bookings')
      setBookings(data)
      
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{
    if(auth?.token) getBookings()
  },[auth?.token]);
  */
  return (
    <Layout title={"Your Bookings"}>
        <div className="container-fluid p-3 m-3">
            <div className="row">
            <div className='col-md-3'>
                <UserMenu />
            </div>
            <div className='col-md-9'>
                <h1>All bookings</h1>
                
            </div>
            </div>
        </div>
    </Layout>
  )
}

export default Bookings