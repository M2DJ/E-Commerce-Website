import img1 from '../assets/React-Logo.webp'

const Navbar = () => {
  return (
    <div className='max-h-20 p-2 flex justify-between'>
      <div className=''>
        <img src={img1} alt='React logo' className='h-15 max-w-15'/>
      </div>
      <div className='w-100 max-h-20 pl-3 text-xl font-semibold flex justify-between items-center'>
        <p>Home</p>
        <p>About Us</p>
        <p>Offers</p>
        <p>Contact Us</p>
      </div>
      <div className='w-45 max-h-20 pr-2 text-xl font-semibold flex justify-between items-center'>
        <p>My account</p>
        <p>Cart</p>
      </div>
    </div>
  )
}

export default Navbar