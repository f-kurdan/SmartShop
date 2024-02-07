import { memo } from 'react';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';


const GoBackButton = memo(() => {
  const router = useRouter()
  return (
    <div onClick={() => router.back()} className='transition-all duration-300 bg-white rounded-xl flex justify-center w-40 p-3  hover:shadow-lg hover:shadow-black/30 cursor-pointer active:blur-sm  '>
      <ArrowSmallLeftIcon width={100} height={40} className='text-blue-500' />
    </div>
  )
})

export default GoBackButton