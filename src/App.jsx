function App() {
   return (
    <>
    <div className="fixed top-0 left-0 w-full z-10 flex items-center justify-between space-x-4 bg-black text-white">
      <h1 className="text-3xl font-bold">
        <a className="logo close" href="#Home"> Alícia Antunes </a>
      </h1>
      <div className="flex justify-center flex-1">
        <ul className="flex">
          <li className="mr-4">
          <a id="aboutNav" className="close" href="#AboutMe">About me</a>
          </li>
          <li className="mr-4">
          <a id="projectsNav" className="close" href="#MyProjects">Projetos</a>
          </li>
          <li>
          <a id="knowledgeNav" className="close" href="#MyKnowlege">Knowlege</a>
          </li>
        </ul>
      </div>
       
       <div className="flex">
       <div className="text-purple-500 hover:text-purple-600 mr-5">
         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.201-4.92 4.917 0 .386.044.762.128 1.124-4.087-.205-7.715-2.164-10.144-5.144-.424.729-.666 1.575-.666 2.476 0 1.71.87 3.213 2.188 4.096-.806-.026-1.566-.247-2.228-.616v.062c0 2.386 1.698 4.374 3.946 4.827-.413.112-.848.171-1.296.171-.314 0-.621-.03-.918-.086.623 1.945 2.432 3.362 4.576 3.4-1.676 1.314-3.786 2.097-6.075 2.097-.394 0-.783-.023-1.165-.067 2.165 1.388 4.733 2.197 7.5 2.197 9.007 0 13.92-7.457 13.92-13.92 0-.21-.005-.42-.014-.63.954-.689 1.782-1.55 2.437-2.534z"/>
        </svg>
      </div>

        <div className="text-purple-500 hover:text-purple-700 mr-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.5-.783-1.5-1.5s.534-1.5 1.5-1.5 1.5 .783 1.5 1.5-.534 1.5-1.5 1.5zm12 11.5h-3v-5.5c0-1.379-.025-3.5-2.375-3.5-2.375 0-2.625 1.667-2.625 3.392v5.608h-3v-10h3v1.367h.042c.417-.791 1.433-1.367 2.958-1.367 3.167 0 3.75 2.083 3.75 4.792v5.208z"/>
          </svg>
        </div>

        <div className="text-purple-500 hover:text-purple-700 mr-5">
         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.724-4.042-1.61-4.042-1.61-0.546-1.387-1.334-1.757-1.334-1.757-1.091-0.745 0.082-0.729 0.082-0.729 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492 0.998 0.108-0.775 0.418-1.305 0.761-1.605-2.665-0.3-5.467-1.332-5.467-5.93 0-1.31 0.468-2.38 1.235-3.22-0.123-0.303-0.535-1.524 0.117-3.176 0 0 1.008-0.322 3.3 1.23 0.957-0.267 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.137 3.006 0.404 2.29-1.552 3.297-1.23 3.297-1.23 0.653 1.652 0.241 2.873 0.118 3.176 0.77 0.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.92 0.43 0.371 0.813 1.102 0.813 2.222 0 1.606-0.015 2.896-0.015 3.286 0 0.32 0.216 0.694 0.825 0.577 4.765-1.586 8.2-6.081 8.2-11.386 0-6.627-5.373-12-12-12z"/>
         </svg>
        </div>

        <div className="text-purple-600 hover:text-purple-700 mr-40">
         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
           <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.18.054 1.805.25 2.228.415.485.19.83.437 1.2.808.371.37.618.715.808 1.2.165.424.361 1.049.415 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.179-.25 1.804-.415 2.228-.19.485-.437.83-.808 1.2-.37.371-.715.618-1.2.808-.424.165-1.049.361-2.228.415-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.179-.054-1.804-.25-2.228-.415-.485-.19-.83-.437-1.2-.808-.371-.37-.618-.715-.808-1.2-.165-.424-.361-1.049-.415-2.228-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.054-1.179.25-1.804.415-2.228.19-.485.437-.83.808-1.2.37-.371.715-.618 1.2-.808.424-.165 1.049-.361 2.228-.415C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.013 7.053.072 5.672.132 4.671.273 3.75.677 2.829 1.081 2.034 1.676 1.323 2.387.612 3.098.017 3.893.613 4.814.209 5.735.068 6.736.008 8.117-.051 9.396-.064 9.805-.064 13.064s.013 3.668.072 4.947c.06 1.381.201 2.382.595 3.303.596.921 1.191 1.716 1.902 2.427.711.711 1.506 1.306 2.427 1.902.921.394 1.922.535 3.303.595 1.279.059 1.688.072 4.947.072s3.668-.013 4.947-.072c1.381-.06 2.382-.201 3.303-.595.921-.596 1.716-1.191 2.427-1.902.711-.711 1.306-1.506 1.902-2.427.394-.921.535-1.922.595-3.303.059-1.279.072-1.688.072-4.947s-.013-3.668-.072-4.947c-.06-1.381-.201-2.382-.595-3.303-.596-.921-1.191-1.716-1.902-2.427-.711-.711-1.506-1.306-2.427-1.902-.921-.394-1.922-.535-3.303-.595C15.668.013 15.259 0 12 0z"/>
           <path d="M12 5.838c-3.204 0-5.802 2.598-5.802 5.802S8.796 17.442 12 17.442s5.802-2.598 5.802-5.802S15.204 5.838 12 5.838zm0 9.554c-2.068 0-3.752-1.684-3.752-3.752S9.932 7.888 12 7.888s3.752 1.684 3.752 3.752-1.684 3.752-3.752 3.752zM18.406 4.095c0 .791-.64 1.431-1.431 1.431s-1.431-.64-1.431-1.431.64-1.431 1.431-1.431 1.431.64 1.431 1.431z"/>
         </svg>
        </div>
      </div> 
    </div>

    <div>
    <div id="Home" className="flex items-center justify-center h-screen bg-black text-white w-1700 h-720 flex">
  <div className="flex justify-between w-full px-80">
    <div>
    <p className="text-purple-500">&lt;p&gt;Hello World&lt;/p&gt;</p>
      <h1 className="text-8xl">I am Alícia</h1>
      <p className="text-2xl">Front-end Web Developer</p>
      <a className="text-purple-500 border-2 border-purple-500 border solid" href="#ContactMe">Talk to me</a>
    </div>
    <div className="relative w-96 h-96 bg-purple-500 flex items-center justify-center" style={{ borderRadius: "20% 80% 30% 70% / 60% 40% 60% 40%", boxShadow: "10px 10px 20px rgba(0,0,0,0.2)" }}>
    <img src="/images/alicia_pic.png" alt="picture of me <3"  style={{ marginTop: '60px' }}  />
    </div>
  </div>
</div>

<div id="AboutMe" className="flex items-center justify-center h-screen" style={{ backgroundColor: '#121212', color: 'white', width: '1700px', height: '720px' }}>
  <div className="flex w-1/2 justify-center items-center">
    <img src="/images/foto_alicia_inteira.jpg" alt="picture of me <3" style={{ maxWidth: '50%', maxHeight: '50%', objectFit: 'contain', marginRight: '10px', borderRadius: '20px' }} />
  </div>
  <div className="flex w-1/2 justify-center items-center flex-col" style={{ height: '800px' }}>
  <div className="text-white" style={{ width: '350px', height: '80px', marginLeft: '-380px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
   <h1 className="text-5xl text-purple-500">About me</h1>
    <p>From a young age, I transformed my passion for coding into a professional skill set and gained experience working as a freelancer. Now I&apos;m Seeking a more stable position to apply my skills and grow.  </p>
    <p>My main Web Development stack is React(Redux), Node JS, ES6+ JavaScript, TypeScript, Python and I&apos;m always open to learn new technologies.</p>
    <p>When working on web applications I usually choose to use React, Redux, Jest (unit tests), Tailwind, Webpack, Airbnb ESlint configuration, Axios and Codium AI to help with the development. </p>
    <p>I&apos;m always quick to learn, and ready to tackle new challenges.
    Eager to join a dynamic team and deliver innovative web solutions!</p>
   </div>
  </div>
</div>

<div id="MyProjects" className="bg-black text-white w-1700 h-720 flex flex-col">
  <h1 className="text-5xl text-purple-500 text-center">Projects</h1>
  <div className="flex-grow flex justify-center items-center">

  <div className="text-white" style={{ backgroundColor: '#121212', width: '300px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '30px' }}>
     <p style={{ marginBottom: '20px' }}>My reads</p>
     <img src="/images/giphy.gif" alt="gif" style={{ width: '130px' }}/>
     <div className="flex items-center justify-center w-72 h-36" style={{ display: 'flex', paddingRight: "25px", paddingLeft: "25px" }}>
        <p style={{ textAlign: 'center' }}>Book tracking app developed as a project for the Udacity course completion</p>
     </div>
  </div>

  <div className="text-white" style={{ backgroundColor: '#121212', width: '300px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', margin: '30px' }}>
     <p style={{ marginBottom: '20px' }}>Poll-Pick</p>
     <img src="/images/giphy.gif" alt="gif" style={{ width: '130px' }}/>
     <div className="flex items-center justify-center w-72 h-36" style={{ display: 'flex', paddingRight: "25px", paddingLeft: "25px" }}>
        <p style={{ textAlign: 'center' }}>App where employees can create polls where they present two options, and their colleagues can vote for their preferred choice. Developed as a final project for the Udacity course completion.</p>
     </div>
  </div>


  </div>
</div>

     <div id="MyKnowlege" className="flex items-center justify-center h-screen bg-gray-500 text-white w-1700 h-720 flex">
      <h1>Knowlege</h1>
     </div>

     <div id="ContactMe" className="flex items-center justify-center h-screen bg-black text-white w-1700 h-720 flex">
      <h1>Talk to me</h1>
     </div>

    </div>
  </>
  )
}

export default App
