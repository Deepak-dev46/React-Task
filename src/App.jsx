import React from 'react'
import GreetingCard from './Component/GreetingCard'
import Counter from './Component/Counter'
const App = () => {
  return (
    <>
      <GreetingCard title="Welcome" initialName="Aneesh"/>

      <Counter step={1}/>
    </>
  )
}

export default App
