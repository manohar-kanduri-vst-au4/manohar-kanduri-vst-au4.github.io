import { Container } from "react-bootstrap";
import Particle from "./Particle";
import Card from "react-bootstrap/Card";

import { MdHome, MdPhone,MdEmail} from "react-icons/md";
function Contact(){
    return(
        <div >
             <Container fluid className="project-section">
                <Particle/>
                <Container style ={{fontSize:"20px",padding:"55px", color:"white"}}>
                <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
     
                <h1>Contact Details</h1>
                <hr style={{color:"white"}}/>
                <h4>Get in Touch with me to make something great together
                </h4> <br />
               <p>Available for Exciting Oppurtunities</p> 
                <br />
              <MdHome/>  Address   : 
              {' '} Krishnam Setti Palli Village, <br />
                         {' '}  Giddalur(Mndl), <br />
                          Prakasam(dist), <br />
                           Andhra Pradesh - 523357 <br />

                    <br />
                <MdPhone/> Phone: +91 9676021764 <br /> <br />
               <MdEmail/>  Email: manoharkanduri@gmail.com <br /> <br />

               </Card.Body>
    </Card>
        </Container>
        </Container>
        </div>
    )
}
export {Contact}