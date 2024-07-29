import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/AccountPage/Login';
import SignupPage from './pages/AccountPage/Signup';


const App = ()=>{
  return(
    <Router>
      <div className='App'>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/register'></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/signup' element={<SignupPage/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

// const App = () => {
//   const [loading, setLoading] = useState(false)
//   const [allProducts, setAllProducts] = useState([])

//   useEffect(() => {
//     setLoading(true);
//     axios({
//       method: "GET",
//       url: "https://fakestoreapi.com/products"
//     }).then(res => {
//       console.log(res.data)
//       setAllProducts(res.data)
//     }).catch(e => { console.log(e) })
//       .finally(() => setLoading(false))
//   }, [])

//   return (
//     <div className="App">
//       <header className="App-header">
//         {
//             loading && (
//               <div>
//                 {""}
//                 <h1>Loading Products...</h1>
//               </div>
//             )}

//           {allProducts.map((product)=>(
//             <div className='product-container' key={product.id}>
//                 <div><img src={product.image} className='product-img'></img></div>
//                 <div><h6>{product.title}</h6></div>
//             </div>
//           ))
//           }
//       </header>
//     </div>
//   );
// }

export default App;
