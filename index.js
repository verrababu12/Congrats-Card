const element = (
  // Write your code here.
  <div className='congrats-card-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='card'>
      <img
        className='profile-image'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        alt='image'
      />
      <h1 className='card-title'>Kiran V</h1>
      <p className='card-description'>
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        scr='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        alt='image'
        className='watch-image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
