import { Header } from '@/components/Header';
import { Main } from '../template/Main'

export default function Home() {
  return (
   <>
    <Header />
    <Main host={true} name={'alfo'} />
   </>
  );
}
