import React from 'react';
import StyleApp from './Component/StyleApp';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import SuperHero from './Component/SuperHero.page';
import RQSuperHeroes from './Component/RQSuperHeroes.page';
import Homepage from './Component/Home.page';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ParalelQuraies from './Component/ParalelQuraies';
import InfiniteQuery from './Component/InfiniteQuery';
import CreateForm from './Component/UI/CreateForm';
const queryClient = new QueryClient();

const App = () => {

  return (
<div>
  
<QueryClientProvider client={queryClient}>
 <Router> 
 <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/super-heroes">Traditinal super hero</Link></li>
      {/* <li><Link to="/rq-super-heroes">RQ super hero</Link></li>
      <li><Link to="/peralal">peralal quaries</Link></li>
      <li><Link to="/infinite">infinite quaries</Link></li> */}
      <li><Link to="/form">CreateForm</Link></li>
    </ul>
    </nav>

  <Routes>
    <Route exact path="/" element={<Homepage/>} />
    <Route exact path="/super-heroes" element={<SuperHero/>} />
    {/* <Route exact path="/rq-super-heroes" element={<RQSuperHeroes/>} />
    <Route exact path="/peralal" element={<ParalelQuraies/>} />
    <Route exact path="/infinite" element={<InfiniteQuery/>} /> */}
    <Route exact path="/form" element={<CreateForm/>} />
  </Routes>
</Router>
</QueryClientProvider>
</div>
  )
};

export default App; 

{/* <StyleApp/> */}