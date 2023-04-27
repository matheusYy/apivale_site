import { Header } from "@/components/Header"
import style from './style.module.css';
import { ScrolPage } from "../../components/Swiper";
import { Slice } from "@/components/TitleInfo";
import favoIcon from '../../assets/icon/favo-de-mel.png'
import Image from "next/image";


type param = {
 name: string | undefined,
 host: boolean | undefined | null | void
}


export const Main = ({ name, host }: param): JSX.Element => {
 return (
  <>
   <main style={{marginBottom: '5em'}}>
    <Header />
    <section style={{height: '45vh'}}>
     <div className={`${style.flexCL} ${style.red}`}>
      <h1 className={style.font5EM}>Apivale</h1>
      <p className={style.pf} style={{margin: 'auto'}} >Ajudamos você apicultor a produzir o melhor mel do vale.</p>
     </div>
     <aside className={style.aside}>
      <button className={style.buttonSTY} type="button" style={{display: 'flex', alignItems: 'center'}}>
       Descubra
       <Image  src={favoIcon} width={20} height={20} alt="favo de mel" />
      </button>
      <button className={style.buttonSTY} type="button">Patrocinio</button>
     </aside>
    <ScrolPage />
    </section>
   </main>
   <article>
    <Slice />
   </article>
  </>
 )
}
