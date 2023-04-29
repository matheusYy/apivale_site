import { useState } from 'react';
import style from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Hamg from '../../assets/svg/barras-escalonadas.svg'
export const ScrollBar = () => {
 const [open, setOpen] = useState(false);

 return (
  <div className={style.iconScrollBar} style={{ padding: '10px'}}>
    <Image className={style.iconNavBar} onClick={() => setOpen((s) => !s)} src={Hamg} width={15} height={15} alt='botão hamburguer'></Image>
   <nav style={{position: 'absolute'}} className={style.ol}>
    { open ? (
     <div className={style.scrollBar}>
     <Link className={style.hoverEffect} href={'/'}>Contato</Link>
     <Link className={style.hoverEffect}  href={'/'}>Aprenda</Link>
     <Link className={style.hoverEffect}  href={'/'}>Pratocinio</Link>
     </div>
    ) : null
    }
   </nav>
  </div>
 )
}
