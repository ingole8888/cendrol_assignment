import { useEffect, useState } from 'react';
import Categories from './Component/Categories';

function App() {
  const [categories, setcategories] = useState([])
  const [loding, setloding] = useState(false)

   useEffect(() => {
     let fetchCategories = async () => {
       setloding(true)
       const fetchdata = await fetch("https://api.chucknorris.io/jokes/categories")
       const jsondata = await fetchdata.json()
       setloding(false)
       setcategories(jsondata);
       }   
       fetchCategories()
   }, [])
  
  return (<>
     <div style={{backgroundColor:"#4283EE", width:"100%", textAlign:"center"}}>
      <h1 style={{color:"#22C55E"}}>Chuck Norries</h1>
      <Categories categories={categories}/>
    </div>
    </>
  );
}

export default App;
