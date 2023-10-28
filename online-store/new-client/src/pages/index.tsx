import Banner from '@/components/home-page/banner'
import Categories from '@/components/home-page/categories'
import Navbar from '@/components/navbar';
import { category } from '@/types';

export default function Home({ cats }: { cats: category[] }) {
  return (
    <>
      <div className='flex flex-col gap-5 justify-around items-center h-5/6 min-h-screen'>
        <Banner />
        <Categories />
      </div>
    </>
  )
}
