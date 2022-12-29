import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import "../Style.css";
import TimeLine from './TimeLine';
import Chart from  './HorizontalBarChart';
function Grid() {

  return (
    <Container>
      <Row className='px-4 my-5'>
        <Col sm={3}>
            <Image src='https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/244746824_936657300257975_3725600109831367437_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TwFvsHqonZwAX_mfdeT&_nc_ht=scontent.fhan2-5.fna&oh=00_AfDehHdn2348bD5Ay0peMcgi7M7yr-vaZ6J3uAyF4Fnr9w&oe=63AB4EA1' fluid rounded className=''/>
            
        </Col>
            
        <Col sm={9}>
            <h1 class='font-weigh-light text-center'><b> Anh Viet Doan</b>  </h1>
            <h3 class='font-weigh-light text-center'> Data Analyst </h3>
            <hr></hr>
            <p class = 'mt-4'>  
            <i>Dedicated Data Analyst with experience in identifying efficiencies and problem areas within data streams while communicating needs for projects. Adept at receiving and monitoring data from multiple data streams, including Access, SQL, and Excel data sources. Ability to synthesize quantitative information and interact effectively with colleagues and clients. Proven track record of generating summary documents for senior management for monthly and quarterly audit and compliance reporting.</i>
          
            </p>
        </Col>
      </Row>

      <Row>
        <Card className='text-center my-5 py-4 bg-dark text-white'>
            <Card.Title >
               <h3>  Project  </h3>
            </Card.Title>
        </Card>
      </Row>

      <Row>
        <Col sm= {4}>
            <Card>
            <Card.Img variant="top" fluid src="https://i.pinimg.com/564x/a5/bd/45/a5bd4543136ceb46832af6bd37bbf9a9.jpg" className='card-img-top' />
            <Card.Body>
                <Card.Text>
                <h3>Show Me the Data Structures</h3>
                
                </Card.Text>
                <Card.Text>
                
                • A guided project in Udacity’s Data Structures and Algorithms Nanodegree Program.
                </Card.Text>


                <Card.Text>
                • Learnt to find files under a directory using recursion, and to construct a
                blockchain implementation using linked lists and hashing.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>

        <Col sm= {4}>
            <Card>
            <Card.Img variant="top" fluid src="https://i.pinimg.com/564x/f9/bc/85/f9bc85332ce74f6063c1da3e3fd4d1d1.jpg" className='card-img-top'  />
            <Card.Body>
                <Card.Text>
                <h3>Music Web Application</h3>
                
                </Card.Text>
                <Card.Text>
                
                • Developed an indie music web application using HTML, CSS, and JavaScript.
                </Card.Text>


                <Card.Text>
                • Participated in a energertic environment, learnt from great mentors and presented about the project during hackathon.

                </Card.Text>
            </Card.Body>
            </Card>
        </Col>

        <Col sm= {4}>
            <Card>
            <Card.Img variant="top" fluid src="https://i.pinimg.com/564x/7d/60/c1/7d60c1808891558d1eaf9d9af3dbb1c3.jpg" className='card-img-top' />
            <Card.Body>
                <Card.Text>
                <h3>Logistic Regression</h3>
                
                </Card.Text>
                <Card.Text>
                
                • A guided project in Neural Networks and Deep Learning course offered by DeepLearning.AI.
                </Card.Text>


                <Card.Text>
                • Learnt how to implement logistic regression, how to use gradient descent and how a neural network works. 
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
      </Row>
      <Row>
        <Card className='text-center my-5 py-4 bg-dark text-white'>
            <Card.Title >
                <h3> Data Analyst's Skill</h3>
            </Card.Title>
        </Card>
      </Row>
    
    <Row>
    
    <Chart/>
    </Row>


    <Row> 
    <Card className='text-center my-5 py-4 bg-dark text-white'>
            <Card.Title >
                <h3> Work experience & Education</h3>
            </Card.Title>
        </Card>
    </Row>

    <Row>
        <TimeLine/>
    </Row>
    </Container>
  );
}

export default Grid;