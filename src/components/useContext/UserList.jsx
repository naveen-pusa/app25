import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Child from './Child'


export const Usercontext = createContext()

const UserList = () => {

   let [user, setuser] = useState([])
   async function Api() {
      let { data } = await axios.get('https://dummyjson.com/users')
      console.log(data.users);
      setuser(data.users)
   }

   useEffect(() => {
      Api()
   }, [])
   return (
      <>

       <Usercontext.Provider value={user}>
         <Child/>
       </Usercontext.Provider>

      </>
   )
}

export default UserList
