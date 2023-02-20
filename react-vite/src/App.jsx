import './App.css'
import logo from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

function App() {
  return <div className="App">
  <header>
    <nav className='navbar'>
      <img src={logo} className="logo" alt="logo" />
      <img src={menu} className="menu" alt="menu" />
    </nav>
  </header>
  <main className='main'>
  <h1>Say hello to ReactJS</h1>
  <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
  <button>Awesome!</button>
  </main>
  <div className='cards'>
  <div class="container">

    <img src={icon1} className="card" alt="icon" />
    <h2><a>Declarative</a></h2>
    <p className='read-the-docs'>React makes it painless to create interactive UIs.</p>
  </div>

  <div class="container"> 
    <img src={icon2} className="card" alt="icon" />
    <h2><a>John Doe</a></h2>
    <p className='read-the-docs'>Architect & Engineer</p>
    </div>

  <div class="container"> 
    <img src={icon3} className="card" alt="icon" />
    <h2><a>John Doe</a></h2>
    <p className='read-the-docs'>Architect & Engineer</p>
</div>

  <div class="container"> 
    <img src={icon4} className="card" alt="icon" />
    <h2><a>John Doe</a></h2>
    <p className='read-the-docs'>Architect & Engineer</p>
</div>
    
  </div>
  </div>
}

export default App
