import { categories } from '@/data'
import useCategory from '@/hooks/useCategory'
import categoryService from '@/services/category.service'
import { useRouter } from 'next/router'
import React, { ReactNode, useState } from 'react'

export async function getStaticPaths() {
//   const res = await fetch('http://example.com/categories')
//   const categories = await res.json()

  const paths = categories.map((category) => ({
    params: { id: category.id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({params}:{params: {id: string}}) {
    const product  => надо создать хук, который будет получать продукты по id

  return {
    props: {

    },

    revalidate: 60,
  }
}

const Category = ({category}:{category: string}) => {
    const cageory = useCategory
    return (
        <div className='flex flex-row justify-around items-start mt-3'>
            <div className='flex flex-col w-2/3 min-h-fit mr-10'>
            </div>
        </div>
    )
}

export default Category