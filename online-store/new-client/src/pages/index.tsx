import Banner from '@/components/home-page/banner'
import Categories from '@/components/home-page/categories'
import Navbar from '@/components/navbar';
import { categories } from '@/data';
import { category } from '@/types';
import { Inter } from 'next/font/google'
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query/types/react';

export async function getStaticProps() {
  const cats = categories;
  return {
    props: {
      cats,
    },

    revalidate: 60,
  }
}

const queryClient = new QueryClient()

export default function Home({ cats }: { cats: category[] }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar categories={cats} />
      <div className='flex flex-col gap-5 justify-around items-center h-5/6 min-h-screen'>
        <Banner />
        <Categories />
      </div>
    </QueryClientProvider>
  )
}
