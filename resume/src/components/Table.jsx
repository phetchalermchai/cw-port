import React from 'react'
import Row from './row'
import Project from "../data/Project"

function Table() {
  return (
    <div className='container p-4'>
      <table className="table table-sm table-bordered table-hover text-center table-striped ">
        <thead>
          <tr>
            <th >No</th>
            <th>Title</th>
            <th>Languages</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {Project.map((data,index)=>{
            return <Row key={index} {...data} index={index}/>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
