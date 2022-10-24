import logo from './logo.svg';
import './css/App.css'
import {useModal} from './common/modal'
import {Header, MyInfo, Expertise, GameDevelopement, SubTitle, ProjectSlider, Modal} from './components'
import {GameProjectData, FrontEndProjectData, AIProjectData} from './data/project'

const App = () => {
  const {title, content} = useModal()

  return (
    <div className="App">
      <Header/>
      <MyInfo/>
      <SubTitle title="Projects" style={{backgroundColor: "#ee6161"}} textStyle={{fontSize: 50}}/>
      {/* <GameDevelopement/> */}
      <ProjectSlider title="Game Development" data={GameProjectData} style={{ backgroundColor: "#1a2b4e"}} containerStyle={{backgroundColor: "#00516f"}}/>
      <ProjectSlider title="Front-End Development" data={FrontEndProjectData} style={{ backgroundColor: "#4c4c4c"}}  containerStyle={{backgroundColor: "#3b155e"}}/>
      <ProjectSlider title="Artificial Intelligence" data={AIProjectData} style={{ backgroundColor: "#621616"}} containerStyle={{backgroundColor: "#1b2933"}}/>
      <Modal title = {title}>
        {content}
      </Modal>
      {/* <Project/>
      <Project/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
