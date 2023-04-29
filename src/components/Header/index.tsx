import Link from 'next/link';
import style from './style.module.css';
import { ScrollBar } from '../scrollBar';

export const Header = ():JSX.Element => {
return (
 <header className={style.header}>
  <ScrollBar />
   <nav className={style.navBar}>
    <Link href={'/'}>Sobre</Link>
    <Link href={'/'}>Contato</Link>
    <Link href={'/'}>Utils</Link>
   </nav>
 </header>
)}
