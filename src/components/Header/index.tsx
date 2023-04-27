import Link from 'next/link';
import style from './style.module.css';

export const Header = ():JSX.Element => {
return (
 <header className={style.header}>
   <nav className={style.navBar}>
    <Link href={'/'}>Sobre</Link>
    <Link href={'/'}>Contato</Link>
    <Link href={'/'}>Utils</Link>
   </nav>
 </header>
)}
