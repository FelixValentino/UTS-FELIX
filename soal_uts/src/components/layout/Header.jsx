import { NavLink } from 'react-router-dom';
import bgGambar from '../../assets/header-bg.png';

export default function Header() {
    return (
        <header className="header-area" style={{ backgroundImage: `url(${bgGambar})`, size: 'cover', position: 'center', repeat: 'no-repeat' }}>
            <div className="header-text">
                <h1>ProdiInformatika</h1>
                <p>Universitas Matana.</p>
            </div>
            <nav className="nav-menu">
                <NavLink to="/">Beranda</NavLink>
                <NavLink to="/profil">Profil</NavLink>
                <NavLink to="/pendidikan">Pendidikan</NavLink>
                <NavLink to="/riset">Riset</NavLink>
                <NavLink to="/mahasiswa">Mahasiswa</NavLink>
                <NavLink to="/lain-lain">Lain-Lain</NavLink>
                <NavLink to="/berita">Berita</NavLink>
                <NavLink to="/array">Array</NavLink>
            </nav>
        </header>
    );
}