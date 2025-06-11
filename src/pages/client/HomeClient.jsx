import React from 'react'
import { FaBars, FaPhone } from 'react-icons/fa6'
import banner from '../../assets/PSG.jpg';
import logoChel from '../../assets/logo-chelsea.jpg';

const HomeClient = () => {
  return (
    <>
      <section>
        <div className='bg-black py-5 px-32 flex justify-between'>
          <div className='text-white flex items-center gap-20 '>
            <a href="" className='flex items-center gap-2'>
              <FaBars /> Browse Categories
            </a>
            <a href="">Products</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>

          <div className='text-white flex items-center flex items-center gap-3'>
            <FaPhone />
            Customer Care: 0333140287
          </div>

        </div>
      </section>

      {/* banner */}
      <section>
        <img src={banner} alt="" srcset="" className='' />
      </section>
      {/*  */}


      {/* Thương hiệu  */}
      <section className="px-32 py-10">
  <div>
    <h2 className="font-bold text-red-600 text-xl text-center">B R A N D S</h2>
  </div>
  <div className="grid grid-cols-5 gap-x-12 mt-4">
    <img src={logoChel} alt="Brand Logo" className="h-40 mx-auto" />
    <img src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-nike-inkythuatso-2-01-04-15-43-59.jpg" alt="Brand Logo" className="h-40 mx-auto" />
    <img src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-psg-inkythuatso-2-01-06-10-14-45.jpg" alt="Brand Logo" className="h-40 mx-auto" />
    <img src="http://rubee.com.vn/admin/webroot/upload/image//images/tin-tuc/puma-logo-3.jpg" alt="Brand Logo" className="h-40 mx-auto" />
    <img src="https://images.seeklogo.com/logo-png/25/1/mlb-logo-png_seeklogo-250501.png" alt="Brand Logo" className="h-40 mx-auto" />
  </div>
</section>



      {/* phần có 2 cái ảnh  */}
      <section className='flex justify-center px-32 py-10 gap-3'>
  <div className='w-1/2'>
    <img
      src="https://cdnmedia.baotintuc.vn/Upload/EqV5H9rWgvy9oNikwkHLXA/files/24092021ChelseaManCity1.jpg"
      alt=""
      className='w-full h-80 object-cover rounded'
    />
  </div>
  <div className='w-1/2'>
    <img
      src="https://cdnmedia.baotintuc.vn/Upload/EqV5H9rWgvy9oNikwkHLXA/files/24092021ChelseaManCity1.jpg"
      alt=""
      className='w-full h-80 object-cover rounded'
    />
  </div>
</section>

    <section className='px-32 py-3 flex justify-between border-b border-gray-300'>
      <div className='flex gap-2'>
        <h2 className='border-r border-gray-300 pr-3'>Featured</h2>
        <div>NEW</div>
      </div>
      <div className='flex gap-3'>
        <a href="">ALL</a>
        <a href="">SHOES</a>
        <a href="">APPAREL</a>
        <a href="">EQUIPMENT</a>
      </div>
    </section>
    </>
  )
}

export default HomeClient 