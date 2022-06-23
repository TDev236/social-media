import { contactos } from "../data"
//Icons to Import
import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from "./Contact"

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Amigos</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6"/>
          <SearchIcon className="h-6"/>
          <DotsHorizontalIcon className="h-6"/>
        </div>
      </div>
      {contactos.map((contacto) => (
        <Contact
          key={contacto.id}
          name={contacto.name}
          image={contacto.src}
        />
      ))}
    </div>
  )
}

export default Widgets