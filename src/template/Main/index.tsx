import { Header } from "@/components/Header"
import style from './style.module.css';
import { ScrolPage } from "../../components/Swiper";
import { Slice } from "@/components/TitleInfo";
import favoIcon from '../../assets/svg/seta-quadrado-direita.svg'
import Image from "next/image";
import FavoSVG from '../../assets/svg/Sem título-1.svg';
import FavoReverser from '../../assets/svg/favo-reverse.svg';

type param = {
 name: string | undefined,
 host: boolean | undefined | null | void
}

/*
z-index: 0;
    position: absolute;
    width: 100%;
    height: 319px;
    top: 10%;
    left: 22%;*/

export const Main = ({ name, host }: param): JSX.Element => {
 return (
  <main style={{marginBottom: "5em", marginTop: '8vh',overflowX: 'hidden'}}>
   <div style={{overflow: 'hidden', width: '100%', height: "46vh", position: 'absolute', top: '11%'}}>
    <div style={{zIndex:0 ,position: 'absolute', width: '100%', height: '319px', top: '8%', left: '-35%'}}>
     <Image src={FavoSVG} fill alt="favo de mel" />
    </div>
    <div className={style.favoMelReverse}>
     <Image src={FavoReverser} fill alt="favo de mel" />
    </div>
   </div>
    <section style={{height: '70vh'}}>
     <div className={`${style.flexCL} ${style.red}`}>
      <h1 className={style.font5EM}>Apivale</h1>
      <p className={style.pf} style={{margin: 'auto'}} >Ajudamos você apicultor a produzir o melhor mel do vale.</p>
     </div>
     <aside className={style.aside}>
      <button className={style.buttonSTY} type="button">
       Descubra <Image src={favoIcon} width={5} height={5} alt="favicon" />
      </button>
      <button className={style.buttonSTY} type="button">Patrocinio</button>
     </aside>
    <ScrolPage />
    </section>
   <article>
    <Slice />
   </article>
  </main>
 )
}
