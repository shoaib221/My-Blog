import { useState, useEffect } from "react" 
import NavBar from "./NavBar";
import Blog from "./Blog";
import { BrowserRouter, Route, Routes } from 'react-router';
import Create from "./Create";
import BlogDetail from "./BlogDetail";

const Home = () => 
{
    const blogs = fetch( 'http://localhost:3000/blogs/' );
    console.log( blogs );

    return (
      <BrowserRouter>
        <div className="home">
          <NavBar />
          <div className="content" >
            <Routes>
              <Route exact path="/" element={ <Blog /> } >  </Route>
              <Route path="create/"  element={ <Create /> } > </Route>
              <Route path="blog/:id/"  element={ <BlogDetail /> } > </Route>
            </Routes>
          </div>  
        </div>
      </BrowserRouter>
    );

}

export default Home;