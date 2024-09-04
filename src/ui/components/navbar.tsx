import { useBoundStore } from '@/core/zustand/store'
import { ScaleLoader } from 'react-spinners'

const Navbar = () => {
  const loader = useBoundStore((state) => state.loading)
  console.log('navbar loader: ', loader)
  return (
    <nav className="mb-4 flex justify-between border-b border-solid border-gray-400 p-1">
      <h1>PODCASTER</h1>
      {loader && <ScaleLoader />}
    </nav>
  )
}

export default Navbar
