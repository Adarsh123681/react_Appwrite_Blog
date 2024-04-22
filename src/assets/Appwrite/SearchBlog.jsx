import React, { useState } from 'react'
import { Client, Databases, Query } from "appwrite";
import { Form, Button, Container } from 'react-bootstrap';
import BlogCard from './BlogCard';

const client = new Client()
// const url = import.meta.env.VITE_APPWRITE_URL;
// const project = import.meta.env.VITE_APPWRITE_PROJECT_ID
// const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
// const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65111274195822fe60e6")


function SearchBlog() {
  const [searchData, setSearchData] = useState([])
  const databases = new Databases(client);
  const [searchTerm, setSearchTerm] = useState('');

  const search = async () => {
    const data = await databases.listDocuments('651564c47ac5e91d9a54', '651564eb6728d0191b53')

    if (data) {
      const filterData = data.documents.filter((element) => {
        return element.title.includes(`${searchTerm}`)

      })
      setSearchData(filterData)
    }
  }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <Container style={{ marginTop: "4rem" }}>
        <Form.Group controlId="search" style={{display:"flex" , justifyContent:"center" , margin:"1.5rem"}}>
          <Form.Control
            type="text"
            placeholder="Search posts"
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: "20rem" , margin:".5rem" }}
          />
          <Button onClick={search}>SearchResult</Button>
        </Form.Group>


        {
          searchData && searchData.map((ele) => {
            return (
              <>
                <BlogCard title={ele.title} img={ele.image} content={ele.content} auther={ele.auther} createdAt={ele.createdAt} />
              </>
            )
          })
        }
      </Container>
    </>
  )
}

export default SearchBlog