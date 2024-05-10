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
    </div>

    <div className>
      <div id="Home" className="flex items-center justify-center h-screen bg-black text-white w-1700 h-720 flex">
        <div>
        <p>Hello World</p>
        <p>I am Alicia</p>
        <p>Front-end Web Developer</p>
        <button>Talk to me</button>
      </div>
      <div className="w-96 h-96 bg-blue-500 rounded-full"></div>
        </div>

      <div id="AboutMe" className="bg-gray-500 text-white w-1700 h-720 flex flex-col">
        <h1>About me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

     <div id="MyProjects" className="flex items-center justify-center h-screen bg-black text-white w-1700 h-720 flex">
      <h1>Projects</h1>
     </div>

     <div id="MyKnowlege" className="flex items-center justify-center h-screen bg-gray-500 text-white w-1700 h-720 flex">
      <h1>Knowlege</h1>
     </div>

     <div className="flex items-center justify-center h-screen bg-black text-white w-1700 h-720 flex">
      <h1>Talk to me</h1>
     </div>

    </div>
  </>
  )
}

export default App
