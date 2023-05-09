import React, { FC, useState } from 'react';
import style from './scss/style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Hamg from '../../assets/svg/menu-hamburguer (2).svg'
export const ScrollBar = () => {
 const [open, setOpen] = useState(false);
 const HamgSvg = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="hamg_svg"x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve" width="15" height="15">
      <g>
       <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
       <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z"/>
       <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z"/>
      </g>
      </svg>

  )
 }
 return (
  <div className={style.iconScrollBar} style={{ padding: '10px'}} onClick={() => setOpen(s => !s)}>
    <HamgSvg />
   <nav style={{position: 'absolute'}} className={style.ol}>
    { open ? (
     <div className={style.scrollBar}>
     <Link className={style.hoverEffect} href={'/'}>Contato</Link>
     <Link className={style.hoverEffect}  href={'/'}>Nossos canais</Link>
     <Link className={style.hoverEffect}  href={'/'}>Em breve</Link>

     </div>
    ) : null
    }
   </nav>
  </div>
 )
}
