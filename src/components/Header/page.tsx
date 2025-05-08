import React from 'react'
import '../../ui/header.scss';
import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="logo"><img src="/icons/logo.svg" alt="noventer" /><Link href="/">Noventer</Link></div>
                    <div className="nav">
                        <ul>
                            <Link href="/"><li>Bosh sahifa</li></Link>
                            <Link href="/about"><li>Portfolio</li></Link>
                            <Link href="/servic"><li>Xizmatlar</li></Link>
                            <Link href="/blog"><li>Aloqa</li></Link>
                        </ul>
                    </div>
                    <div className="header-btn">
                            <div className="dropdown">
                                <select id="language-select">
                                    <option value="uz">O'zbek</option>
                                    <option value="en">English</option>
                                    <option value="ru">Русский</option>
                                </select>
                            </div>
                        <button className='btn'>Loyiha bormi ?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;