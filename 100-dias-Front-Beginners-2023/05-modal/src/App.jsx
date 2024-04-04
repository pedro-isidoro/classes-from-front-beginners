import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)

  return (
    <>
      <h1>Front Beginners - Modal</h1>
      <div>
        <button onClick={() => setOpenModal(true)}>
          Abrir o Modal
        </button>
        <button onClick={() => setOpenModal2(true)}>
          Abrir o Modal 2
        </button>
      </div>
      <Modal isOpen={openModal} setModalOpen={()=>setOpenModal(!openModal)}>
        {/* Children */}
        <p>Conteúdo do Modal</p>
      </Modal>
      <Modal isOpen={openModal2} setModalOpen={()=>setOpenModal2(!openModal2)}>
        {/* Children */}
        <p>Conteúdo do Modal 2</p>
      </Modal>
    </>
  )
}

export default App
