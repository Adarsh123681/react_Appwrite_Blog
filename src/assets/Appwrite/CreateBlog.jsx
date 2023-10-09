import React, { useState } from "react";
import { Client, Databases, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65111274195822fe60e6");
function CreateBlog() {
  // State to store the log message
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const [auther, setAuther] = useState("")

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const databases = new Databases(client);
    const promise = databases.createDocument(
      "651564c47ac5e91d9a54",
      "651564eb6728d0191b53",
      ID.unique(),
      {
        title,
        content,
        auther
      }
    );
    promise.then(
      function (response) {
        setContent(response.content);
        console.log(response);
      },
      function (error) {
        console.log(error);
        setContent("");
        setTitle(""); 
        setAuther("")
      }
    );
  };
  return (
    <>
      <h2>BLog Form</h2>
      <div
        style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "30rem",
            height: "30rem",
            border: "1px solid black",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "center",

          }}
        >
          <div style={{ marginLeft: "3.8rem" }}>
            <input
              style={{ marginBottom: "1rem" }}
              type="text"
              name="title"
              value={title}
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your Title"
            />
            <input
              style={{ marginBottom: "1rem" }}
              type="text"
              name="auther"
              value={auther}
              id="auther"
              onChange={(e) => setAuther(e.target.value)}
              placeholder="Enter your Name"
            />
            <textarea
              style={{ width: "21rem", height: "10rem" }}
              id="logMessage"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              placeholder="Enter your content...."
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>{" "}
    </>
  );
}

export default CreateBlog;
