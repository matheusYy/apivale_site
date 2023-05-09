import style from './scss/style.module.css';

export const QuemSomos = () => {
  return (
   <article className={`${style.textCenter} ${style.background} ${style.flexCenter}`}>
    <h1 className={`${style.h1}`}>Quem Somos? #</h1>
    <p className={`${style.p}`}>
       somos a casa do mel de juquia-sp
       ajudamos os apicultores do vale a
       produzir seu mel sem que precise
       gastar fortunas com centrifugas e
       decantadores
    </p>
    <div className={`${style.iFrame}`}>
     <iframe src="https://www.youtube.com/embed/nKriI47_JHI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
   </article>
  )
}
