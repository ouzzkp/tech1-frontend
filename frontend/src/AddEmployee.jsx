import React, { Component } from 'react'

function AddEmployee() {



  
    return (
      <div className="d-felx flex-column align-items-center ps-5 pt-5">
      <h3 className="text-center">Employee's Information</h3>
      <form  className="form-horizontal">
          <div className="col-sm-6">
              <div className="form-group">
                  <label className="control-label col-sm-4">Employee Name</label>
                  <div className="col-sm-8">
                  <input type="text" className="form-control"/>
                  </div>
              </div>


              <div className="form-group">
                  <label className="control-label col-sm-4">Employee Surname</label>
                  <div className="col-sm-8">
                  <input type="text" className="form-control"/>

                  </div>
              </div>
          </div>

          <div className="col-sm-6">
              <div className="form-group">
                  <label className="control-label col-sm-4">Employee Email</label>
                  <div className="col-sm-8">
                  <input type="text" className="form-control"/>
                  </div>
              </div>

              <div className="form-group">
                  <label className="control-label col-sm-4">Employee Mobile</label>
                  <div className="col-sm-8">
                  <input type="text" className="form-control"/>
                  </div>
              </div>
          </div>

          <div className="col-sm-12">
              <div className="form-group">
                  <label className="control-label col-sm-2">Employee Address</label>
                  <div className="col-sm-10">
                  <input type="text" className="form-control"/>
                  </div>
              </div>
          </div>


          <div className="col-sm-6">
              <div className="form-group">
                  <label className="col-sm-4 control-label">Employee Salary</label>
                  <div className="col-sm-8">
                  <input type="text" className="form-control"/>
                  </div>
              </div>
          </div>

          <div className="col-sm-6">
              <div className="form-group">
                  <label className="col-sm-4 control-label">Employee Job Title</label>
                  <div className="col-sm-8">
                  <input type="text" className="form-control"/>
                  </div>
              </div>
          </div>
          <h3 className='text-center'>Manager</h3>
          <div className="col-sm-6">
              <div className="form-group">
                  <label className="col-sm-4 control-label">Manamger Firstname</label>
                  <div className="col-sm-8">
                  <input type="text" className="form-control"/>
                  </div>
              </div>
          </div>
          <div className="col-sm-6">
              <div className="form-group">
                  <label className="col-sm-4 control-label">Manager Surname</label>
                  <div className="col-sm-8">
                  <input type="text" className="form-control"/>
                  </div>
              </div>
          </div>
          <div className="text-center">
              <button className="btn btn-primary waves-effect waves-light " type="submit" id="btn-submit">Save</button>
          </div>
          <input type="hidden" name="action" id="action" value="event_dialog_add_newpartnerdata" />
      </form>
  </div>
        
      

    )
  }

export default AddEmployee
