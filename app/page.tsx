'use client'

import BouncingStool from './components/BouncingStool'

export default function Home() {
  return (
    <>
      <BouncingStool />
      <div className="bg-[#FFFF00] text-[#DA251D] font-['Playfair_Display',serif] flex justify-center items-center min-h-screen text-center overflow-x-hidden">
        <div className='max-w-[800px] p-5 relative'>
          <h1 className="font-['Josefin_Sans',sans-serif] text-7xl md:text-8xl m-0 leading-tight uppercase tracking-tighter transform -skew-x-5 [text-shadow:6px_6px_0px_rgba(218,37,29,0.3)]">
            Việt Kiều
          </h1>
          <h2 className='text-2xl mt-2 mb-5 font-normal transform skew-x-5 [text-shadow:3px_3px_0px_rgba(218,37,29,0.3)]'>
            (Overseas Vietnamese)
          </h2>
          <div className='flex flex-col items-center gap-5 mt-10'>
            <a
              href='https://www.instagram.com/mam.nyc'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl no-underline p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:3px_3px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
            >
              Mam
            </a>
            <a
              href='https://www.banhny.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl no-underline p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:3px_3px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
            >
              Banh
            </a>
            <a
              href='https://nhatrangnyc.net/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl no-underline p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:3px_3px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
            >
              Nha Trang One
            </a>
            <a
              href='https://www.banhbylauren.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl no-underline p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:3px_3px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
            >
              Banh by Lauren
            </a>
            <a
              href='https://ny.eater.com/2019/7/16/19154236/banh-mi-saigon-little-italy-nyc'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl no-underline p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:3px_3px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
            >
              Banh Mi Saigon
            </a>
            <a
              href='https://www.instagram.com/bebep.babykitchen/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl no-underline p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:3px_3px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
            >
              Bé Bếp baby kitchen
            </a>
            <a
              href='https://www.instagram.com/vietnamemes__/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl no-underline p-2.5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:3px_3px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)] animate-vibrate'
            >
              vietnamemes (du maaaa)
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
