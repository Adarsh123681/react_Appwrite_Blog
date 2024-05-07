import React, { useState } from "react";
import { Client, Databases, ID } from "appwrite";
import { Button, Container, Form } from "react-bootstrap";
// import { collectionId, databaseId, url, project } from "./Appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65111274195822fe60e6")

function CreateBlog() {
  // State to store the log message
  const createdDate = new Date().toISOString()
  console.log(createdDate)
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [auther, setAuther] = useState("")

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAutherChange = (event) => {
    setAuther(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const databases = new Databases(client);
    const promise = await databases.createDocument(
      '651564c47ac5e91d9a54', '651564eb6728d0191b53',
      ID.unique(),
      {
        title,
        content,
        auther
      }
    );
    const response = await promise.json()
    try {
      if (response == "") {
        alert("no reponse , fill all details")
      }
      else {
        setContent(response.content);
        alert("Successfully submitted...")
        setContent("");
        setTitle("");
        setAuther("")
      }
    } catch (error) {
        alert("INTERNAL ERROR...")
    }
  };
  return (
    <>
      <Container style={{ display: "grid", justifyItems: "center", alignItems: "center", margin: "5rem 0 0 0" }}>
        <h2>BLOG FORM</h2>
        <Form onSubmit={handleSubmit} style={{ width: "40rem", backgroundColor: "whitesmoke", padding: "4rem", boxShadow: "2rem black" }}>
          <Form.Control
            label="Title"
            fullWidth
            value={title}
            onChange={handleTitleChange}
            variant="outlined"
            margin="normal"
            placeholder="Enter title"
          />
          <Form.Control
            label="Auther"
            fullWidth
            value={auther}
            onChange={handleAutherChange}
            variant="outlined"
            margin="normal"
            placeholder="Enter Auther"
            style={{margin:"1rem 0 1rem o"}}
          />
          <Form.Control
            tabel="Content"
            fullWidth
            value={content}
            onChange={handleContentChange}
            variant="outlined"
            margin="normal"
            placeholder="Enter content"
          />

          <Button style={{ margin:"1rem 0 0 0" }}>
            Add Blog
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CreateBlog;
