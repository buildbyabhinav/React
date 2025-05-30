import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';

function App() {

  const [projectsState, setProjectsState] =useState({
    selectedProjectId : undefined,
    projects:[]
  })

  function handleStartProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId : null,
      }
    })
  }

  let content;
  if(projectsState.selectedProjectId === null){
    content = <NewProject/>
  }
  else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartProject}/>
      {content}
    </main>
  );
}

export default App;