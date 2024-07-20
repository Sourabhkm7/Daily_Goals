import React from 'react'
import { useParams } from 'react-router-dom';

const Users = () => {
    const params = useParams();
    console.log(params.id)
  return (
    <div className='Users'>User
      
    </div>
  )
}

export default Users;
