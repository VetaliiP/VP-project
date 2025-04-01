import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: FC = () => {
    return (
        <nav className='flex gap-8'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-black' : 'text-white'} >
                <div className="text_block ">#Skills</div>
            </NavLink>
            <NavLink to="/home" >
                <div className="text_block">#Expirience</div>
            </NavLink>
            <NavLink to="/home" >
                <div className="text_block">#About</div>
            </NavLink>
        </nav>
    )
}