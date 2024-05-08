import React, { useState } from "react";
import { ID } from "appwrite";
import { databases } from "./AppwriteEndpoints/endPoints"
import { Button, Container, Form } from "react-bootstrap";


function CreateBlog() {
  // State to store the log message
  const createdDate = new Date().toISOString()
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
    const promise = await databases.createDocument(import.meta.env.VITE_APPWRITE_DATABASE_ID, import.meta.env.VITE_APPWRITE_COLLECTION_ID,
      ID.unique(),
      {
        title,
        content,
        auther
      }
    );
    const response = await promise.json()
    try {
      if (!response) {
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
      <Container style={{ display: "grid", justifyItems: "center", alignItems: "center", margin: "auto", marginTop: "4rem" }}>
        <h2>BLOG FORM</h2>
        <Form onSubmit={handleSubmit} style={{ width: "40rem", backgroundColor: "whitesmoke", padding: "4rem", boxShadow: "2rem black 2rem" }}>
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
            style={{ margin: "1rem 0 1rem 0" }}
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

          <Button style={{ margin: "1rem 0 0 0" }}>
            Add Blog
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CreateBlog;
