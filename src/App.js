import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import {ClassClick} from './components/ClassClick';
import EventBind from './components/EventBind';
import Parent from './components/Parent';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import ClassMouse from './components/ClassMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
// import Parent from './review/Parent';



function App() {
 // console.log("good morning")/>
  return (
    <div className="App">

      <ClickCounter name='Kavya'/>
      <HoverCounter/>
      {/* <IntervalClassCounter/> */}

      {/* <MouseContainer/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}

      {/* <LifecycleA/> */}

      {/* <Parent/> */}

      {/* <Form/> */}
      {/* <h1 className={styles.error}>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
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
    
      {/* <Greet name = "Kerthana" relation="Sister"/>
        <p>She is elder than me</p>
      <Greet name = "Jayasree" relation="Mother"/>
        <button>Action</button>
      <Greet name = "Ganesh" relation="Father"/> */}

      {/* <Welcome name = "Kerthana" relation="Sister"/>
      <Welcome name = "Jayasree" relation="Mother"/>
      <Welcome name = "Ganesh" relation="Father"/> */}

      {/* <Message/> */}

      {/* <Counter/> */}

      {/* <FunctionClick/> */}

      {/* <ClassClick/> */}

      {/* <EventBind/> */}

      {/* <Parent/> */}
      {/* <Child/> */}
      
      {/* <Hello/> */}
    </div>  
  );
}

export default App;
