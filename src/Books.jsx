

import {  Link } from 'react-router-dom';
import { useBooks } from './hooks';


export const Booklist = (  ) =>
{
  const { books } = useBooks();

  return (
    <div className="blog-list">
      {books.map(blog => (
        <div className="blog-preview" key={blog.id} >
            <Link to={`/blog/${blog.id}`}>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
            </Link>
        </div>
      ))}
    </div>
  );

}

