import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Container from 'react-bootstrap/Container';
import {
  
  FacebookShareButton,
  
   
  LinkedinShareButton,
  
  TwitterShareButton,
 
  WhatsappShareButton,
 
} from "react-share";
import {
 
  FacebookIcon,

  
  
  LinkedinIcon,
 
  
  TwitterIcon,
 
  WhatsappIcon,
  
} from "react-share";














const FooterPage = () => {
  return (
    <div    style={{backgroundColor: 'lightblue', height: '300px'}}>
          
         
   

          <Container>
  <Row>
    <Col sm={4} lg={12} md={12}  >First, but last</Col>
    <Col sm={4} lg={12} md={12}  >
    
    < FacebookShareButton    url={''}  title={'fallow'}  >  
          
                 
          <FacebookIcon size={32} round={true} />  </ FacebookShareButton> 
    
          < WhatsappShareButton    url={''}  title={'fallow'}  >  
          
                 
          <WhatsappIcon size={32} round={true} />  </ WhatsappShareButton> 
          < TwitterShareButton    url={'https://twitter.com/'}  title={'fallow'}  >  
          
                 
          <TwitterIcon size={32} round={true} />  </ TwitterShareButton> 
          < LinkedinShareButton   url={''}  title={'fallow'}  >  
          
                 
          <LinkedinIcon size={32} round={true} />  </LinkedinShareButton> 
    
          
         
    
    
    
    </Col>
    <Col sm={4} lg={12} md={12}  >Third, but first</Col>
  </Row>
</Container>
          
          
          
          
          
          
          
          
          
      </div>
  
  );
}

export default FooterPage;