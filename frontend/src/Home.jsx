import React from 'react'

function Home() {
    return (
        <div>
            <div className='p-3 d-flex justify-content-around mt-3'>
                <div className='p-3 pt-2 pb-3 border shadow-sm w-25'>
                    <div className='text-center pb-1'>
                        <h4>Admin</h4>
                        <hr />
                    </div>
                    <div className=''>
                        <h5>Total: { 2}
                        </h5>
                    </div>
                </div>
                <div className='p-3 pt-2 pb-3 border shadow-sm w-25'>
                    <div className='text-center pb-1'>
                        <h4>Employee</h4>
                        <hr />
                    </div>
                    <div className=''>
                        <h5>Total: {13 }
                        </h5>
                    </div>
                </div><div className='p-3 pt-2 pb-3 border shadow-sm w-25'>
                    <div className='text-center pb-1'>
                        <h4>Salary</h4>
                        <hr />
                    </div>
                    <div className=''>
                        <h5>Total: { "+$2024"}
                        </h5>
                    </div>
                </div>
            </div>

            {/*List of admid*/}
            <div className='mt-4 pt-3 px-5'>
                <h3>List of Admins</h3>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>

    )
}

export default Home