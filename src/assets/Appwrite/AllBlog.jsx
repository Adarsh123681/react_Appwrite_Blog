import React, { useEffect, useState } from 'react'
import { Client, Databases } from "appwrite";
import BlogCard from './BlogCard';

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("65111274195822fe60e6") // Your project ID

function AllBlog() {
  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    const databases = new Databases(client);
    let promise = databases.listDocuments("651564c47ac5e91d9a54", "651564eb6728d0191b53");
    promise.then((items) => {
      setBlogPosts(items.documents);
      // console.log(items);
    }).catch(() => {
      return error
    })
  })
  return ( 
    <>
      <h3 style={{padding:"1rem" , margin:"0px 0px .2rem 4rem"}}>List of all blog</h3>
      <div style={{ display: 'flex', flexDirection: "row", justifyContent : "center", alignItems:"center", gap:".8rem" , marginTop:"1.5rem"}}>
      {
        blogPosts && blogPosts.map((ele) => {
          return (
            <>
              <BlogCard title={ele.title} img={ele.image} content={ele.content} auther={ele.auther} />

            </>
          )
        })
      }
      </div>
    </>
  )
}

export default AllBlog