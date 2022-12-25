import React from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

 function TimeLine() {
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#F0F2F5" }}>
      <div className="main-timeline">
        <div className="timeline left">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2022</h3>
              <p className="mb-0">
                    <h5> <b> Data Scientist Intern at Fathem AI</b> </h5>
                    <li>
                    Analysed consumer purchase behaviour for a leader in global electronics

                    </li>
                    <li>
                    Hybrid working from home, Surry Hills office and Olympic Park office
                    </li>
                    <li>
                    Initial 12 month contract with a view to permanent
                    </li>
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline right">
          <MDBCard>
            <MDBCardBody className="p-4">
            <h3>2021</h3>
              <p className="mb-0">
              <h5> <b> Data Analyst Intern at OCB Banks </b> </h5>
                <li>Performed an analysis of the content, semantics, structures and regulations of data sources objects involved in project</li>
                <li>Interacted with the Bank‘s specialists on extractions (Bank: ETL (Extraction)) and, if necessary, with the Bank‘s system architect (Bank: System Expert).</li>
                <li>Mapped existing source data to BDW model, provide input to Business Glossary and Metadata catalog</li>
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline left">
          <MDBCard>
            <MDBCardBody className="p-4">
              <h3>2021</h3>
              <p className="mb-0">
                    <h5> <b> Freshman at SP Jain Global of Management </b></h5>
                    <li>
                    Recieved 85% tuition scholarship 
                    </li>
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        </div>
        
     
    </MDBContainer>
  );
}
export default TimeLine;