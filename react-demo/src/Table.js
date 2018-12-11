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
        <tr>
            <td>Charlie</td>
            <td>Janitor</td>
        </tr>
        <tr>
            <td>Mac</td>
            <td>Bouncer</td>
        </tr>
        <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
        </tr>
        <tr>
            <td>Dennis</td>
            <td>Bartender</td>
        </tr>
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