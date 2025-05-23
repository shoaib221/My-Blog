

import { useState, createContext, useEffect } from "react";

export const BooksContext = createContext();

export function BooksProvider({children}) {
  const [books, setBooks] = useState([]);
  
  
  async function createBook(data) {
    
  }

    const fetchBooks = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setBooks(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            console.log("done");
        }
    };

  async function fetchBookById(id) {
    
  }

  async function deleteBook(id) {
    
  }

  useEffect(()=> {
    fetchBooks();
  }, []);


  return (
    <BooksContext.Provider value={{ books,  createBook, fetchBooks, fetchBookById, deleteBook }} >
      {children}
    </BooksContext.Provider>
  )
}



/*

const fetchBooks = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      console.log(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      
    }
  };

*/