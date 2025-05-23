import { useState, useEffect } from "react" 
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from 'react-router';
import { Booklist } from "./Books";
import { BooksContext, BooksProvider } from "./Context";

const Home = () => 
{
    

    return (
      <BooksProvider>
        <BrowserRouter>
          <div className="home">
            <NavBar />
            <div className="content" >
              <Routes>
                
                <Route path="/books" element={ <Booklist /> }></Route>
              </Routes>
            </div>  
          </div>
        </BrowserRouter>
      </BooksProvider>
    );

}

export default Home;