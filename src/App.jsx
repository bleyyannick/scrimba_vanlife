
import './App.css'
import Header from './components/Header'
import background_main from "/images/background_main.png"

function App() {

  return (
    <>
     <Header />
     <main>
        <img className="backgroundImg" src={background_main}  />
     </main>
     <footer>
        <p>© 2022 #VANLIFE</p>
     </footer>
    </>
  )
}

export default App
