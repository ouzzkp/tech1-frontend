import React, { Component } from 'react'

function AddEmployee() {
  
    return (
      <div className="d-felx flex-column align-items-center ps-5 pt-5">
        <h2 class="text-center">Sample Form</h2>
<form class="form-horizontal">
  <div class="col-sm-6">
    <div class="form-group">
      <label class="control-label col-sm-4">Partner Name</label>
      <div class="col-sm-8">
        <input type="text" class="form-control"/>
      </div>
    </div>


    <div class="form-group">
      <label class="control-label col-sm-4">Partner Legal Name</label>
      <div class="col-sm-8">
        <input type="text" class="form-control"/>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="form-group">
      <label class="control-label col-sm-4">Partner Email ID</label>
      <div class="col-sm-8">
        <input type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-4">Partner Mobile</label>
      <div class="col-sm-8">
        <input type="text" class="form-control"/>
      </div>
    </div>
  </div>

  <div class="col-sm-12">
    <div class="form-group">
      <label class="control-label col-sm-2">Partner Address</label>
      <div class="col-sm-10">
        <textarea type="text" class="form-control" rows="2"></textarea>
      </div>
    </div>
  </div>


  <div class="col-sm-6">
    <div class="form-group">
      <label class="col-sm-4 control-label">Contract Start Date</label>
      <div class="col-sm-8">
        <input type="text" class="date-start ml-5 form-control datepicker" placeholder="Date Start"/>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="form-group">
      <label class="col-sm-4 control-label">Contract Expiry Date</label>
      <div class="col-sm-8">
        <input type="text" class="date-end ml-5 form-control datepicker col-sm-8" placeholder="Date End"/>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="form-group">
      <label class="col-sm-4 control-label">Minimum Loan Amount</label>
      <div class="col-sm-8">
        <input type="text" class="form-control"/>
      </div>
    </div>
  </div>
  
  <div class="col-sm-6">
    <div class="form-group">
      <label class="col-sm-4 control-label">Maximum Loan Amount</label>
      <div class="col-sm-8">
        <input type="text" class="form-control"/>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="form-group">
      <label class="col-sm-4 control-label">Interest Rate</label>
    <div class="col-sm-8">
        <input type="text" class="form-control"/>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="form-group">
      <label class="col-sm-4 control-label">Deposit Amount</label>
    <div class="col-sm-8">
        <input type="text" class="form-control"/>
      </div>
    </div>
  </div>

  <div class="text-center">
    <button class="btn btn-primary waves-effect waves-light " id="btn-submit">Save</button>
  </div>
  <input type="hidden" name="action" id="action" value="event_dialog_add_newpartnerdata" />
</form>
      </div>
    )
  }

export default AddEmployee
