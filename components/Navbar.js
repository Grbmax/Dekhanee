

function Navbar() {
  return (


    <div className='bg-gray-700 flex justify-between px-6 h-32 items-center'>
      
        <div>
          <button type="button"><img src='/menu.svg' alt='next'/></button>
        </div> 

        <div>
        <h1 className='font-bold'>Logo</h1>
        </div>

        <div>
        <button type="button"><img src='/user.png' alt='user'/>
        
        </button>
        </div>

    </div>
  )
}

export default Navbar


