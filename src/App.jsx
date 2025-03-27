

function App() {


  return (
    <>
         <div className="container">
      <header>
        <nav>
          <div className="logo">AXIOM <span>SPACE</span></div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Planets</a></li>
            <li><a href="#">Tickets</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="hero">
        <div className="content">
          <h2>PLANET</h2>
          <h1>MARS</h1>
          <p>Embark on an extraordinary journey to Mars and unlock the secrets of the Red Planet’s captivating landscapes and ancient mysteries.</p>
          <div className="buttons">
            <button className="book">Book Ticket</button>
            <button className="watch">Watch Videos</button>
          </div>
        </div>
        <div className="mars-image">
          <img src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png" alt="Mars" />
        </div>
      </section>
    </div>
    </>
  )
}

export default App
