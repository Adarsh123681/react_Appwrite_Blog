import React, { useEffect, useState } from 'react'
import { Client, Databases, Query } from "appwrite";
import BlogCard from './BlogCard';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Delete, DeleteOutline } from '@mui/icons-material';
import { Update } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65111274195822fe60e6")

function AllBlog() {
  const [blogPosts, setBlogPosts] = useState([])
  const databases = new Databases(client);

  useEffect(() => {
    let promise = databases.listDocuments('651564c47ac5e91d9a54', '651564eb6728d0191b53', [
      Query.orderAsc("title"),
      Query.limit(5)
    ])
    promise.then((items) => {
      setBlogPosts(items.documents);
    }).catch((error) => {
      return error
    })
  })

  // const updateDoc = async () => {
  //   try {
  //     await databases.updateDocument('651564c47ac5e91d9a54', '651564eb6728d0191b53', { blogPosts.title, blogPosts.content });
  //     alert('Blog post updated successfully');
  //   } catch (error) {
  //     console.error('Error updating blog post:', error);
  //   }
  // }

  const deleteDoc = async (documentId) => {

    try {
      const delEle = await databases.deleteDocument('651564c47ac5e91d9a54', '651564eb6728d0191b53', documentId)
      alert("Data deleted successfully...")
    }
    catch (error) {
      console.error('Error updating blog post:', error);
    }
  }


  return (
    <>
      <h1 style={{ padding: "1rem", margin: "0px 0px .2rem 2rem" }}>List of all blog</h1>
      {/* <div style={{ width: "100vw", backgroundColor: "whitesmoke" }}> */}

      <Container>
        {
          !blogPosts ? (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          ) : (
            blogPosts && blogPosts.map((ele) => {

              return (
                <>
                  <BlogCard title={ele.title} img={ele.image} content={ele.content} auther={ele.auther} createdAt={ele.createdAt} />
                  <Button onClick={() => deleteDoc(ele.$id)}>DELETE <Delete /></Button>
                  {/* <Button onClick={()=> updateDoc(ele.$id)} style={{ margin: "0 0 0 1.5rem" }}>Update <Update /></Button> */}
                  <hr />
                </>
              )
            })

          )
        }
      </Container>
      {/* </div>. */}
    </>
  )
}

export default AllBlog