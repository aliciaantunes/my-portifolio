/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'AboutMe', 'MyProjects', 'MyKnowlege', 'ContactMe'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        return rect.top <= 50 && rect.bottom >= 50;
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = activeSection === 'Home' ? "text-purple-500" : "text-white";
  const iconColorClass = activeSection === 'Home' ? "text-purple-500" : "text-white";

  console.log('activeSection', activeSection);

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-10 flex items-center justify-between space-x-4 ${textColorClass}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', height: '70px' }}>
        <h1 className="text-3xl font-bold">
          <a
            className="logo close"
            style={{ marginLeft: "75px", fontFamily: '"Gemunu Libre", sans-serif', fontWeight: '100' }}
            href="#Home"
          >
            Alícia Antunes
          </a>
        </h1>
        <div className="flex justify-center flex-1">
          <ul className="flex">
            <li className="mr-4">
              <a
                id="aboutNav"
                onClick={(e) => handleNavigation(e, 'AboutMe')}
                className={`close hover:opacity-100 hover:text-lg hover:underline hover:underline-offset-4 ${activeSection === 'AboutMe' ? 'text-lg text-white underline underline-offset-4' : 'opacity-50'}`}
              >
                About me
              </a>

            </li>
            <li className="mr-4">
              <a
                id="projectsNav"
                onClick={(e) => handleNavigation(e, 'MyProjects')}
                className={`close hover:opacity-100 hover:text-lg hover:underline hover:underline-offset-4 ${activeSection === 'MyProjects' ? 'text-lg text-white underline underline-offset-4' : 'opacity-50'}`}>Projetos</a>
            </li>

            <li>
              <a
                id="knowledgeNav"
                onClick={(e) => handleNavigation(e, 'MyKnowlege')}
                className={`close hover:opacity-100 hover:text-lg hover:underline hover:underline-offset-4 ${activeSection === 'MyKnowlege' ? 'text-lg text-white underline underline-offset-4' : 'opacity-50'}`}>Knowlege</a>
            </li>

            <li>
              <a
                id="knowledgeNav"
                onClick={(e) => handleNavigation(e, 'ContactMe')}
                className={`close hover:opacity-100 hover:text-lg hover:underline hover:underline-offset-4 ${activeSection === 'ContactMe' ? 'text-lg text-white underline underline-offset-4' : 'opacity-50'}`} style={{ marginLeft: '12px' }}>Contact me</a>
            </li>
          </ul>
        </div>


        <div className="flex">
          <div className={`${iconColorClass} hover:text-purple-600 mr-5`}>
            <a href="https://twitter.com/Alicia07antunes" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.201-4.92 4.917 0 .386.044.762.128 1.124-4.087-.205-7.715-2.164-10.144-5.144-.424.729-.666 1.575-.666 2.476 0 1.71.87 3.213 2.188 4.096-.806-.026-1.566-.247-2.228-.616v.062c0 2.386 1.698 4.374 3.946 4.827-.413.112-.848.171-1.296.171-.314 0-.621-.03-.918-.086.623 1.945 2.432 3.362 4.576 3.4-1.676 1.314-3.786 2.097-6.075 2.097-.394 0-.783-.023-1.165-.067 2.165 1.388 4.733 2.197 7.5 2.197 9.007 0 13.92-7.457 13.92-13.92 0-.21-.005-.42-.014-.63.954-.689 1.782-1.55 2.437-2.534z" />
              </svg>
            </a>
          </div>

          <div className={`${iconColorClass} hover:text-purple-700 mr-5`}>
            <a href="https://www.linkedin.com/in/al%C3%ADcia-antunes-084849237/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.5-.783-1.5-1.5s.534-1.5 1.5-1.5 1.5 .783 1.5 1.5-.534 1.5-1.5 1.5zm12 11.5h-3v-5.5c0-1.379-.025-3.5-2.375-3.5-2.375 0-2.625 1.667-2.625 3.392v5.608h-3v-10h3v1.367h.042c.417-.791 1.433-1.367 2.958-1.367 3.167 0 3.75 2.083 3.75 4.792v5.208z" />
              </svg>
            </a>
          </div>

          <div className={`${iconColorClass} hover:text-purple-700 mr-40`}>
            <a href="https://github.com/aliciaantunes" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.724-4.042-1.61-4.042-1.61-0.546-1.387-1.334-1.757-1.334-1.757-1.091-0.745 0.082-0.729 0.082-0.729 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492 0.998 0.108-0.775 0.418-1.305 0.761-1.605-2.665-0.3-5.467-1.332-5.467-5.93 0-1.31 0.468-2.38 1.235-3.22-0.123-0.303-0.535-1.524 0.117-3.176 0 0 1.008-0.322 3.3 1.23 0.957-0.267 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.137 3.006 0.404 2.29-1.552 3.297-1.23 3.297-1.23 0.653 1.652 0.241 2.873 0.118 3.176 0.77 0.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.92 0.43 0.371 0.813 1.102 0.813 2.222 0 1.606-0.015 2.896-0.015 3.286 0 0.32 0.216 0.694 0.825 0.577 4.765-1.586 8.2-6.081 8.2-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      <div>
        <div id="Home" className="flex items-center justify-center h-screen bg-black text-white w-full h-720 flex">
          <div className="flex justify-between w-full px-80">
            <div className="text-white" style={{ marginTop: "70px", display: "flex", flexDirection: 'column', alignItems: 'flex-start' }}>
              <p className="text-purple-500">&lt;p&gt;Hello World&lt;/p&gt;</p>
              <h1 className="text-8xl">I am Alícia</h1>
              <p className="text-2xl typing-effect" style={{ marginBottom: "30px", borderStyle: "solid", borderWidth: "1px", display: "inline-block" }}>Front-end Web Developer.</p>
              <a className="text-purple-500 border-2 border-purple-500 border solid hover:bg-purple-500 hover:text-black" style={{ marginTop: "20px", paddingRight: "30px", paddingLeft: "35px", paddingTop: "10px", paddingBottom: "10px" }} href="#ContactMe">Talk to me</a>
            </div>
            <div className="relative w-96 h-96 bg-purple-500 flex items-center justify-center" style={{ borderRadius: "20% 80% 30% 70% / 60% 40% 60% 40%", boxShadow: "10px 10px 20px rgba(0,0,0,0.2)", marginLeft: "50px" }}>
              <img src="/images/alicia_pic.png" alt="picture of me <3" style={{ marginTop: '60px' }} />
            </div>
          </div>
        </div>

        <div id="AboutMe" className="flex items-center justify-center h-screen" style={{ backgroundColor: '#121212', color: 'white', width: '1520px', height: '720px' }}>
          <div className="flex w-1/2 justify-center items-center">
            <img src="/images/foto_alicia_inteira.jpg" alt="picture of me <3" style={{ maxWidth: '50%', maxHeight: '50%', objectFit: 'contain', marginRight: '10px', borderRadius: '20px' }} />
          </div>
          <div className="flex w-1/2 justify-center items-center flex-col" style={{ height: '800px' }}>
          <div className="text-white" style={{ width: '700px', height: '80px', marginLeft: '-200px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1 className="text-6xl text-purple-500"style={{marginBotton:"15px"}}>About me</h1>
              <p style={{ fontSize: '18px', marginBottom: '20px', marginTop:"30px" }}>I&apos;ve been a developer since I was 18, and over time, I&apos;ve accumulated significant experience in various technologies. My primary tools include React, Node.js, ES6+, TypeScript, and Redux for state management. Additionally, I&apos;m proficient in git and agile methodologies, allowing me to collaborate effectively in teams and quickly adapt to new challenges.</p>
  <p style={{ fontSize: '18px', marginBottom: '20px' }}>I have strong skills in data consumption and API integrations, something that has always fascinated me. I&apos;ve worked as a freelancer on various projects, which has given me the opportunity to apply my skills in different contexts and solve real-world problems. Now, I&apos;m seeking an opportunity that will allow me to further grow and contribute significantly to a talented and innovative team.</p>
  <p style={{ fontSize: '18px', marginBottom: '20px' }}>I&apos;m passionate about development and truly believe in the power of collaboration. Communication is one of my greatest strengths, and I love working in teams to create amazing solutions. I believe that exchanging ideas and diversity of perspectives are fundamental to the success of any project.</p>
            </div>
          </div>
        </div>

        <div id="MyProjects" className="bg-black text-white w-full h-720 flex items-center justify-center h-full" style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 className="text-5xl text-purple-500 text-center" style={{ marginTop: "100px", marginLeft: "20px", marginRight: "30px" }}>Projects</h1>
          <div className="grid grid-cols-3 gap-5 max-w-7xl items-center justify-center h-full" style={{ marginRight: "10px", marginTop: "10px" }}>

            <div className="group bg-[#121212] hover:bg-neutral-800 shadow-lg transition duration-300 ease-in-ou" style={{ width: '300px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '30px', position: "relative" }} >
            <p className="mb-5 text-2xl text-purple-500">My reads</p>
              <img src="/images/my-reads.gif" alt="gif" className='group-hover:opacity-50 transition duration-300 ease-in-out' style={{ width: '210px', borderRadius: '5px' }} />

              <div className='icons-container' style={{ display: 'flex', flexDirection: 'row' }}>
              <a href="https://github.com/aliciaantunes/Udacity-My-Reads" target="_blank" rel="noopener noreferrer">
                <div className="group/icon flex" style={{
                  width: '60px',
                  height: '60px'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                    <g transform="translate(38.4,38.4) scale(0.7,0.7)">
                      <g className="fill-current fill-white group-hover/icon:fill-black" style={{ fillRule: "nonzero", stroke: "none", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "", strokeDashoffset: "0", fontFamily: "none", fontWeight: "none", fontSize: "none", textAnchor: "none", style: "mix-blend-mode: normal" }}>
                        <path d="M128,309.02857c-99.97932,0 -181.02857,-81.04925 -181.02857,-181.02857v0c0,-99.97932 81.04925,-181.02857 181.02857,-181.02857h0c99.97932,0 181.02857,81.04925 181.02857,181.02857v0c0,99.97932 -81.04925,181.02857 -181.02857,181.02857z" id="shape"></path></g>
                      <g className=" fill-black group-hover/icon:fill-white" style={{ fillRule: "nonzero", stroke: "none", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "", strokeDashoffset: "0", fontFamily: "none", fontWeight: "none", fontSize: "none", textAnchor: "none", style: "mix-blend-mode: normal" }}>
                        <g transform="scale(5.12,5.12)">
                          <path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                </a>

                <a href="https://udacity-my-reads.onrender.com/" target="_blank" rel="noopener noreferrer">
                <div className="group/eye flex" style={{
                  width: '60px',
                  height: '60px',
                  marginTop: "19px",
                  marginLeft: "10px"
                }}>
                  <svg viewBox="-3.84 -3.84 31.68 31.68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" style={{ strokeWidth: "0" }}>
                      <rect x="-3.84" y="-3.84" width="31.68" height="31.68" rx="15.84" className="fill-white group-hover/eye:fill-black" style={{ strokeWidth: "0" }}></rect></g>
                    <g id="SVGRepo_tracerCarrier" style={{ strokeLinecap: "round", strokeLinejoin: "round" }}></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" className="stroke-black group-hover/eye:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" className="stroke-black group-hover/eye:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                  </svg>
                </div>
                </a>
              </div>
              

              <div className="flex items-center justify-center w-72 h-36" style={{ display: 'flex', paddingRight: "25px", paddingLeft: "25px" }}>
                <p style={{ textAlign: 'center' }}>Book tracking app developed as a project for the Udacity course completion.</p>
              </div>
            </div>

            <div className="text-white group bg-[#121212] hover:bg-neutral-800 shadow-lg transition duration-300 ease-in-ou" style={{ width: '300px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '30px' }}>
              <p className="mb-5 text-2xl text-purple-500">Poll-Pick</p>
              <img src="/images/employe-poll.gif" alt="gif" className='group-hover:opacity-50 transition duration-300 ease-in-out' style={{ width: '210px', borderRadius: '5px' }} />
              <div className='icons-container' style={{ display: 'flex', flexDirection: 'row' }}>
               
              <a href="https://github.com/aliciaantunes/Udacity-employee-poll" target="_blank" rel="noopener noreferrer">
                <div className="group/icon flex" style={{
                  width: '60px',
                  height: '60px'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                    <g transform="translate(38.4,38.4) scale(0.7,0.7)">
                      <g className="fill-current fill-white group-hover/icon:fill-black" style={{ fillRule: "nonzero", stroke: "none", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "", strokeDashoffset: "0", fontFamily: "none", fontWeight: "none", fontSize: "none", textAnchor: "none", style: "mix-blend-mode: normal" }}>
                        <path d="M128,309.02857c-99.97932,0 -181.02857,-81.04925 -181.02857,-181.02857v0c0,-99.97932 81.04925,-181.02857 181.02857,-181.02857h0c99.97932,0 181.02857,81.04925 181.02857,181.02857v0c0,99.97932 -81.04925,181.02857 -181.02857,181.02857z" id="shape"></path></g>
                      <g className=" fill-black group-hover/icon:fill-white" style={{ fillRule: "nonzero", stroke: "none", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "", strokeDashoffset: "0", fontFamily: "none", fontWeight: "none", fontSize: "none", textAnchor: "none", style: "mix-blend-mode: normal" }}>
                        <g transform="scale(5.12,5.12)">
                          <path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                </a>

                <a href="https://udacity-employee-poll.onrender.com" target="_blank" rel="noopener noreferrer">
                <div className="group/eye flex" style={{
                  width: '60px',
                  height: '60px',
                  marginTop: "19px",
                  marginLeft: "10px"
                }}>
                  <svg viewBox="-3.84 -3.84 31.68 31.68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" style={{ strokeWidth: "0" }}>
                      <rect x="-3.84" y="-3.84" width="31.68" height="31.68" rx="15.84" className="fill-white group-hover/eye:fill-black" style={{ strokeWidth: "0" }}></rect></g>
                    <g id="SVGRepo_tracerCarrier" style={{ strokeLinecap: "round", strokeLinejoin: "round" }}></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" className="stroke-black group-hover/eye:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" className="stroke-black group-hover/eye:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                  </svg>
                </div>
                </a>
              </div>
              <div className="flex items-center justify-center w-72 h-36" style={{ display: 'flex', paddingRight: "25px", paddingLeft: "25px" }}>
                <p style={{ textAlign: 'center' }}>App where employees can create polls where they present two options. Developed as a final project for the Udacity course completion.</p>
              </div>
            </div>

            <div className="text-white group bg-[#121212] hover:bg-neutral-800 shadow-lg transition duration-300 ease-in-ou" style={{ width: '300px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '30px' }}>
              <p className="mb-5 text-2xl text-purple-500">Shopping cart</p>
              <img src="/images/my-cart.gif" alt="gif" className='group-hover:opacity-50 transition duration-300 ease-in-out' style={{ width: '210px', borderRadius: '5px' }} />
              <div className='icons-container' style={{ display: 'flex', flexDirection: 'row' }}>
                
              <a href="https://github.com/aliciaantunes/My-shopping-cart-project" target="_blank" rel="noopener noreferrer">
                <div className="group/icon flex" style={{
                  width: '60px',
                  height: '60px'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                    <g transform="translate(38.4,38.4) scale(0.7,0.7)">
                      <g className="fill-current fill-white group-hover/icon:fill-black" style={{ fillRule: "nonzero", stroke: "none", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "", strokeDashoffset: "0", fontFamily: "none", fontWeight: "none", fontSize: "none", textAnchor: "none", style: "mix-blend-mode: normal" }}>
                        <path d="M128,309.02857c-99.97932,0 -181.02857,-81.04925 -181.02857,-181.02857v0c0,-99.97932 81.04925,-181.02857 181.02857,-181.02857h0c99.97932,0 181.02857,81.04925 181.02857,181.02857v0c0,99.97932 -81.04925,181.02857 -181.02857,181.02857z" id="shape"></path></g>
                      <g className=" fill-black group-hover/icon:fill-white" style={{ fillRule: "nonzero", stroke: "none", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "", strokeDashoffset: "0", fontFamily: "none", fontWeight: "none", fontSize: "none", textAnchor: "none", style: "mix-blend-mode: normal" }}>
                        <g transform="scale(5.12,5.12)">
                          <path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                </a>

                <a href="https://my-shopping-cart-project.onrender.com/" target="_blank" rel="noopener noreferrer">
                <div className="group/eye flex" style={{
                  width: '60px',
                  height: '60px',
                  marginTop: "19px",
                  marginLeft: "10px"
                }}>
                  <svg viewBox="-3.84 -3.84 31.68 31.68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" style={{ strokeWidth: "0" }}>
                      <rect x="-3.84" y="-3.84" width="31.68" height="31.68" rx="15.84" className="fill-white group-hover/eye:fill-black" style={{ strokeWidth: "0" }}></rect></g>
                    <g id="SVGRepo_tracerCarrier" style={{ strokeLinecap: "round", strokeLinejoin: "round" }}></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" className="stroke-black group-hover/eye:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" className="stroke-black group-hover/eye:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                  </svg>
                </div>
                </a>
              </div>
              <div className="flex items-center justify-center w-72 h-36" style={{ display: 'flex', paddingRight: "25px", paddingLeft: "25px" }}>
                <p style={{ textAlign: 'center' }}>Shopping cart developed as a project for the Udacity course completion.</p>
              </div>
            </div>

            <div className="text-white group bg-[#121212] hover:bg-neutral-800 shadow-lg transition duration-300 ease-in-ou" style={{ width: '300px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '30px' }}>
              <p className="mb-5 text-2xl text-purple-500">This portfolio</p>
              <img src="/images/my-portfolio.gif" alt="gif" className='group-hover:opacity-50 transition duration-300 ease-in-out' style={{ width: '210px', borderRadius: '5px' }} />
              <div className='icons-container' style={{ display: 'flex', flexDirection: 'row' }}>
                
              <a href="https://github.com/aliciaantunes/my-portifolio" target="_blank" rel="noopener noreferrer">
                <div className="group/icon flex" style={{
                  width: '60px',
                  height: '60px'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                    <g transform="translate(38.4,38.4) scale(0.7,0.7)">
                      <g className="fill-current fill-white group-hover/icon:fill-black" style={{ fillRule: "nonzero", stroke: "none", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "", strokeDashoffset: "0", fontFamily: "none", fontWeight: "none", fontSize: "none", textAnchor: "none", style: "mix-blend-mode: normal" }}>
                        <path d="M128,309.02857c-99.97932,0 -181.02857,-81.04925 -181.02857,-181.02857v0c0,-99.97932 81.04925,-181.02857 181.02857,-181.02857h0c99.97932,0 181.02857,81.04925 181.02857,181.02857v0c0,99.97932 -81.04925,181.02857 -181.02857,181.02857z" id="shape"></path></g>
                      <g className=" fill-black group-hover/icon:fill-white" style={{ fillRule: "nonzero", stroke: "none", strokeWidth: "1", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", strokeDasharray: "", strokeDashoffset: "0", fontFamily: "none", fontWeight: "none", fontSize: "none", textAnchor: "none", style: "mix-blend-mode: normal" }}>
                        <g transform="scale(5.12,5.12)">
                          <path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                </a>

               
              </div>
              <div className="flex items-center justify-center w-72 h-36" style={{ display: 'flex', paddingRight: "25px", paddingLeft: "25px" }}>
                <p style={{ textAlign: 'center' }}>My personal portfolio where you can explore my projects, skills, and professional background in more detail.</p>
              </div>
            </div>


          </div>
        </div>

        <div id="MyKnowlege" className="flex flex-col items-center justify-center h-screen text-white w-full h-720" style={{ backgroundColor: '#121212' }}>
          <div>
            <h1 className="text-5xl text-purple-500 text-center" style={{ marginTop: "5px", marginBottom: "20px", marginLeft: "20px", marginRight: "40px" }}>Knowlege</h1>
          </div>

          <div className='grid grid-cols-6 gap-4' style={{ marginRight: "10px" }}>

            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
                <path fill="#98ccfd" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4788c7" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><path fill="#98ccfd" d="M39.5,20c0-2.796-2.912-5.232-7.492-6.787c0.576-2.671,0.655-5.055,0.166-6.881 c-0.408-1.522-1.181-2.617-2.296-3.253c-0.671-0.382-1.438-0.577-2.279-0.577c-2.207,0-4.893,1.401-7.597,3.791 C17.296,3.902,14.609,2.5,12.4,2.5c-0.842,0-1.608,0.194-2.279,0.577C9.006,3.714,8.232,4.81,7.825,6.333 c-0.489,1.826-0.41,4.21,0.165,6.88C3.412,14.768,0.5,17.205,0.5,20s2.912,5.232,7.491,6.786c-0.576,2.67-0.655,5.054-0.165,6.88 c0.407,1.524,1.181,2.619,2.297,3.257c0.671,0.382,1.438,0.577,2.279,0.577c0.001,0,0,0,0.001,0c2.208,0,4.894-1.401,7.598-3.793 c2.704,2.389,5.39,3.789,7.597,3.79c0.001,0,0.001,0,0.001,0c0.842,0,1.608-0.194,2.28-0.577c1.114-0.636,1.887-1.731,2.294-3.253 c0.489-1.826,0.41-4.21-0.165-6.88C36.587,25.233,39.5,22.796,39.5,20z M28.888,4.817c0.634,0.362,1.09,1.046,1.354,2.033 c0.401,1.496,0.322,3.509-0.158,5.79c-1.596-0.417-3.343-0.734-5.208-0.938c-1.11-1.502-2.269-2.855-3.44-4.041 c2.397-2.087,4.598-3.158,6.163-3.158C28.089,4.503,28.522,4.609,28.888,4.817z M25.784,23.287 c-0.653,1.117-1.324,2.152-2.003,3.119c-1.205,0.105-2.467,0.162-3.782,0.162c-1.316,0-2.578-0.058-3.784-0.162 c-0.679-0.967-1.35-2.002-2.003-3.119C13.576,22.197,13,21.096,12.481,20c0.519-1.095,1.095-2.197,1.732-3.287 c0.653-1.117,1.325-2.152,2.004-3.12c1.205-0.105,2.468-0.162,3.783-0.162c1.315,0,2.577,0.057,3.781,0.162 c0.679,0.968,1.35,2.002,2.003,3.119c0.637,1.09,1.214,2.192,1.733,3.287C26.998,21.096,26.421,22.197,25.784,23.287z M28.558,22.392c0.41,1.036,0.756,2.052,1.041,3.035c-0.99,0.258-2.057,0.478-3.194,0.655c0.377-0.582,0.748-1.174,1.106-1.787 C27.881,23.663,28.226,23.028,28.558,22.392z M20,30.983c-0.729-0.738-1.467-1.556-2.205-2.47c0.724,0.034,1.457,0.055,2.205,0.055 c0.747,0,1.48-0.021,2.203-0.055C21.466,29.427,20.729,30.246,20,30.983z M13.593,26.082c-1.136-0.177-2.203-0.397-3.193-0.655 c0.285-0.983,0.63-1.998,1.04-3.034c0.332,0.635,0.677,1.271,1.046,1.903C12.844,24.908,13.216,25.5,13.593,26.082z M11.44,17.607 c-0.41-1.036-0.755-2.051-1.04-3.034c0.99-0.258,2.057-0.478,3.194-0.655c-0.377,0.582-0.749,1.174-1.107,1.786 C12.117,16.337,11.772,16.972,11.44,17.607z M20.001,9.018c0.729,0.737,1.466,1.555,2.202,2.469 c-0.723-0.034-1.456-0.055-2.203-0.055s-1.48,0.021-2.203,0.055C18.534,10.573,19.272,9.755,20.001,9.018z M27.511,15.704 c-0.358-0.613-0.729-1.205-1.106-1.787c1.137,0.177,2.204,0.397,3.194,0.655c-0.285,0.984-0.631,1.999-1.041,3.036 C28.226,16.973,27.881,16.337,27.511,15.704z M9.757,6.851c0.265-0.989,0.721-1.674,1.355-2.037C11.478,4.606,11.911,4.5,12.4,4.5 c1.567,0,3.768,1.072,6.166,3.161c-1.172,1.187-2.332,2.539-3.443,4.042c-1.865,0.204-3.612,0.522-5.208,0.939 C9.435,10.359,9.356,8.346,9.757,6.851z M2.5,20c0-1.729,2.231-3.566,5.983-4.857C8.935,16.708,9.538,18.342,10.28,20 c-0.742,1.658-1.345,3.292-1.797,4.857C4.731,23.566,2.5,21.729,2.5,20z M12.401,35.5c-0.49,0-0.924-0.106-1.288-0.313 c-0.636-0.363-1.092-1.048-1.356-2.037c-0.401-1.496-0.322-3.509,0.158-5.79c1.596,0.417,3.342,0.734,5.207,0.938 c1.111,1.503,2.271,2.856,3.444,4.043C16.168,34.429,13.967,35.5,12.401,35.5z M30.241,33.15c-0.265,0.987-0.72,1.671-1.354,2.033 c-0.365,0.208-0.799,0.314-1.289,0.314c-1.566,0-3.767-1.071-6.164-3.157c1.172-1.187,2.331-2.54,3.441-4.042 c1.865-0.204,3.611-0.522,5.207-0.938C30.563,29.641,30.642,31.654,30.241,33.15z M31.515,24.858 c-0.452-1.565-1.055-3.199-1.797-4.858c0.742-1.659,1.345-3.293,1.797-4.858C35.268,16.433,37.5,18.271,37.5,20 C37.5,21.729,35.268,23.567,31.515,24.858z"></path><path fill="#4788c7" d="M12.402,38c-0.93,0-1.78-0.216-2.528-0.642c-1.237-0.708-2.089-1.906-2.532-3.563 c-0.472-1.762-0.446-4.064,0.07-6.682C2.694,25.42,0,22.842,0,20s2.694-5.42,7.412-7.114c-0.517-2.617-0.542-4.92-0.07-6.682 C7.785,4.548,8.637,3.35,9.873,2.643c2.52-1.438,6.178-0.393,10.128,2.988c3.949-3.378,7.604-4.422,10.125-2.986 c1.235,0.705,2.087,1.902,2.531,3.558c0.472,1.763,0.446,4.066-0.071,6.683C37.305,14.579,40,17.158,40,20 c0,2.842-2.695,5.421-7.414,7.115c0.518,2.617,0.542,4.919,0.07,6.682c-0.443,1.656-1.294,2.853-2.529,3.558 C27.604,38.793,23.946,37.746,20,34.37C17.224,36.747,14.604,38,12.402,38z M12.4,3c-0.753,0-1.437,0.172-2.031,0.511 C9.373,4.081,8.68,5.074,8.309,6.462c-0.458,1.707-0.398,4.005,0.171,6.646l0.094,0.436l-0.422,0.144C3.606,15.23,1,17.531,1,20 s2.606,4.77,7.151,6.313l0.422,0.144l-0.094,0.436c-0.569,2.641-0.629,4.939-0.171,6.646c0.371,1.389,1.064,2.382,2.062,2.952 C10.965,36.828,11.648,37,12.401,37h0.001c2.012,0,4.592-1.302,7.267-3.667L20,33.04l0.331,0.293 c2.674,2.362,5.255,3.664,7.267,3.664c0.754,0,1.438-0.172,2.034-0.511c0.994-0.568,1.687-1.56,2.058-2.948 c0.458-1.707,0.398-4.004-0.171-6.645l-0.094-0.436l0.422-0.144C36.393,24.771,39,22.469,39,20c0-2.47-2.607-4.771-7.153-6.313 l-0.422-0.144l0.095-0.436c0.569-2.641,0.629-4.939,0.171-6.646c-0.372-1.389-1.065-2.38-2.061-2.948 c-0.595-0.339-1.278-0.511-2.031-0.511c-2.011,0-4.591,1.302-7.267,3.666l-0.331,0.293L19.67,6.668C16.994,4.303,14.413,3,12.4,3z M12.401,36c-0.577,0-1.094-0.127-1.535-0.379c-0.756-0.432-1.292-1.22-1.593-2.342c-0.408-1.527-0.355-3.61,0.152-6.022 l0.108-0.513l0.507,0.132c1.591,0.415,3.317,0.727,5.135,0.925l0.217,0.024L15.523,28c1.073,1.451,2.217,2.793,3.397,3.989 l0.374,0.379l-0.401,0.35C16.464,34.834,14.158,36,12.401,36z M10.303,27.973c-0.468,2.04-0.482,3.777-0.063,5.047 c0.278,0.841,0.605,1.438,1.121,1.732c1.294,0.739,3.813-0.237,6.473-2.446c-1.033-1.08-2.035-2.267-2.984-3.536 C13.257,28.588,11.73,28.32,10.303,27.973z M27.599,35.997c-1.757,0-4.063-1.165-6.491-3.28l-0.401-0.349l0.374-0.379 c1.185-1.202,2.327-2.543,3.394-3.988l0.13-0.176l0.218-0.024c1.819-0.199,3.548-0.51,5.137-0.925l0.508-0.132l0.107,0.513 c0.507,2.414,0.56,4.496,0.151,6.022c-0.301,1.121-0.836,1.908-1.589,2.338C28.693,35.87,28.176,35.997,27.599,35.997z M22.166,32.306c2.66,2.207,5.171,3.184,6.475,2.443c0.513-0.292,0.839-0.889,1.117-1.728c0.422-1.271,0.405-3.008-0.062-5.047 c-1.427,0.347-2.954,0.614-4.549,0.797C24.204,30.035,23.203,31.221,22.166,32.306z M20,31.695l-0.355-0.36 c-0.773-0.782-1.526-1.625-2.238-2.508l-0.7-0.867l1.112,0.053c1.431,0.068,2.931,0.068,4.361,0l1.111-0.053l-0.698,0.866 c-0.71,0.879-1.462,1.723-2.237,2.507L20,31.695z M18.898,29.054c0.359,0.417,0.728,0.822,1.102,1.212 c0.374-0.392,0.741-0.796,1.101-1.212C20.372,29.073,19.627,29.073,18.898,29.054z M20,27.068c-1.284,0-2.571-0.055-3.827-0.164 l-0.232-0.02l-0.134-0.191c-0.721-1.027-1.402-2.089-2.025-3.154c-0.619-1.061-1.209-2.179-1.753-3.325L11.927,20l0.102-0.214 c0.544-1.146,1.134-2.265,1.753-3.325c0.63-1.078,1.293-2.109,2.027-3.155l0.134-0.19l0.232-0.02c2.508-0.218,5.142-0.218,7.649,0 l0.232,0.02l0.134,0.191c0.736,1.05,1.399,2.082,2.025,3.154c0.625,1.07,1.215,2.188,1.753,3.326L28.069,20l-0.101,0.214 c-0.538,1.137-1.128,2.256-1.753,3.326c-0.626,1.072-1.289,2.104-2.025,3.154l-0.134,0.191l-0.232,0.02 C22.57,27.013,21.284,27.068,20,27.068z M16.491,25.928c2.309,0.187,4.71,0.187,7.015,0c0.667-0.961,1.272-1.91,1.847-2.893 c0.571-0.977,1.112-1.997,1.61-3.035c-0.498-1.038-1.039-2.058-1.61-3.035c-0.574-0.983-1.18-1.932-1.847-2.893 c-2.306-0.187-4.711-0.187-7.013,0c-0.665,0.958-1.271,1.906-1.849,2.894c-0.565,0.968-1.107,1.988-1.61,3.034 c0.503,1.045,1.044,2.065,1.61,3.035C15.215,24.01,15.836,24.982,16.491,25.928z M25.377,26.749l0.607-0.938 c0.373-0.576,0.74-1.162,1.095-1.767c0.366-0.626,0.707-1.255,1.035-1.883l0.506-0.968l0.402,1.016 c0.405,1.023,0.761,2.06,1.057,3.081l0.143,0.494l-0.497,0.129c-1.017,0.264-2.107,0.488-3.243,0.665L25.377,26.749z M28.479,23.6 c-0.174,0.316-0.353,0.633-0.537,0.949c-0.168,0.288-0.34,0.571-0.513,0.851c0.528-0.1,1.042-0.209,1.54-0.329 C28.819,24.581,28.655,24.09,28.479,23.6z M14.621,26.749l-1.105-0.172c-1.136-0.177-2.227-0.401-3.241-0.665l-0.497-0.129 l0.143-0.493c0.294-1.017,0.649-2.053,1.056-3.08l0.402-1.017l0.506,0.97c0.327,0.628,0.668,1.256,1.034,1.882 c0.354,0.605,0.722,1.191,1.095,1.767L14.621,26.749z M11.029,25.069c0.496,0.119,1.01,0.229,1.537,0.329 c-0.173-0.279-0.344-0.562-0.512-0.85c-0.185-0.315-0.362-0.631-0.536-0.948C11.342,24.092,11.179,24.582,11.029,25.069z M31.18,25.502l-0.146-0.505c-0.446-1.548-1.043-3.16-1.772-4.792L29.17,20l0.092-0.204c0.729-1.63,1.326-3.243,1.773-4.792 l0.146-0.505l0.498,0.171C35.637,16.031,38,18.024,38,20c0,1.977-2.363,3.969-6.322,5.331L31.18,25.502z M30.265,20 c0.63,1.427,1.159,2.84,1.579,4.209C34.993,23.039,37,21.412,37,20s-2.007-3.039-5.156-4.209 C31.424,17.162,30.894,18.574,30.265,20z M8.817,25.501L8.32,25.33C4.363,23.968,2,21.976,2,20s2.363-3.968,6.32-5.33l0.497-0.171 l0.146,0.505c0.449,1.554,1.045,3.167,1.772,4.792L10.828,20l-0.092,0.204c-0.728,1.625-1.323,3.238-1.772,4.792L8.817,25.501z M8.155,15.791C5.006,16.962,3,18.589,3,20s2.006,3.038,5.155,4.209c0.421-1.375,0.95-2.787,1.578-4.209 C9.105,18.578,8.576,17.166,8.155,15.791z M11.378,18.809l-0.402-1.017c-0.406-1.027-0.762-2.063-1.056-3.08l-0.143-0.493 l0.497-0.129c1.016-0.264,2.106-0.488,3.242-0.665l1.106-0.172l-0.61,0.939c-0.373,0.575-0.74,1.161-1.095,1.766 c-0.366,0.625-0.707,1.254-1.034,1.882L11.378,18.809z M11.029,14.931c0.149,0.487,0.313,0.978,0.489,1.469 c0.174-0.316,0.352-0.632,0.536-0.948c0.168-0.287,0.339-0.57,0.512-0.85C12.039,14.701,11.525,14.812,11.029,14.931z M28.62,18.809l-0.506-0.969c-0.328-0.629-0.669-1.257-1.035-1.883c-0.354-0.605-0.722-1.191-1.095-1.767l-0.607-0.938l1.104,0.172 c1.137,0.177,2.229,0.401,3.243,0.666l0.497,0.129l-0.143,0.494c-0.296,1.02-0.651,2.057-1.057,3.081L28.62,18.809z M27.43,14.601 c0.173,0.28,0.345,0.563,0.513,0.851c0.185,0.316,0.363,0.632,0.537,0.949c0.176-0.491,0.34-0.982,0.49-1.47 C28.473,14.811,27.958,14.701,27.43,14.601z M30.465,13.257l-0.507-0.132c-1.587-0.415-3.315-0.726-5.137-0.925l-0.218-0.024 l-0.13-0.176c-1.07-1.449-2.212-2.791-3.394-3.987l-0.374-0.379l0.401-0.35c3.229-2.811,6.243-3.919,8.027-2.901 c0.755,0.431,1.29,1.218,1.591,2.338c0.408,1.527,0.355,3.61-0.152,6.023L30.465,13.257z M25.147,11.229 c1.597,0.183,3.123,0.451,4.549,0.798c0.517-1.907,0.59-3.595,0.063-5.048c-0.302-0.83-0.604-1.435-1.119-1.729 c-1.298-0.74-3.812,0.236-6.473,2.444C23.2,8.775,24.201,9.962,25.147,11.229z M9.534,13.257l-0.108-0.513 c-0.508-2.413-0.561-4.495-0.152-6.022c0.301-1.123,0.836-1.911,1.591-2.341c1.789-1.02,4.801,0.091,8.03,2.904l0.402,0.35 l-0.375,0.379c-1.184,1.197-2.326,2.539-3.396,3.987l-0.13,0.176l-0.218,0.024c-1.818,0.199-3.547,0.51-5.137,0.925L9.534,13.257z M12.4,5c-0.401,0-0.751,0.083-1.041,0.249c-0.514,0.293-0.774,0.916-1.119,1.731c-0.54,1.275-0.449,3.011,0.063,5.047 c1.428-0.347,2.954-0.615,4.549-0.798c0.946-1.267,1.948-2.453,2.983-3.534C15.766,5.977,13.803,5,12.4,5z M16.709,12.039 l0.699-0.866c0.71-0.88,1.463-1.723,2.237-2.507l0.355-0.36l0.355,0.36c0.777,0.787,1.529,1.63,2.236,2.506l0.697,0.866 l-1.11-0.052c-1.43-0.067-2.93-0.067-4.359,0L16.709,12.039z M20,10.932c0.37,0,0.737,0.005,1.101,0.014 c-0.357-0.415-0.726-0.819-1.1-1.211c-0.374,0.391-0.742,0.795-1.101,1.211C19.264,10.937,19.63,10.932,20,10.932z"></path>
              </svg>
              <p>React</p>
              <div className="hearts-container flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
            </div>

            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#7e57c2" d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"></path><path fill="#7e57c2" d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"></path><path fill="#7e57c2" d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"></path>
              </svg>
              <p>Redux</p>
              <div className="hearts-container flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
            </div>

            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
              </svg>
              <p>JavaScript</p>
              <div className="hearts-container flex">
                {Array.from({ length: 4 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
            </div>


            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
              </svg>
              <p>TypeScript</p>
              <div className="hearts-container flex">
                {Array.from({ length: 3 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
                {Array.from({ length: 2 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path>
              </svg>
              <p>Node.JS</p>
              <div className="hearts-container flex">
                {Array.from({ length: 3 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
                {Array.from({ length: 2 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#000000", width: "100", height: "100" }}>
                <g id="SVGRepo_bgCarrier" style={{ strokeWidth: "0" }}></g>
                <g id="SVGRepo_tracerCarrier" style={{ strokeLinecap: "round", strokeLinejoin: "round" }}></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M26.4,24.383c-2.306-.538-3.109-3.31-1.771-6.111a11.927,11.927,0,0,1,2.956-3.706L28,14.221l.012.475a8.972,8.972,0,0,0,1,3.233,18.789,18.789,0,0,1,.833,2.175,4.255,4.255,0,0,1-.1,2.611,3.561,3.561,0,0,1-1.488,1.45A3.726,3.726,0,0,1,26.4,24.383Zm.468-4.753c.166-.191.207-.443.218-1.335l.014-1.1-.269.211a2.238,2.238,0,0,0-.846,1.867c.093.285.382.6.548.594A.686.686,0,0,0,26.869,19.631Z" style={{ fill: "#f5de19" }}></path>
                  <path d="M6.165,29.08A5.136,5.136,0,0,1,2.124,23c.339-1.427.269-1.344,7.635-9.049L16.7,6.691l.984.938.984.938-4,4.176-4,4.176,3.345-.072,3.345-.072,2.364-2.466,2.364-2.466.98.943.98.943-6.951,7.24c-6.377,6.642-7.009,7.269-7.657,7.59a5.185,5.185,0,0,1-3.27.524Zm19.55-16.646c-.183-.11-2.061-1.862-4.173-3.895L17.7,4.844l-.012-.561a1.15,1.15,0,0,1,.259-.9,1.32,1.32,0,0,1,1.385-.494,91.788,91.788,0,0,1,8.37,8.031,1.339,1.339,0,0,1-1.99,1.511Z" style={{ fill: "#f5de19" }}></path>
                  <path d="M4.1,23.621c-.353,2.277.959,3.823,3.439,3.486.255-.268,3.21-3.353,9.849-10.316-3.34.072-3.3-.074-6.641,0C4.066,23.717,3.933,23.667,4.1,23.621Z" style={{ fill: "#f5de19" }}></path>
                  <path d="M23.4,26.737a3.106,3.106,0,0,0,2.813,1.732c1.182,0,1.936-.591,1.936-1.407,0-.978-.776-1.324-2.076-1.893l-.713-.306c-2.058-.877-3.425-1.975-3.425-4.3,0-2.139,1.63-3.767,4.176-3.767a4.215,4.215,0,0,1,4.056,2.283l-2.221,1.426a1.939,1.939,0,0,0-1.835-1.222,1.241,1.241,0,0,0-1.365,1.222c0,.856.53,1.2,1.753,1.732l.713.305c2.423,1.039,3.791,2.1,3.791,4.48C31,29.594,28.983,31,26.274,31a5.479,5.479,0,0,1-5.2-2.916Zm-10.074.247c.448.795.856,1.467,1.835,1.467.937,0,1.528-.367,1.528-1.792v-9.7h2.852V26.7c0,2.953-1.731,4.3-4.258,4.3A4.427,4.427,0,0,1,11,28.39Z" style={{ fill: "#f5de19", stroke: "#000000", strokeMiterlimit: "10", strokeWidth: "0.5px" }}></path></g>
              </svg>
              <p>Unit test</p>
              <div className="hearts-container flex">
                {Array.from({ length: 4 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
                {Array.from({ length: 1 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
              </svg>
              <p>HTML</p>
              <div className="hearts-container flex">
                {Array.from({ length: 4 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>


                ))}
                {Array.from({ length: 1 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
              </svg>
              <p>CSS</p>
              <div className="hearts-container flex">
                {Array.from({ length: 4 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>

                ))}
                {Array.from({ length: 1 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ))}
              </div>
            </div>


            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                <path fill="#31c4f3" d="M30.64,36.275c7.042-8.542,10.948-13.279,17.99-13.279c12.764,0,16.07,9.906,24.867,16.413 C77,42,86.98,44.818,90.501,36.275C86.98,48.021,79.938,53.36,72.895,53.36C67.722,53.36,61,48,54.849,41.08 C47.267,32.552,34.162,32.004,30.64,36.275z"></path><path fill="#31c4f3" d="M9.499,59.919c7.042-8.542,10.948-13.279,17.99-13.279c12.764,0,16.359,9.532,24.867,16.413 C56,66,65.838,68.461,69.36,59.919c-3.521,11.746-10.564,17.084-17.606,17.084C46.581,77.004,40,72,33.707,64.724 C26.243,56.093,13.02,55.648,9.499,59.919z"></path><path fill="#1f212b" d="M72.895,54.359c-6.265,0-13.678-6.86-18.794-12.615c-4.756-5.35-11.458-7.193-16.122-7.077 c-2.998,0.056-5.452,0.894-6.565,2.242c0,0,0,0-0.001,0.001c-0.352,0.427-0.982,0.487-1.408,0.136 c-0.426-0.351-0.488-0.98-0.136-1.406c0.001-0.003,0.003-0.005,0.005-0.007c7.011-8.504,11.245-13.637,18.757-13.637 c9.158,0,13.657,4.833,18.42,9.951c2.129,2.287,4.331,4.652,7.042,6.658c2.023,1.495,6.572,3.132,10.357,2.076 c2.364-0.657,4.089-2.269,5.127-4.787c0.203-0.492,0.759-0.738,1.259-0.562c0.502,0.179,0.776,0.719,0.624,1.229 C88.118,47.706,81.178,54.359,72.895,54.359z M38.293,32.664c5.1,0,12.213,2.026,17.303,7.752 c6.846,7.702,12.99,11.943,17.299,11.943c5.891,0,11.058-3.931,14.46-10.767c-0.726,0.438-1.517,0.779-2.369,1.016 c-4.685,1.304-9.897-0.778-12.083-2.396c-2.86-2.115-5.125-4.55-7.316-6.903c-4.651-4.998-8.668-9.313-16.956-9.313 c-5.472,0-9.01,3.182-14.004,9.055c1.014-0.23,2.128-0.361,3.315-0.383C38.058,32.665,38.175,32.664,38.293,32.664z"></path><path fill="#1f212b" d="M51.753,78.004c-5.083,0-11.761-4.483-18.803-12.625c-4.598-5.317-11.242-7.159-15.893-7.098 c-3.105,0.036-5.642,0.886-6.787,2.272c0,0-0.001,0.001-0.001,0.001l0,0c-0.352,0.428-0.98,0.487-1.408,0.136 c-0.426-0.352-0.487-0.981-0.135-1.407l0,0c0.001-0.002,0.003-0.004,0.004-0.006c7.011-8.504,11.245-13.637,18.757-13.637 c9.493,0,14.151,5.034,19.084,10.363c1.964,2.123,3.996,4.317,6.412,6.271c2.183,1.766,6.437,3.152,10.016,2.235 c2.51-0.641,4.338-2.313,5.435-4.973c0.204-0.493,0.759-0.74,1.259-0.562c0.502,0.179,0.776,0.719,0.624,1.229 C66.977,71.351,60.037,78.004,51.753,78.004z M17.257,56.279c5.104,0,12.233,2.04,17.207,7.791 c6.656,7.695,12.797,11.934,17.29,11.934c5.864,0,11.011-3.895,14.414-10.675c-0.812,0.497-1.705,0.873-2.671,1.119 c-4.258,1.089-9.144-0.494-11.769-2.618c-2.528-2.044-4.609-4.293-6.622-6.468c-4.828-5.217-8.998-9.722-17.616-9.722 c-5.467,0-9.004,3.176-13.991,9.038c1.076-0.247,2.266-0.383,3.537-0.397C17.108,56.28,17.183,56.279,17.257,56.279z"></path><path d="M59.424,69.567c-4.122,0-8.357-2.487-10.382-4.126c-2.181-1.764-4.185-3.977-6.124-6.116C38.575,54.529,34.473,50,28.5,50 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c6.416,0,10.861,4.907,15.159,9.653c1.913,2.112,3.891,4.296,6.011,6.011 c2.148,1.737,6.905,4.494,11.123,3.794c0.271-0.049,0.529,0.14,0.575,0.411c0.045,0.272-0.139,0.53-0.412,0.575 C60.451,69.528,59.938,69.567,59.424,69.567z"></path><path d="M19.5,53c-0.162,0-0.32-0.078-0.417-0.223c-0.153-0.229-0.091-0.54,0.139-0.693c2.513-1.676,4.26-2.59,6.836-2.935 c0.273-0.045,0.525,0.155,0.562,0.429s-0.155,0.525-0.429,0.562c-2.381,0.319-4.028,1.186-6.414,2.776 C19.692,52.973,19.596,53,19.5,53z"></path><path d="M80.924,46.067c-4.122,0-8.357-2.487-10.382-4.126c-2.181-1.764-4.185-3.977-6.124-6.116 C60.075,31.029,55.973,26.5,50,26.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c6.416,0,10.861,4.907,15.159,9.653 c1.913,2.112,3.891,4.296,6.011,6.011c2.148,1.737,6.907,4.487,11.123,3.794c0.273-0.053,0.53,0.14,0.575,0.411 c0.045,0.272-0.139,0.53-0.412,0.575C81.951,46.028,81.438,46.067,80.924,46.067z"></path><path d="M41,29.5c-0.162,0-0.32-0.078-0.417-0.223c-0.153-0.229-0.091-0.54,0.139-0.693c2.24-1.493,3.869-2.383,6.057-2.809 c0.273-0.046,0.534,0.125,0.586,0.396c0.053,0.271-0.125,0.534-0.396,0.587c-2.022,0.393-3.561,1.237-5.693,2.658 C41.192,29.473,41.096,29.5,41,29.5z"></path>
              </svg>
              <p>Tailwind.CSS</p>
              <div className="hearts-container flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
            </div>

            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#7986cb" d="M15.337,18.757l8.334-4.811c0.204-0.118,0.455-0.118,0.659,0l8.341,4.816	C32.874,18.879,33,19.097,33,19.332v9.632c0,0.235-0.126,0.453-0.329,0.57l-8.341,4.816c-0.204,0.118-0.455,0.118-0.659,0	l-8.341-4.816C15.126,29.417,15,29.199,15,28.964v-9.623C15,19.1,15.129,18.878,15.337,18.757"></path><path fill="#3949ab" d="M45.362,23.151L35.545,6.073C35.189,5.455,34.53,5,33.817,5H14.183c-0.713,0-1.372,0.455-1.729,1.073	L2.638,23.114c-0.357,0.618-0.357,1.397,0,2.015l9.817,16.938C12.811,42.684,13.47,43,14.183,43h19.634	c0.713,0,1.372-0.306,1.728-0.924l9.817-16.966C45.719,24.493,45.719,23.769,45.362,23.151 M36.66,31.821L24.356,38.92	c-0.217,0.125-0.484,0.125-0.701,0L11.34,31.821C11.13,31.699,11,31.475,11,31.232V17.063c0-0.243,0.13-0.468,0.341-0.59	l12.302-7.098c0.217-0.125,0.484-0.125,0.701,0l12.289,7.084C36.86,16.591,37,16.833,37,17.096v14.136	C37,31.475,36.87,31.7,36.66,31.821z"></path>
              </svg>
              <p>ESlint</p>
              <div className="hearts-container flex">
                {Array.from({ length: 4 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
                {Array.from({ length: 1 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <polygon fill="#eceff1" points="24,4 7,14 7,34 24,44 41,34 41,14"></polygon><polygon fill="#0277bd" points="23.5,24.5 23.5,33.5 15,29 15,19.5"></polygon><polygon fill="#0277bd" points="24.5,24.5 24.5,33.5 33,29 33,19.5"></polygon><polygon fill="#0277bd" points="24,23.5 15.5,18.5 24,14 32.5,18.5"></polygon><g><polygon fill="#81d4fa" points="23.5,7 23.5,13 14.5,18 9.5,15"></polygon><polygon fill="#81d4fa" points="23.5,41 23.5,35 14.5,30 9.5,33"></polygon><polygon fill="#81d4fa" points="14,19 9,16 9,32 14,29"></polygon><polygon fill="#81d4fa" points="24.5,7 24.5,13 33.5,18 38.5,15"></polygon><polygon fill="#81d4fa" points="24.5,41 24.5,35 33.5,30 38.5,33"></polygon><polygon fill="#81d4fa" points="34,19 39,16 39,32 34,29"></polygon></g>
              </svg>
              <p>Webpack</p>
              <div className="hearts-container flex">
                {Array.from({ length: 2 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
                {Array.from({ length: 3 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className='bg-zinc-950 hover:scale-110 transition duration-300 ease-in-out' style={{ width: "150px", height: "200px", margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0277bd" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22	h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104	c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672	C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498	c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#ffc107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343	h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104	c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672	C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498	c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
              </svg>
              <p>Python</p>
              <div className="hearts-container flex">
                {Array.from({ length: 2 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
                {Array.from({ length: 3 }).map((_, index) => (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                ))}
              </div>
            </div>


          </div>

        </div>

        <div id="ContactMe" className="flex items-center justify-center h-screen bg-black text-white w-full h-720 flex">
          <div className="flex flex-col items-center justify-center w-full h-full" >

            <img src="/images/AliciasContact.png" alt="MyWhatsapp" className='hover:scale-110 rounded-lg' style={{ width: '150px', marginBottom: "30px" }} />

            <h1 className="text-5xl text-purple-500 text-center" style={{ marginTop: "5px", marginBottom: "20px" }}>Talk to me</h1>

            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-500 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <p>antunesalicia07@gmail.com</p>
            </div>

            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-500 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <p>+351 969 264 435</p>
            </div>
            <a className="group text-purple-500 border-2 border-purple-500 border solid hover:bg-purple-500 hover:text-black flex items-center" style={{ marginTop: "20px", paddingRight: "30px", paddingLeft: "35px", paddingTop: "10px", paddingBottom: "10px" }} href="https://api.whatsapp.com/send?phone=351969264435">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="icon-whatsapp text-purple-500 group-hover:text-black mr-2">
                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
              </svg>
              Whatsapp
            </a>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
