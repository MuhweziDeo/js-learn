import React, { Component } from 'react'
const TableHeader=()=>{
    return(
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
    </thead>
    )
};

const Tbody=() =>{
    return(
        <tbody>
       
    </tbody>
    )
}
export class Table extends Component {
  render() {
    return (
      <div>
           <table>
               <TableHeader/>
               <Tbody/>
            </table>
        
      </div>
    )
  }
}
export default Table;