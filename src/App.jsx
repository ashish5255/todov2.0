
import './App.css'
import Header from "./components/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {

    const todos = [
        { input: 'Hello! Add your first todo!', complete: true },
        { input: 'Get the groceries!', complete: false },
        { input: 'Learn how to web design', complete: false },
        { input: 'Say hi to gran gran', complete: true },
    ];
    
  return (
    <>
        <Header listLength = {todos.length} />
        <Tabs/>
        <TodoList/>
        <TodoList/>
    </>
  )
}

export default App
