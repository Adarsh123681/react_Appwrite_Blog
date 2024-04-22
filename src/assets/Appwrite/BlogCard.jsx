import React, { useState } from 'react';  
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const BlogCard = ({ title, img, content, auther}) => {
  const [showMore, setShowMore] = useState(false)
  const showContent = async () => {
    setShowMore(!showMore)
  }

  const limitContent = content.slice(0, 150)
  return (
    
       <Card.Body style={{width:"50", margin : "auto" , padding:"4px" , backgroundColor : "whitesmoke"}}>
    <Card.Title style={{fontWeight:"bold" , fontFamily:"monospace" , fontSize:"1.5rem"}}> {title} </Card.Title>
    <Card.Text>
       {auther}
    </Card.Text>
     
            {
              showMore ? (
                <>
                  {content}
                  <Link variant="secondary" onClick={showContent} sx={{ margin: 0 }}>Read Less</Link>
                </>
              ) : (
                <>
                  {limitContent}...
                  {
                    content.length > 150 && (
                      <Link onClick={showContent}>Read More</Link>
                    )
                  }
                  
                </>
              )
            }
             
          </Card.Body>
    
  );
};
export default BlogCard;


 

// function WithHeaderStyledExample() {
//   return (
//     <Card>
//       <Card.Header as="h5">Featured</Card.Header>
      
//     </Card>
//   );
// }

// export default WithHeaderStyledExample;