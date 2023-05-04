import { Header } from '@/components/Header';
import { Main } from '../template/Main'
import { QuemSomos } from '@/components/quemSomos';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
   <>
    <Header />
    <Main host={true} name={'alfo'} />
    <QuemSomos />
    <Footer />
   </>
  );
}
