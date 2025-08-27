import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../context/CartContext'

const DarkMode = () => {
    const {isDark, handleDarkMode} = useCartContext();

  return (
    <div>
        <button onClick={() => handleDarkMode()}>{isDark ? <div><FontAwesomeIcon icon={faSun} size='2xl' />Light Mode</div> : <div><FontAwesomeIcon icon={faMoon} size='2xl' />Dark Mode</div>}</button>
    </div>
  )
}

export default DarkMode