import { Header } from "@/components/Header"
import style from './scss/style.module.css'
import favoIcon from '../../assets/svg/seta-quadrado-direita.svg'
import Image from "next/image";
import BackGround from '../../assets/pexels-tamara-elnova-12509888.jpg';
import FavoReverser from '../../assets/svg/favo-reverse.svg';
import { ReactNode } from "react";

type param = {
 name: string | undefined,
 host: boolean | undefined | null | void,
 children?: ReactNode
}

/*
z-index: 0;
    position: absolute;
    width: 100%;
    height: 319px;
    top: 10%;
    left: 22%;*/
export const Main = ({ name, host, children }: param): JSX.Element => {
 return (
  <main style={{overflowX: 'hidden'}}>
   <div className={`${style.fullWidth} ${style.center} ${style.background}`}>
     <h1 className={`${style.fontWulkan} ${style.h1}`}>Apivale</h1>
     <p className={`${style.fontDefault}`}>
      Ajudamos você apicultor a
      produzir o melhor mel do vale
     </p>
     <button className={`${style.button} ${style.center}`}>Descubra</button>
   </div>
  </main>
 )
}
