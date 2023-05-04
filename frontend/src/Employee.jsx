import React from 'react'
import { Link } from 'react-router-dom'

function Employee() {
    return (
        <div className="px-5 py-3">
            <div className="justify-content-center d-felx">
                <h>Employee List</h>
            </div>
            <Link to='/create'><button className="btn btn-success">Add Employee</button></Link>

        </div>
    )
}

export default Employee