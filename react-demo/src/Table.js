import React, { Component } from 'react'

export class Table extends Component {
  render() {
    return (
      <div>
           <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
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
            </table>
        
      </div>
    )
  }
}
export default Table;