import React from 'react'

function row({name,content,index,date,github}) {
  return (
    <tr>
        <td >{index+1}</td>
        <td><a href={github}>{name}</a></td>
        <td>{content}</td>
        <td>{date}</td>
    </tr>
  )
}

export default row
