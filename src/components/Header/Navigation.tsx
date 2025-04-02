import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: FC = () => {
    return (
        <nav className='hidden sm:flex gap-2'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#5A3FC0]' : 'text-[#dddddd]'} >
                <div className="text_block ">#Skills</div>
            </NavLink>
            <NavLink to="/exp" className={({ isActive }) => isActive ? 'text-[#5A3FC0]' : 'text-[#dddddd]'} >
                <div className="text_block">#Expirience</div>
            </NavLink>
            <NavLink to="/pet" className={({ isActive }) => isActive ? 'text-[#5A3FC0]' : 'text-[#dddddd]'} >
                <div className="text_block">#Pet-Project</div>
            </NavLink>
        </nav>
    )
}