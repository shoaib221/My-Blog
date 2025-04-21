import {  Link } from 'react-router-dom';
import useFetch from './useFetch'

const BlogList = ( props ) =>
{
  const blogs = props.blogs;

  return (
    <div className="blog-list">
      {blogs.map(blog => (
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

const Blog = () => {

  const { data, isPending, error } = useFetch( 'http://localhost:3000/blogs/' );

  return (
    <div>
    {data && <BlogList blogs={data} /> }
    </div>
  );
}


 
export default Blog;