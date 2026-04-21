import './styles/style.css'



import { homePage } from './pages/home/HomePage.js'
import { loadNavbar } from './components/Navbar.js'
import { loadFooter } from './components/shared/Footer.js'
import { navigate } from './router.js'


loadNavbar()
navigate("home")
loadFooter()