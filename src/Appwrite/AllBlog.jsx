import React, { useEffect, useState } from 'react'
import { Query } from "appwrite";
import { databases } from './AppwriteEndpoints/endPoints';
import BlogCard from './BlogCard';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Delete } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function AllBlog() {
  const [blogPosts, setBlogPosts] = useState([])
    ;

  useEffect(() => {
    let promise = databases.listDocuments(import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_COLLECTION_ID, [
      Query.orderAsc("title"),
      Query.limit(10)
    ])
    promise.then((items) => {
      setBlogPosts(items.documents);
    }).catch((error) => {
      return error
    })
  })

  // deldocument
  const deleteDoc = async (documentId) => {
    try {
      const delEle = await databases.deleteDocument('651564c47ac5e91d9a54', '651564eb6728d0191b53', documentId)
      alert("Data deleted successfully...")
    }
    catch (error) {
      alert('Error updating blog post');
    }
  }


  return (
    <>
      <h1 style={{ padding: "1rem", margin: "0px 0px .2rem 2rem" }}>List of all blog</h1>

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

                  <hr />
                </>
              )
            })

          )
        }
      </Container>

    </>
  )
}

export default AllBlog