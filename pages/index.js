import {React, useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import Header from '../components/header'
import Footer from '../components/footer'
import AOS from 'aos'
import 'aos/dist/aos.css';
import UseAnimations from 'react-useanimations'
import download from 'react-useanimations/lib/download'
import FontAwesomeIcon from '@fortawesome/fontawesome-free'

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration : 2000,
    });
  }, []);

  return (
    <>
    <Header />
    <div className='relative black'>
      <div className='container center' id="file">

        <div className='img-container'>
          <a href='/'><img data-aos="fade-down" className='main-logo' src="/logo.png"/></a>
        </div>

        <div className='login-section'>
          <a href='/register'><div className='register-button'>Register</div></a>
          <a href='/login'><div className='login-button'>Login</div></a>
        </div>

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
      <div className='four-sections'>
          <Row>
            <Col md={3}>
                <div className='branding '>
                <i class="fa-solid fa-download fa-3x"></i>
                    <p>The most flexible way to transfer files.</p>
                </div>
            </Col>
            <Col md={3}>
            <div className='branding '>
                <i class="fa-solid fa-coins fa-3x"></i>
                    <p>It's free to use.</p>
                </div>
            </Col>
            <Col md={3}>
                <div className='branding '>
                  <i class="fa-solid fa-rocket fa-3x"></i>
                      <p>Way too fast, way too quick.</p>
                </div>
            </Col>
            <Col md={3}>
                <div className='branding '>
                <i class="fa-solid fa-globe fa-3x"></i>
                      <p>You can use it anywhere and anytime.</p>
                </div>
            </Col>

          </Row>
        </div>

        <div className='additional-info'>
          <h1 
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">Minimal and futuristic.</h1>
          <Row>
            <Col md={9}>
              <div className='first-info'>
              Emerging technologies, such as industrial robots, artificial intelligence, and machine learning, are advancing at a rapid pace. These developments can improve the speed, quality, and cost of goods and services, but they also displace large numbers of workers.
              </div>
            </Col>
            <Col md={3}>
              <div className='second-info'>
              Artificial intelligence (AI) is intelligence demonstrated by machines.
              </div>
            </Col>
          </Row>

          <Row className='no-padding'>
            <Col>
              <div className='mid-info' />
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <div className='last-info'>
              ENCX was founded in 2022, the simplest way to send big files.
              </div>
            </Col>
            <Col md={9}>
            <div className='ending-info'>
            As ENCX continues to evolve, creativity remains at the heart of everything we do. Because while not every idea will change the world, every world-changing idea has to start somewhere cost of goods and services, but they also displace large numbers of workers.
              </div>
            </Col>
          </Row>
          <div className='ending-title'>
              <div data-aos="fade-right" className='title'>I think that's enough. Shall we start sharing and transfering files?</div>
              <a href='#file'><div data-aos="fade-right" className='button'>Let's do it!</div></a>
          </div>
        </div>

      <Footer />

    </div>
    </>
  )
}
