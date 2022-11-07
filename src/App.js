
import './App.css';

function App() {
  // function onLinkClick(){
  //   document.getElementById('myProfile').style.width='250px';
  // }
  
  return (
    <div>
    <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
    </div>
    <nav className="navbar">
        <div className="max-width">
            <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
            <ul className="menu">
                <li><a href="#home" className="menu-btn">Home</a></li>
                <li><a href="#about" className="menu-btn">About</a></li>
                <li><a href="#services" className="menu-btn">Project</a></li>
                <li><a href="#skills" className="menu-btn">Skills</a></li>
               
                <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Lettie Molapisi</div>
                <div className="text-3">And I'm a <span className="typing"></span></div>
               
            </div>
        </div>
    </section>

  
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    {/* <img src="images/profile-1.jpeg" alt=""> */}
                    <button className='openbtn'><img src='images/profile-1.jpeg' alt='#'/></button>
                </div>
                <div className="column right">
                    <div className="text"><span className="typing-2"></span></div>
                    <p> I would really love the opportunity to be part of Mobile Development & Web Development at SovTech. 
                        I want to gain more experience, learn more, develop soft skills and to be able to design, build and create apps. 
                  The skills of a perfect developer aren't only technical. Whether you're programming apps for the web or for smartphones, this career path offers exciting growth, 
                    success, and creative opportunities. Web and mobile app developers work to create the digital solutions we know and love.</p>
                    <a href="images/profile.pdf">Download CV</a>
                    <br/>
                
                    <a href="www.linkedin.com/in/lettie-molapisi-3b3954206"  target="_blank">My linkedin Profile</a>
                </div>
            </div>
        </div>
    </section>

   
    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">My Personal Project</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <i className="fas fa-gamepad"></i>
                        <div className="text">Snake game</div>
                      
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-question"></i>
                        <div className="text">Quiz game</div>
                        <p></p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-app-store"></i>
                        <div className="text">Apps</div>
                        <p></p>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </section>

  
    <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>Python</span>
                            <span>60%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>OOP</span>
                            <span>70%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Microsoft Word, Excel & Access</span>
                            <span>70%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>40%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Java</span>
                            <span>60%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MySQL</span>
                            <span>30%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    
    <section className="services" id="services">
    <div className="max-width">
            <h2 className="title">Awards & certificate</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <i className="fas fa-award"></i>
                        <div className="text">3rd PLACE <br/> Township SMME Development Hackathon</div>
                        <a href="https://drive.google.com/file/d/1iREyEbx79d4E9_2xyBwmXwr3Uj7cekb-/view?usp=sharing">SMME</a>
    
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-certificate"></i>
                        <div className="text">Global Healthcare Hackathon</div>
                        <a href="https://drive.google.com/file/d/1iUIqKWXBBCTzvKToG2nhBli1t1azSr6X/view?usp=sharing">Healthcare</a> 
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-certificate"></i>
                        <div className="text">Education Hackathon</div>
                        <a href="https://drive.google.com/file/d/1ia0xgMgEGYuMzTKAXNGjdHFPoPghBAC4/view?usp=sharing">Education</a>
                        
                    </div>
                </div>
               </div>
            </div>
      
    </section>

    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                   
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Lettie Molapisi</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Johannesburg, Gauteng, South Africa</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-phone"></i>
                            <div className="info">
                                <div className="head">Phone Number</div>
                                <div className="sub-title">063 4500 500</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">molapisilettie@gmail.com</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
               
              
            </div>
        </div>
    </section>
    
</div>
  );
}

export default App;
