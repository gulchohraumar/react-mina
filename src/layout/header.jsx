
import { useContext } from 'react';
import bgHeader from '../assets/bg-header.png';
import './header.scss';

export function Header() {
    return <div style={{ position: 'relative', height: '100vh' }}>
        <div className='free-shipping-text py-3 text-center'>
            <span >Free shipping on orders over $50 amount</span>
        </div>
        <div className='header-logo-con'>
            <img className='header-logo' src={bgHeader} alt="" />
        </div>
        <div className='header-content m-auto text-center'>
            <h1 className='font-size-6 ' >
                Handmade ceramics
            </h1>
            <p className='semi-header '>
                Painted clay ceramics made with love.
            </p>
            <div className="mt-5 " >
                <span className='shop-now'  href="">Shop now</span>
            </div>
        </div>
    </div>
}