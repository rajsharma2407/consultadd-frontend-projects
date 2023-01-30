import React, { useEffect, useState } from 'react'
import './Table.css';

export default function Table(props) {
  // const [data1, setData1] = useState(props.data)
  // useEffect(()=>{
  //   setData1(data);
  // },[data])
  return (
    <>
        <table>
            <thead>

            <tr>
                <th>Name</th>
                <th>DOB</th>
            </tr>
            </thead>
            <tbody>

                {props.data.map((value, index)=>{
                    return <tr key={index}> 
                    <td>{value.dob}</td>
                    <td>{value.name}</td>
                    </tr>
                })}
                </tbody>
        </table>
    </>
  )
}
