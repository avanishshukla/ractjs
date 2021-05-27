
import React, { Component } from 'react';
const API='AIzaSyCrabFFe6a48icSTxTv9zUTRCxB2qyzElw' 
const channelId = 'UCkgY5iy0Y4SqQustDKlee7g' 
const result = 10;

//https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrabFFe6a48icSTxTv9zUTRCxB2qyzElw&channelId=UCkgY5iy0Y4SqQustDKlee7g&part=snippet,id&order=date&maxResults=10
// https://www.googleapis.com/youtube/v3/search?key=${AIzaSyCrabFFe6a48icSTxTv9zUTRCxB2qyzElw}&channelId=${UCkgY5iy0Y4SqQustDKlee7g}&part=snippet,id&order=date&maxResults=20

var AURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}` ;

//const resultyt=[];

class Youtube extends Component  {

constructor(props) {
super(props);

this.state = {
  eos:[]
};

//this.fucnx=this.fucnx.bind(this);
}


componentDidUpdate()
{ console.log("Hello Avanish");
  
fetch(AURL)
    .then((response) => response.json())
    .then((rjson) => {
            //console.log(rjson.items[2].id.videoId );
        //if(rjson.itemes) {
           const  eos =   rjson.items.map((obj,i)=>"https://www.youtube.com/embed/" +obj.id.videoId);
          //this.setState(resultyt,resultyt);
          //this.setState(resultyt);
         
        //}
         console.log(eos);    
         //this.setState({ list: [] });
         
         this.setState({eos});
     })
    .catch((error) => {
      console.error(error);
    });
 

    
}

render() {
console.log(AURL);  //this.state.resultyt.map((link,i)=> console.log(link) );


return ( 
<div>   


{ this.state.eos.map((link,i)=>


  {var frame = <div className="youtube"> <iframe key= {i} width="200" height="100" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> </div>   
  return frame ; } ) 

}


<div>

{this.frame }

</div>




     
     </div>

);


}


}


export default Youtube; 
