import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='pb-6 pt-2 bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-12 gap-4 mt-4 items-end'>
          <div className='col-span-6 font-bold text-xl'>Pham Khoi Nguyen</div>
          <div className='col-span-6 flex justify-end gap-16 text-center'>
            <Link to={'https://youtu.be/0ZWb4h4ZgT0?list=RDobujvaLGsNA&t=237'}>Lần Cuối</Link>
            <Link to={'https://youtu.be/SnNb38_bDDA?t=161'}>Thấy Chưa</Link>
            <Link to={'https://youtu.be/fOQ_-gZsnYQ?t=39'}>back to friends</Link>
            <Link to={'https://youtu.be/NgsWGfUlwJI?t=157'}>Glimpse of Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
