import React from 'react'

const App = () => {

  let info = [{
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890'
  },
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890'
  }
]

let x = info.map((item,index)=>{

  return(

    <div key={index}>
      <h2>{item.name}</h2>
      <p>{item.email}</p>
      <p>{item.phone}</p>
    </div>
  )
})
console.log(x)
  return (
    <div>
      <h1>{x}</h1>
      
    </div>
  )
}

export default App
