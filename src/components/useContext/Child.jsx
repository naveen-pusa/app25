import React, { useContext } from 'react'
import { Usercontext } from './UserList'

const Child = () => {

    let user = useContext(Usercontext)
     let sortuser = [...user].sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  )

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">User Details</h2>

      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Mobile Number</th>
          </tr>
        </thead>

        <tbody>     
          {sortuser.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Child
