import React from 'react'

const Specification = (props) => {
  return (
    <div className='table-responsive p-4 m-4'>
        <table className='table text-black table-bordered table-dark text-center'>
            <thead className=''>
                <tr>
                    <th scope='col'> Fuel Type </th>  
                    <th scope='col'> Transmission </th>  
                    <th scope='col'> ARAI Fuel Economy </th>  
                    <th scope='col'> Engine </th> 
                    <th scope='col'> DriveTrain </th>    
                    <th scope='col'> Acceleration </th>
                    <th scope='col'> Top Speed </th>            
                </tr>
            </thead>
        <tbody className='table-dark'>
            <tr>
                <td scope='row'> Petrol </td>
                <td scope='row'> Automatic (DCT) </td>
                <td scope='row'> 7.8 kmpl </td>
                <td scope='row'> 3996 cc </td>
                <td scope='row'> AWD </td>
                <td scope='row'> 3.6 seconds </td>
                <td scope='row'> 305 kmph </td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Specification
