import {React, useEffect, useState} from 'react'
import {Row, Col, Offcanvas, Nav, Tab} from 'react-bootstrap'
import Header from '../components/header'
import Footer from '../components/footer'
import AOS from 'aos'
import 'aos/dist/aos.css';
import UseAnimations from 'react-useanimations'
import download from 'react-useanimations/lib/download'
import FontAwesomeIcon from '@fortawesome/fontawesome-free'
import { Menu, Dropdown, Button, Space } from 'antd';

export default function Logged() {

    useEffect(() => {
        AOS.init({
          duration : 2000,
        });
      }, []);


      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      return (
        <>
        <Header />
        <div className='relative black'>
          <div className='container center' id="file">
    
            <div className='img-container'>
              <a href='/logged'><img data-aos="fade-down" className='main-logo' src="/logo.png"/></a>
            </div>
            
                <div className='login-section'>
                    <div className='register-button' onClick={handleShow}>Gantug Batgerel</div>
                </div>
                <Offcanvas show={show} placement='end' onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Gantug Batgerel</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col md={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                    <div className='transfers'>
                                            <div className='title'>Shared files</div>
                                            <div className='date'>April 2022</div>
                                            <div className='box'>
                                                <div className='file-name'>Gantug's file.docx</div>
                                                <div className='file-details'>
                                                    <div>1 file</div>
                                                    <div>2.6 MB</div>
                                                    <div>4 April 2022</div>
                                                </div>
                                                <div className='file-modules'>
                                                    <div>Download</div>
                                                    <div>Copy</div>
                                                    <div>Edit</div>
                                                    <div>Update</div>
                                                    <div>Delete</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className='security'>
                                            <div className='title'>Password and Security</div>
                                            <div className='desc'>
                                                Need a little (password) change? We got you. Just hit the button below and we’ll send an email to flaptoxd@gmail.com with a link to change your password.
                                            </div>

                                        <div className='send-email'>Send email</div>

                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>

                                </Col>
                                <Col md={4}>

                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Shared files</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Password and security</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                    <a href="/"><div className='logout'>Logout</div></a>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Offcanvas.Body>
                </Offcanvas>

    
            <div className='file-section'>
                <Row>
                  <Col md={6}>
                      <div data-aos="fade-right" className='file-upload'>
                          <div className='file-container'>
                          <input type='file'></input>
                          <i class="fa-solid fa-download fa-5x"></i>
                            <div className='caption'>
                              <div className='file-description'>Please, upload your file.</div>
                              <div className='file-storage'>Maximum file size is 2GB 👀</div>
                              <div className='file-duration'>Your URL link is available for 7 days.</div>
                            </div>
                          </div>
                      </div>
                  </Col>
                  <Col md={6}>
                      <div data-aos="fade-left" className='text-section'>
                          <div className='texts'>
                            Upload anything <span className='text-aqua-blue'>you want</span> and it is <span className='text-red-brand'>the easiest</span> and <span className='text-pink-brand'>prettiest way to file transfer.</span>
                          </div>
                      </div>
                  </Col>
                </Row>
            </div>
            </div>
            </div>
        </>
        )
}