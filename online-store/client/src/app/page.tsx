import Banner from '@/components/banner'
import Categories from '@/components/categories'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Banner />
    <Categories />
    </>
  )
}

    // <div className='flex  w-full h-auto absolute top-10 bg-slate-50'>
    //   <div className="w-1/5 grow-0 border-2 border-solid border-black">first col</div>
    //   <div className="min-w-max grow border-2 border-solid border-black">second col</div>
    //   <div className="w-1/5 grow-0 border-2 border-solid border-black">third col</div>
    // </div>