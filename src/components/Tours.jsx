import React from 'react'
import Card from './Card'

function Tours({tours,removehandeler}) {
  return (
    <div className='container'>
        <div>
        <h2 className='title'>Plan with Love</h2>
        </div>

        <div className='cards'>
            {tours.map((tour)=>{
                 return <Card {...tour} removehandeler={removehandeler} ></Card>
            })}
        </div>
    </div>
  )
}

export default Tours