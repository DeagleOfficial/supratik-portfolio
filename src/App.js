import React from 'react'
import './App.css'
import { FaVolumeUp, FaGithub, FaLinkedinIn, FaEnvelope, FaFacebookF, FaHackerrank, FaEye, FaChevronLeft, FaChevronRight, FaBorderNone, FaTimesCircle } from 'react-icons/fa'
import mp3_file from './name.mp3'
import Particles from 'react-particles-js';
import Popup from 'reactjs-popup';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            landingpage: true,
            myprojects: true,
            awards: true,
            aboutme: true,
            resume: true,
            popupstate: false
        }
    }

    playAudio = (e) => {
        console.log("ok")
        let audio = document.getElementById("audioEl")
        audio.play()
    }

    // closePopup = (e) => {
    //     console.log(this.state.popupstate)
    //     this.setState({popupstate: false})
    // }

    render() {

        let landingdiv =  {
            padding: "30px",
            paddingBottom: "0px",
            display: "flex", 
            flexDirection: "column",
            minHeight: "100vh",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "center",
            justifyContent: "center",
            backgroundColor: "#343363",
            color: "white",
        }
        
        let myprojects = {
            padding: "30px",
            paddingTop: "0px",
            minHeight: "100vh",
            backgroundColor: "#343363",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }

        return (
            <>
            <div id = "wrapper">
                <Particles 
                    style = {{position: "fixed"}}
                    params = {{
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "grab",
                                }
                            }
                        },
                        particles: {
                            number: {
                                value: 15
                            },
                        }
                    }}
                />

                { this.state.landingpage && <div id = "landingpage-div" style = {landingdiv} onKeyPress = {this.handlekeyPress}>
                    <h1><span style = {{color: "#f5b642"}}>Hello</span> <span style = {{color: "#34eb71"}}>World</span>, I am &nbsp;<span id = "audio"><FaVolumeUp onClick = {this.playAudio}/></span>&nbsp; Supratik Chakraborty</h1>
                        <p>Data Science ethusiast | Competitive Programmer | Frontend Developer</p><br></br>
                        <p>I'm a twenty year old Undergraduate Computer Science Student with nerdish tendancies.<br></br>I'm driven to find and implement solutions to existing and prospective real-world problems, without compromising the end-user experience.<br></br>You may also occassionally find me developing Web applications, contributing to Open source, <br></br>and of course, learning something new everyday.</p>
                        {/* <h3><FaAngleDoubleLeft style = {{verticalAlign: "middle", marginBottom: "5px"}}/> Slide to Learn more</h3> */}
                        <audio id = "audioEl">
                            <source src = {mp3_file}></source>
                        </audio>
                        <div className = "social" style = {{position: "relative", zIndex: "2"}}>
                            <a href = "https://github.com/DeagleOfficial" target = "_blank"><FaGithub size = "40" className = "icon"/></a>
                            <a href = "https://www.linkedin.com/in/supratik-chakraborty/" target = "_blank"><FaLinkedinIn size = "40" className = "icon" /></a>
                            <a href = "https://www.hackerrank.com/deagle5" target = "_blank"><FaHackerrank size = "35" className = "icon" /></a>
                            <a href = "mailto:supratikofficial1@gmail.com" target = "_blank"><FaEnvelope size = "40" className = "icon"/></a>
                            <a href = "https://www.facebook.com/profile.php?id=100010161426258" target = "_blank"><FaFacebookF size = "35" className = "icon" /></a>
                        </div>
                        {/* <a href = "#projects">try</a> */}
                </div>}
                
                { this.state.myprojects && <div id = "projects" style = {myprojects}>
                    <h1 style = {{marginBottom: "30px"}} ><span style = {{color: "#f5b642"}}>My</span> <span style = {{color: "#34eb71"}}>Projects</span></h1>
                    <div className = "row">
                        <div className = "col-lg-4 col-md-6 col-sm-12 project" >
                            <img src = "nn.jpg" style = {{borderRadius: "100%", border: "3px solid white", width: "150px"}}></img>
                            <h4 style = {{color: "#fff8c2"}}><b>Skin Cancer Detection and Lesion Classification</b></h4>
                            <p style = {{color: "white"}}>A Full Stack Web Application with Multi-Convolutional Neural Networks for Detection of Skin Cancer and Classification of Skin Lesions</p>
                            <Popup id = "popup" open = {this.state.popupstate} className = "modal" trigger={<button className="button" id = "learnmore"> Learn more </button>} modal>
                                <span id = "modal-content" style = {{
                                    display: "flex", 
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center"
                                }}> 
                                    <h4><b>Skin Cancer Detection and Lesion Classification</b></h4><br></br>
                                    <p>A Full Stack Web Application for Detection of Skin Cancer and Classification of Skin Lesions. I worked with a Team of Developers at University to develop a Multi-Convolutional Neural Network model based on ResNet50 (Residual Network with 50 Layers) and DenseNet169 (Densely Connected Convolutional Network) architectures. The system was deployed on a Flask server with a React JS Frontend with ConvNets running on the Server-side. The user uploads an image of their Skin Anomaly from their Smartphone or Tablet or PC, the ConvNets process the image, run a Prediction and send back the Information to the client, along with Additional Smart Features such as Appropriate recommendations of Dermatologists with their contact information based on the User's Geographical Location.</p>
                                    <br />
                                    <div style = {{display: "flex", justifyContent: "space-between"}}>
                                        <a href = "https://github.com/DeagleOfficial/dermado-app.git" target = "_blank"><b>Github</b></a>
                                        <a href = "https://drive.google.com/u/0/uc?id=1sN1yQ2jVLBSRv1l_twLVSnk-LuI5LaWx&export=download" target = "_blank"><b>Presentation</b></a>
                                        <a href = "https://youtu.be/Kpc_top8Dz0" target = "_blank"><b>Video demo</b></a>
                                    </div>
                                    {/* <div style = {{position: "absolute", top: "10px", right: "10px"}}>
                                        <a onClick = {this.closePopup}><FaTimesCircle size = "20"/></a>
                                    </div> */}
                                </span>
                            </Popup>
                        </div>
                        <div className = "col-lg-4 col-md-6 col-sm-12 project">
                            <img src = "pc.jpg" style = {{borderRadius: "100%", border: "3px solid white", width: "150px"}}></img>
                            <h4 style = {{color: "#fff8c2"}}><b>Prostate Cancer Classification with Supervised Learning</b></h4>
                            <p style = {{color: "white"}}>Developed a 92% accurate Supervised Learning model using K Nearest Neighbors algorithm and Scikit-Learn library</p>
                            <Popup id = "popup" open = {this.state.popupstate} className = "modal" trigger={<button className="button" id = "learnmore"> Learn more </button>} modal>
                                <span id = "modal-content" style = {{
                                    display: "flex", 
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center"
                                }}> 
                                    <h4><b>Prostate Cancer Classification with Supervised Learning</b></h4><br></br>
                                    <p>Developed a Supervised Learning Model using the KNN (K Nearest Neighbours) algorithm and implemented the approach using Python and the Scikit-Learn library. The Dataset used contains 8 labelled fields describing the Patient's medical parameters and 1 Binary Target field. The Dataset was split into 75% Training Data and 25% Testing Data. The model was trained with K values ranging from 1 to 50. The best results were found with a K value of 5 Nearest Neighbours yielding a Train accuracy of 92% and Testing accuracy of 88%.</p>
                                    <br />
                                    <div style = {{display: "flex", justifyContent: "space-between"}}>
                                        <a href = "https://github.com/DeagleOfficial/prostatecancer.git" target = "_blank"><b>Github</b></a>
                                        <a href = "https://drive.google.com/file/d/14I50pTrQibaLxGjFBPk_Bu2LwCzGN-L9/view?usp=sharing" target = "_blank"><b>Dataset</b></a>
                                        <a href = "https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm" target = "_blank"><b>Algorithm</b></a>
                                    </div>
                                    {/* <div style = {{position: "absolute", top: "10px", right: "10px"}}>
                                        <a onClick = {this.closePopup}><FaTimesCircle size = "20"/></a>
                                    </div> */}
                                </span>
                            </Popup>
                        </div>
                        <div className = "col-lg-4 col-md-6 col-sm-12 project">
                            <img src = "av.png" style = {{borderRadius: "100%", border: "3px solid white", width: "150px"}}></img>
                            <h4 style = {{color: "#fff8c2"}}><b>Visualisation of Algorithm flow with Sorting algorithms using p5 JS</b></h4>
                            <p style = {{color: "white"}}>Developed visualized implementations of common sorting algorithms using a JavaScript Library called p5 JS</p>
                            <Popup id = "popup" open = {this.state.popupstate} className = "modal" trigger={<button className="button" id = "learnmore"> Learn more </button>} modal>
                                <span id = "modal-content" style = {{
                                    display: "flex", 
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center"
                                }}> 
                                    <h4><b>Visualisation of Algorithm flow with Sorting algorithms using p5 JS</b></h4><br></br>
                                    <p>While attending my Data Structures & Algorithms class, I figured if I could see the algorithm mechanishm unfold in front of me, it would make it much simpler to fathom, not to mention how cool it would look, of course. I tinkered around on a JavaScript Canvas using a JS Library called p5 JS and developed an implementation of common Sorting Algorithms. On every Execution, the program generates Vertical lines having pseudo-random varying heights. The Algorithm then kicks in and sorts the lines based on their heights. With every Swap in the Algorithm, the lines are re-rendered on the screen at their modified location, until all the lines are in sorted order.</p>
                                    <br />
                                    <div style = {{display: "flex", justifyContent: "space-between"}}>
                                        <a href = "https://github.com/DeagleOfficial/sorting-visualizer.git" target = "_blank"><b>Github</b></a>
                                        <a href = "https://editor.p5js.org/DeagleOfficial/sketches/w6xMHDUCs" target = "_blank"><b>Try it out</b></a>
                                    </div>
                                    {/* <div style = {{position: "absolute", top: "10px", right: "10px"}}>
                                        <a onClick = {this.closePopup}><FaTimesCircle size = "20"/></a>
                                    </div> */}
                                </span>
                            </Popup>
                        </div>
                        <div className = "col-lg-4 col-md-6 col-sm-12 project">
                            <img src = "wa.jpg" style = {{borderRadius: "100%", border: "3px solid white", width: "150px"}}></img>
                            <h4 style = {{color: "#fff8c2"}}><b>Weather Web Application with Open Source APIs</b></h4>
                            <p style = {{color: "white"}}>Developed a Weather Web Application in React JS using the OpenWeatherMap API with responsive UX elements</p>
                            <Popup id = "popup" open = {this.state.popupstate} className = "modal" trigger={<button className="button" id = "learnmore"> Learn more </button>} modal>
                                <span id = "modal-content" style = {{
                                    display: "flex", 
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center"
                                }}> 
                                    <h4><b>Weather Web Application with Open Source APIs</b></h4><br></br>
                                    <p>Developed a Weather Web Application in React JS using the OpenWeatherMap API. Implemented support for City-based search and Geolocation at the User's discretion. Experimented with Modern minimalist UX elements and Incorporated Bootstrap 4 for a responsive design.</p>
                                    <br />
                                    <div style = {{display: "flex", justifyContent: "space-between"}}>
                                        <a href = "https://github.com/DeagleOfficial/ambience-weather-app.git" target = "_blank"><b>Github</b></a>
                                        <a href = "https://ambience-weather-app.web.app/" target = "_blank"><b>Try it out</b></a>
                                    </div>
                                    {/* <div style = {{position: "absolute", top: "10px", right: "10px"}}>
                                        <a onClick = {this.closePopup}><FaTimesCircle size = "20"/></a>
                                    </div> */}
                                </span>
                            </Popup>
                        </div>
                        <div className = "col-lg-4 col-md-6 col-sm-12 project">
                            <img src = "wm.jpg" style = {{borderRadius: "100%", border: "3px solid white", width: "150px"}}></img>
                            <h4 style = {{color: "#fff8c2"}}><b>IoT-based Warmable Paitent Mattress with Arduino</b></h4>
                            <p style = {{color: "white"}}>Built an Arduino-operated Warm Patient Mattress to be used safely in presence of the magnetic scanning machines</p>
                            <Popup id = "popup" open = {this.state.popupstate} className = "modal" trigger={<button className="button" id = "learnmore"> Learn more </button>} modal>
                                <span id = "modal-content" style = {{
                                    display: "flex", 
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center"
                                }}> 
                                    <h4><b>IoT-based Warmable Paitent Mattress with Arduino</b></h4><br></br>
                                    <p>Built an Arduino-operated Warm Patient Mattress which could be used in
                presence of the magnetic scanning machines, without hindering their operation. An inductor coil in the control box is triggered by providing an input to the
                Arduino through the LCD screen to heat up the water flowing in the tubes. A pump is used to circulate the water through the tubes, thereby supplying the
                heat to the mattress and subsequently warming up the patient. The materials of
                the equipment were selected to provide maximum efficiency.</p>
                                    <br />
                                    <div style = {{display: "flex", justifyContent: "space-between"}}>
                                        <a href = "https://drive.google.com/file/d/1bBnnZwn-Z067pYc-fAfkDAeAzAj8gXJV/view?usp=sharing" target = "_blank"><b>Presentation</b></a>
                                    </div>
                                    {/* <div style = {{position: "absolute", top: "10px", right: "10px"}}>
                                        <a onClick = {this.closePopup}><FaTimesCircle size = "20"/></a>
                                    </div> */}
                                </span>
                            </Popup>
                        </div>
                        <div className = "col-lg-4 col-md-6 col-sm-12 project">
                            <img src = "bm.jpg" style = {{borderRadius: "100%", border: "3px solid white", width: "150px"}}></img>
                            <h4 style = {{color: "#fff8c2"}}><b>Bookstore Management System with Java and JXL API</b></h4>
                            <p style = {{color: "white"}}>Wrote and deloyed a Bookstore Management CLI using Java and JXL API for my High School Computer Applications project</p>
                            <Popup id = "popup" open = {this.state.popupstate} className = "modal" trigger={<button className="button" id = "learnmore"> Learn more </button>} modal>
                                <span id = "modal-content" style = {{
                                    display: "flex", 
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center"
                                }}> 
                                    <h4><b>Bookstore Management System with Java and JXL API</b></h4><br></br>
                                    <p>As a part of my High School ICSE Computer Applications Project, I wrote and deloyed a Bookstore Management CLI using Java. I used an Excel Database and accessed it using the JXL API. Added functionalities such as Adding a new book to the Database, removing a book from the Database when it's bought, and fetching information about a book when requested.</p>
                                    <br />
                                    <div style = {{display: "flex", justifyContent: "space-between"}}>
                                        <a href = "https://github.com/DeagleOfficial/bookstore-manager.git" target = "_blank"><b>GitHub</b></a>
                                    </div>
                                    {/* <div style = {{position: "absolute", top: "10px", right: "10px"}}>
                                        <a onClick = {this.closePopup}><FaTimesCircle size = "20"/></a>
                                    </div> */}
                                </span>
                            </Popup>
                        </div>
                    </div>
                </div>}

                {this.state.awards && <div id = "awards" style = {myprojects}> 
                    <h1 style = {{marginBottom: "30px", textAlign: "center"}} ><span style = {{color: "#f5b642"}}>Awards</span><span style = {{color: "#b5bdbc"}}> & </span> <span style = {{color: "#34eb71"}}>Achievements</span></h1>
                    <div className = "row">
                        <div className = "col-lg-4 col-md-6 col-sm-12 project" >
                            <img src = "award.png" style = {{borderRadius: "100%", border: "3px solid white", width: "150px", color: "grey"}}></img>
                            <h4 style = {{color: "#fff8c2"}}><b>Young Innovator Award for Hack For India 2020</b></h4>
                            <p style = {{color: "white"}}>Prototyped an IoT solution for a Warmable patient mattress with Arduino which won the Young Innovator Award at Hack For India 2020</p>
                            <a href = "https://drive.google.com/file/d/11FLBrTbXiQQlGU5y8kT7ZjlrGJihtRIx/view?usp=sharing" target = "_blank">See Credential</a>
                        </div>
                        <div className = "col-lg-4 col-md-6 col-sm-12 project" >
                            <img src = "award.png" style = {{borderRadius: "100%", border: "3px solid white", width: "150px", color: "grey"}}></img>
                            <h4 style = {{color: "#fff8c2"}}><b>International Finalist for ABGI Digital HealthTech Grand Challenge</b></h4>
                            <p style = {{color: "white"}}>Built a Full Stack solution for Skin Cancer Detection and Lesion Classification which made it to the finals of ABGI Digital HealthTech Grand Challenge</p>
                            <a href = "https://drive.google.com/file/d/1ZnhEi6COSs1KWLgMheuYk9UyP6Xf0l3-/view?usp=sharing" target = "_blank">See Credential</a>
                        </div>
                        <div className = "col-lg-4 col-md-6 col-sm-12 project" >
                            <img src = "award.png" style = {{borderRadius: "100%", border: "3px solid white", width: "150px", color: "grey"}}></img>
                            <h4 style = {{color: "#fff8c2"}}><b>Featured in Top 10 for B-Plan Event at Telos 2020</b></h4>
                            <p style = {{color: "white"}}>Pitched a Smart Self defence solution to prevent Sexual violence against Women which made the Top 10 for B-Plan at Telos 2020</p>
                            <a href = "https://drive.google.com/file/d/1KwBaTl-PBHLAG-S0T2aYdzsL7xZqd-zC/view?usp=sharing" target = "_blank">See Credential</a>
                        </div>
                        <div className = "col-lg-6 col-md-6 col-sm-12 project" >
                            <img src = "award.png" style = {{borderRadius: "100%", border: "3px solid white", width: "150px", color: "grey"}}></img>
                            <h4 style = {{color: "#fff8c2"}}><b>Third place at Papyrus - Instruo 2019, IISET Shibpur</b></h4>
                            <p style = {{color: "white"}}>Proposed an IoT-based Water Conservation Solution which bagged Third place at Papyrus for IISET Shibpur's Project Idea Competition, Instruo 2019</p>
                            <a href = "https://drive.google.com/file/d/118f70p01JDSgfqMz4NGb7u3yK8CA6fl5/view?usp=sharing" target = "_blank">See Credential</a>
                        </div>
                        <div className = "col-lg-6 col-md-6 col-sm-12 project">
                            <img src = "award.png" style = {{borderRadius: "100%", border: "3px solid white", width: "150px", color: "grey"}}></img>
                            <h4 style = {{color: "#fff8c2"}}><b>Featured in Top 10 Project Ideas at Exorsa 2019</b></h4>
                            <p style = {{color: "white"}}>Made an Environmentally Sustainable Smart Cities Solution which featured in the Top 10 Project Ideas bagging the 5th Rank for Exorsa 2019</p>
                            <a href = "https://drive.google.com/file/d/1135VlxBw3V7yxzNFBRixbFtlvHuOG_kx/view?usp=sharing" target = "_blank">See Credential</a>
                        </div>
                        
                    </div>
                </div>}

                { this.state.aboutme && <div id = "projects" style = {myprojects}> 
                    <h1 style = {{marginBottom: "30px", textAlign: "center"}} ><span style = {{color: "#b5bdbc"}}>A little bit </span><span style = {{color: "#f5b642"}}>About</span> <span style = {{color: "#34eb71"}}>Me</span></h1>
                    <div className = "row">
                        <div className = "col-lg-4 col-md-6 col-sm-12 project">
                            <img src = "vm.jpg" style = {{borderRadius: "100%", border: "3px solid white", width: "150px", color: "grey", marginBottom: "10px"}}></img>
                            <p style = {{color: "#b5bdbc", fontSize: "0.8em"}}>Victoria Memorial, Kolkata</p>
                            <p style = {{color: "white"}}>I grew up in the Indian city of <a href = "https://en.wikipedia.org/wiki/Kolkata" target = "_blank">Kolkata</a>. It was originally founded as a Trading post for the East Indian Company in 1686. Today it’s known for its grand colonial architecture, art galleries and cultural festivals and a has a rich lineage of Academicians and Nobel Laureates.</p>
                        </div>
                        <div className = "col-lg-4 col-md-6 col-sm-12 project">
                            <img src = "dbpc.jpg" style = {{borderRadius: "100%", border: "3px solid white", width: "150px", color: "grey", marginBottom: "10px"}}></img>
                            <p style = {{color: "#b5bdbc", fontSize: "0.8em"}}>Don Bosco School, Park Circus</p>
                            <p style = {{color: "white"}}>I went to School <a href = "https://www.donboscoparkcircus.org/" target = "_blank">here</a>. It was established in 1958, so it's pretty old. I was Vice President of The Science group, member of the Drama troupe, and played in the School Band. I graduated in 2019 with a 94.4% score in my ICSE and 92% in my ISC. </p>
                        </div>
                        <div className = "col-lg-4 col-md-6 col-sm-12 project">
                            <img src = "makaut.jpg" style = {{borderRadius: "100%", border: "3px solid white", width: "150px", color: "grey", marginBottom: "10px"}}></img>
                            <p style = {{color: "#b5bdbc", fontSize: "0.8em"}}>Maulana Abul Kalam Azad University Of Technology, Kolkata</p>
                            <p style = {{color: "white"}}>I'm pursuing my Bachelors in Information Technology from MAKAUT <a href = "https://makautwb.ac.in/" target = "_blank" style = {{fontSize: "100"}}>here</a>, in Kolkata. As an active member of Coding Club, I frequently represent my college in Hackathons and TechFests and have brought home accolades.</p>
                        </div>
                        <div className = "col-lg-6 col-md-6 col-sm-12 project">
                            <img src = "sw.jpg" style = {{borderRadius: "100%", border: "3px solid white", width: "150px", color: "grey", marginBottom: "10px"}}></img>
                            <p style = {{color: "#b5bdbc", fontSize: "0.8em"}}>Little Sisters Of The Poor, Kolkata</p>
                            <p style = {{color: "white"}}>I'm actively involved in Social work events in my city. I visited and raised funds for Old age homes and Orphanages throughout the region as well as ran donation drives in my school for Natural Disaster relief supplies. I donate to the <a href = "https://www.facebook.com/rotaractrcciit/" target = "_blank">Rotaract Club</a> of University which frequently undertakes such initiatives.</p>
                        </div>
                        <div className = "col-lg-6 col-md-6 col-sm-12 project">
                            <img src = "os.jpg" style = {{borderRadius: "100%", border: "3px solid white", width: "150px", color: "grey", marginBottom: "10px"}}></img>
                            <p style = {{color: "#b5bdbc", fontSize: "0.8em"}}>Open Source</p>
                            <p style = {{color: "white"}}>I'm a big fan of Open soucre Community and the Linux scene. I've been climbing the Open Source ladder since 2019 and have contributed in more than eight projects. I completed <a href = "https://hacktoberfest.digitalocean.com/" target = "_blank">Hacktoberfest</a> in 2020, and constantly make efforts to eduacte others about Open source software and grow the Community.</p>
                        </div>
                    </div>
                </div>}

                { this.state.resume && <>
                <div id = "projects" style = {myprojects}> 
                    {/* <h1 style = {{marginBottom: "30px"}} ><span style = {{color: "#b5bdbc"}}>And here's </span><span style = {{color: "#f5b642"}}>My</span> <span style = {{color: "#34eb71"}}>Resume</span></h1> */}
                    <h1 style = {{marginBottom: "30px", textAlign: "center"}} ><span style = {{color: "#b5bdbc"}}>And here's </span><span style = {{color: "#f5b642"}}>My</span> <span style = {{color: "#34eb71"}}>Resume</span></h1>
                    <a id = "resume" href = "https://drive.google.com/file/d/1Y2KoWlBwJTgCz4YTtuKc6OO0o-JdtDvz/view?usp=sharing" target = "_blank"><div id = "resumediv"><FaEye className = "icon" size = "50"/></div></a>
                </div>  
                <p style = {{
                    color: "white", 
                    fontSize: "1.3em", 
                    position: "relative", 
                    zIndex: "2", 
                    fontWeight: "bold", 
                    background: "#343363",
                    textAlign: "center",
                    margin: "0px",
                    padding: "10px"}}>
                Copyright &copy; Supratik Chakraborty 2020</p>
                </>}
                </div>
                </>
            
        )
    }
}

export default App