import { Link, Outlet } from 'react-router'
import './rootLayout.css'

const RootLayout = () => {
  return (
    <div>
        <header>
            <Link to="/">
                <img src='logo.png'/>
                <span>ChitChat</span>
            </Link>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout