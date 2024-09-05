import { useBoundStore } from '@/core/zustand/store'
import { ScaleLoader } from 'react-spinners'

const Navbar = () => {
  const loader = useBoundStore((state) => state.loading)

  return (
    <nav className="mb-4 flex justify-between border-b-2 border-solid border-gray-400 p-2">
      <a href="/">
        <img src="Navcaster.webp" alt="Navcaster Logo" />
      </a>
      {loader && <ScaleLoader />}
    </nav>
  )
}

export default Navbar
