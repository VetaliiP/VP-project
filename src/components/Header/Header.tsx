import { FC } from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { ToggleTheme } from './ToggleTheme';

export const Header: FC = () => {
    return (
        <header className='container flex flex-row justify-between items-center'>
            <Logo />
            <Navigation />
            <ToggleTheme />
        </header>
    )
}