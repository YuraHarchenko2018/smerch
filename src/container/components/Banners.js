import { useState } from 'react'
import BannerItem from './BannerItem'
import './Banners.css'

const Banners = ({ banners }) => {
  const [bannersData/*, setBanners*/] = useState(() => banners)
  // const handleBannerItemClick = () => {
  //   let newBannerElement = {
  //     'img_src': 'https://smerch.com.ua/image/catalog/ls_files/new-file-ns/b-block-1.svg',
  //     'title': 'Жопа ' + Math.round(Math.random(100) * 100), 
  //     'description': 'Замовлення в одину Жопу та по Пенису'
  //   }

  //   setBanners((actual) => {
  //     return [ ...actual, newBannerElement ]
  //   })
  // }

  return (
    <div className='banner-blocks-container'>
      {
        bannersData.map((bannerInfoElement) => {
          // onClick={handleBannerItemClick}
          return <BannerItem key={bannerInfoElement.title} bannerInfo={bannerInfoElement} />
        })
      }
    </div>
  )
}

export default Banners