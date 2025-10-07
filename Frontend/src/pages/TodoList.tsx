export default function TodoList() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='py-16 px-4'>
          <div className='grid grid-cols-12 gap-4 text-center items-center'>
            <div className='col-span-3 uppercase font-semibold text-xl whitespace-nowrap'>Add your tasks here 👉🏻</div>
            <form className='col-span-6'>
              <div className='bg-gray-300 rounded-sm p-1 flex'>
                <input
                  type='text'
                  className='text-black px-3 py-2 flex-grow border-none outline-none'
                  placeholder='Add your task here!'
                />
                <button className='rounded-sm py-2 px-6 flex-shrink-0 hover:opacity-80 cursor-pointer bg-gray-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className='col-span-3 uppercase font-semibold text-xl whitespace-nowrap'>👈🏻 ereh sksat ruoy ddA</div>
            <div className='mt-3 col-span-6 col-start-4 bg-gray-300 py-4 px-3 rounded-sm font-semibold text-left'>
              asdas
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
