import Banner from '@/components/home-page/banner'
import Categories from '@/components/home-page/categories'
import { Inter } from 'next/font/google'

export default function Home() {
  return (
    <div className='flex flex-col gap-5 justify-around items-center h-5/6 min-h-screen'>
      <Banner />
      <Categories />
    </div>
  )
}