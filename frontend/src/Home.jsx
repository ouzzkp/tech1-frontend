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
                        <h5>Total: { }
                        </h5>
                    </div>
                </div>
                <div className='p-3 pt-2 pb-3 border shadow-sm w-25'>
                    <div className='text-center pb-1'>
                        <h4>Employee</h4>
                        <hr />
                    </div>
                    <div className=''>
                        <h5>Total: { }
                        </h5>
                    </div>
                </div><div className='p-3 pt-2 pb-3 border shadow-sm w-25'>
                    <div className='text-center pb-1'>
                        <h4>Salary</h4>
                        <hr />
                    </div>
                    <div className=''>
                        <h5>Total: { }
                        </h5>
                    </div>
                </div>
            </div>

            {/*List of admid*/}
            <div className='mt-4 pt-3 px-5'>
                <h3>List of Admins</h3>
                <table className='table'>
                    <thead>
                        <th>Email</th>
                        <th>Action</th>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Home