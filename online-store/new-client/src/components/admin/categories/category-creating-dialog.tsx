import CancelButton from '../cancel-button'
import Form from '../form'

const CategoryCreatingDialog = ({ state, title }: { state: boolean, title: string }) => {
  return (
    <dialog open={state} className='fixed top-1/4 transition-all duration-100 z-10 bg-white rounded-lg shadow-lg min-h-[350px] w-1/2' >
      <div className={`flex gap-16 flex-col items-center justify-start p-5`}>
        <div className='font-bold text-3xl text-center text-gray-600'>
          {title}
        </div>
        <Form name='category' />
        <CancelButton name="category" />
      </div>
    </dialog>
  )
}

export default CategoryCreatingDialog