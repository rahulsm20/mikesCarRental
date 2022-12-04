import React from 'react'

const Details = () => {
  return (
    <div className="row justify-content-between">
    <div className="col" id="city">
      <h4 className="mx-4">New Delhi</h4>
      <hr/>
      <div className="card-caption m-3 ">
        Address : #12, Rajiv Chowk, Connaught Place - 1208942
        <br />
        Phone: +91-879009821
        <br />
        Timings: Mondays to Fridays
      </div>
    </div>
  <div className="col" id="city">
      <h4 className="mx-4">Mumbai</h4>
      <hr/>
      <div className="card-caption m-3">
        Address: #25, St.Marks Street , Colaba - 3409801
        <br />
        Phone: +91-9876520987
        <br />
        Timings: Mondays to Fridays 9am-5pm
      </div>
    </div>
    <div className="col" id="city">
      <h4 className="mx-4">Bangalore</h4>
      <hr/>
      <div className="card-caption my-4 m-3" id="add">
        Address: #43, Hoysala Road, Indiranagar - 2350281
        <br />
        Phone: +91-8762341293
        <br />
        Timings: Mondays to Fridays 9am-5pm
      </div>
    </div>
  </div>
  )
}

export default Details
