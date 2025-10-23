import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar: React.FC = () => {
const navigate = useNavigate()
return (
<nav className="nav">
<div className="nav-inner container">
<div className="logo" onClick={() => navigate('/')}>BlogManager</div>
<div className="links">
<NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
Trang chủ
</NavLink>
<NavLink to="/posts/create" className={({ isActive }) => (isActive ? 'active' : '')}>
Viết bài
</NavLink>
</div>
<button className="create-btn" onClick={() => navigate('/posts/create')}>Viết bài mới</button>
</div>
</nav>
)
}


export default Navbar
