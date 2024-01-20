import Banner from '@/components/home-page/banner'
import Categories from '@/components/home-page/categories'

export default function Home() {
  return (
      <div className={`flex flex-col gap-5 justify-around items-center min-h-[90vh]`}>
        <Banner />
        <Categories />
      </div>
  )
}
