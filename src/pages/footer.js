import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import youicon from './youtubex.jpg';
import flogo from './sitelogof.png'
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
    <div>
          
         
   

          <Container>
  <Row   style={{backgroundColor: 'lightblue'                 }}      >
   
    
    
    
    
    
    
    
    <Col sm={4} lg={12} md={12}    style={{backgroundColor: '#b9ecf0', height: '100px' ,display: 'flex',justifyContent: 'Center',
		alignItems: 'Center',
	}}   >
         
    < FacebookShareButton    url={'https://www.facebook.com/'}  title={'fallow'}  >  
          
                 
          <FacebookIcon size={32} round={true} />  </ FacebookShareButton> &nbsp;&nbsp;
   
          < WhatsappShareButton    url={'https://web.whatsapp.com'}  title={'fallow'}  > 
          
                 
          <WhatsappIcon size={32} round={true} />  </ WhatsappShareButton> 
          < TwitterShareButton    url={'https://twitter.com/'}  title={'fallow'}  >  &nbsp; &nbsp;
          
                 
          <TwitterIcon size={32} round={true} />  </ TwitterShareButton> 
          < LinkedinShareButton   url={''}  title={'fallow'}  >  &nbsp; &nbsp;
          
                 
          <LinkedinIcon size={32} round={true} />  </LinkedinShareButton> 
    
          
         
    
    
    
    </Col>
    <Col sm={4} lg={12} md={12}  style={{backgroundColor: 'white', height: '100px', display: 'flex',justifyContent: 'Center' ,	alignItems: 'Center'}} > 
    
    <a  href={'https://www.youtube.com/channel/UCkgY5iy0Y4SqQustDKlee7g/videos'}  >   <img src={youicon} alt=""/> fallow us on Youtube for helpful videos </a> </Col>





    <Col sm={4} lg={12} md={12}  style={{backgroundColor: '#b9ecf0', height: '90px', display: 'flex',justifyContent: 'Center' ,	alignItems: 'Center' }}  > <img src={flogo} alt=""/>     </Col>
    
  <Col    sm={4} lg={12} md={12}  style={{backgroundColor: '#b9ecf0', height: '30px',    display: 'flex',justifyContent: 'Center' ,	alignItems: 'Center' }}  >    Copyright : Tan Ki Bat Dr. Agrwal Ke Sath  </Col>

  </Row>
</Container>
          
          
          
          
          
          
          
          
          
      </div>
  
  );
}

export default FooterPage;