'use client'

import BouncingStool from './components/BouncingStool'

export default function Home() {
  return (
    <>
      <BouncingStool />
      <div className="bg-[#FFFF00] text-[#DA251D] font-['Playfair_Display',serif] flex flex-col justify-between min-h-screen text-center overflow-x-hidden">
        <main className='flex-1 flex justify-center items-center'>
          <div className='max-w-[800px] p-2 relative'>
            <h1 className="font-['Josefin_Sans',sans-serif] text-4xl sm:text-7xl md:text-8xl m-0 leading-tight uppercase tracking-tighter transform -skew-x-5 [text-shadow:4px_4px_0px_rgba(218,37,29,0.3)]">
              Việt Kiều
            </h1>
            <h2 className='text-lg sm:text-2xl mt-1 mb-2 sm:mb-5 font-normal transform skew-x-5 [text-shadow:2px_2px_0px_rgba(218,37,29,0.3)]'>
              (Overseas Vietnamese)
            </h2>
            <div className='flex flex-col items-center gap-1.5 sm:gap-5 mt-2 sm:mt-10'>
              <a
                href='https://www.instagram.com/mam.nyc'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg sm:text-2xl no-underline p-1 sm:p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:2px_2px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
              >
                Mam
              </a>
              <a
                href='https://www.banhny.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg sm:text-2xl no-underline p-1 sm:p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:2px_2px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
              >
                Banh
              </a>
              <a
                href='https://nhatrangnyc.net/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg sm:text-2xl no-underline p-1 sm:p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:2px_2px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
              >
                Nha Trang One
              </a>
              <a
                href='https://www.banhbylauren.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg sm:text-2xl no-underline p-1 sm:p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:2px_2px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
              >
                Banh by Lauren
              </a>
              <a
                href='https://ny.eater.com/2019/7/16/19154236/banh-mi-saigon-little-italy-nyc'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg sm:text-2xl no-underline p-1 sm:p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:2px_2px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
              >
                Banh Mi Saigon
              </a>
              <a
                href='https://www.instagram.com/bebep.babykitchen/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg sm:text-2xl no-underline p-1 sm:p-2.5 transform -skew-x-5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:2px_2px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:transform hover:skew-x-5 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)]'
              >
                Bé Bếp baby kitchen
              </a>
              <a
                href='https://www.instagram.com/vietnamemes__/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg sm:text-2xl no-underline p-1 sm:p-2.5 transition-all duration-300 ease-in-out w-full max-w-[300px] inline-block [text-shadow:2px_2px_0px_rgba(218,37,29,0.3)] hover:scale-110 hover:[text-shadow:3px_3px_0px_rgba(218,37,29,0.5)] animate-vibrate'
              >
                vietnamemes (du maaaa)
              </a>
            </div>
          </div>
        </main>
        <footer className='p-2 text-sm'>
          <a
            href='https://an.vu'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:opacity-80 transition-opacity'
          >
            made by An
          </a>
        </footer>
      </div>
    </>
  )
}
