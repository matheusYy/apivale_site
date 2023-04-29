import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ImageLoader, StaticImageData } from 'next/image'

import { useEffect, useState } from 'react';
//next
import Image from 'next/image';
import Apicultores from '../../assets/scroll/apicultures.jpg'
import Caixa from '../../assets/scroll/caixa.jpg'
import Favo from '../../assets/scroll/favo.jpg'

const style = {
 background: 'url(./dog.jpg)'
}
type propImage = {
 src: StaticImageData,
 width?: string | undefined,
 height?: string | undefined,
}

export const ScrolPage = () => {
 const [data, setData] = useState([])
 const [d, setD] = useState(false)

 const styleInline = {
   display: 'flex',
   justifyContent: 'center'
 }
 useEffect(() => {
  const handleData = async () => {
   const fetchData = await fetch('https://jsonplaceholder.typicode.com/photos')
   const json = await fetchData.json();

   setData(json)
  }
  handleData()
 }, [])

 const Element = (props: propImage) => {
  const { src, width, height } = props
  const [isLoad, setIsLoad] = useState(false)
  return (
   <div style={{width: '95%', height: '38vh', position: 'relative'}}>
    { isLoad ? (
     <span style={{position: 'absolute', top: '50%', left: '50%'}}>loading</span>
    ) : null
    }
    <Image onLoadingComplete={() => setIsLoad(true)} loading='lazy' fill src={src}  alt="image"  />
   </div>
  )
 }
 console.log(data)
 return (
  <div style={{ width: '100%', height: '25vh', background: 'white'}}>
  <Swiper
  pagination={{
    dynamicBullets: true,
  }}
  modules={[Pagination]}
  className="mySwiper"
>
 <SwiperSlide style={styleInline}>
  <Element src={Apicultores} />
 </SwiperSlide>
 <SwiperSlide style={styleInline}>
  <Element src={Caixa} />
 </SwiperSlide>
 <SwiperSlide style={styleInline}>
  <Element src={Favo} />
 </SwiperSlide>


</Swiper>
</div>
 )
}
