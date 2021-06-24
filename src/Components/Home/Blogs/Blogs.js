import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import panda from '../../../foodImages/panda.jpg';
import image from '../../../foodImages/images.png';
import './Blog.css'

const blogData = [
    {
        title : 'Check Your Food In Food Panda',
        description : 'Foodpanda is one of the largest online food delivery services around the globe, here you can know about how to leave a review on Foodpanda. Foodpanda is the only company that has targeted about 3 billion people in the world for their services.',
        author:'CEO',
        authorImg : panda,
        date : '24 Jun 2021'
    },
    {
        title : 'Check Your Food In Food Panda',
        description : 'All the reviews present on the restaurant page will tell you about the credibility of the restaurant. From those reviews, you can also know how much restaurant is worth visiting or someone can order next meal from them.        ',
        author:'Manager',
        authorImg : image,
        date : '22 April 2021'
    },
    
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">Food Blog</h5>
                    <h1>Food Panda Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;