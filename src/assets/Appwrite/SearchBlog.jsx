import React, { useState } from 'react'
import { databases} from "./AppwriteEndpoints/endPoints";
import { Form, Button, Container } from 'react-bootstrap';
import BlogCard from './BlogCard';
 
// const url = import.meta.env.VITE_APPWRITE_URL;
// const project = import.meta.env.VITE_APPWRITE_PROJECT_ID
// const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
// const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID 

function SearchBlog() {
  const [searchData, setSearchData] = useState([])
  
  const [searchTerm, setSearchTerm] = useState('');

  const search = async () => {
    const data = await databases.listDocuments(import.meta.env.VITE_APPWRITE_DATABASE_ID
      , import.meta.env.VITE_APPWRITE_COLLECTION_ID
    )

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
        <Form.Group controlId="search" style={{ display: "flex", justifyContent: "center", margin: "1.5rem" }}>
          <Form.Control
            type="text"
            placeholder="Search posts"
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: "20rem", margin: ".5rem" }}
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