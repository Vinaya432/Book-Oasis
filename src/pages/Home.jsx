import React, { useState } from 'react'
import View from '../components/View'
import AddBook from '../components/AddBook'
import Header from '../components/Header'




function Home() {
  const [uploadBookRes,setUploadRes] = useState({})
  return (
    <div>
      <Header insideHome/>
       <AddBook setUploadRes={setUploadRes}/>
       <View  uploadBookRes={uploadBookRes}/>
    </div>
  )
}

export default Home