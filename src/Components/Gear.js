import React from 'react'
import { Table } from 'react-bootstrap';

// Code adapted from https://www.makeuseof.com/react-generate-table-from-json/

const Gear = ({ theadData, tbodyData }) => {
  return (
    <Table striped bordered hover>

        <thead>

            <tr>

              {React.Children.toArray(theadData.map(heading => {
                
                if(heading === "key"){
                  return null;
                }
                return <th key={heading}>{heading}</th>

              }))}

            </tr>

        </thead>

        <tbody>
    
          {React.Children.toArray(tbodyData.map((row, index) => {

            return <tr key={index}>
              
              {theadData.map((key, index) => {
                
                if (key === 'key') {
                  return null;
                }

                return <td key={index}>{row[key]}</td>

              })}

            </tr>

          }))}

        </tbody>

    </Table>
  )
}

export default Gear