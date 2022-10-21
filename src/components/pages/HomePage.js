import './styles/Home.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs'


const HomePage = () => { 
  return (<>
  <div className='welcome'>
    <h1>Home Page</h1>
    <p>Hi! Thank you for passing by! This is a collection of react projects. <br></br>
    You can also take a look at my Github or Linkedin profile</p>
    <div className="buttons">
    <button><a href='https://github.com/DamperDoor56'><BsGithub /> Github</a> </button>
    <button><a href='https://www.linkedin.com/in/ludmila-rocio-lopez-082b75218/'><BsLinkedin />Linkedin</a></button>
    </div>
    </div>
  </>
  )

};

export default HomePage;
