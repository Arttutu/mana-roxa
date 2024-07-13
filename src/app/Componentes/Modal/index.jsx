// código omitido

const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef(null)

  const closeModal = () => {
    dialogRef.current.close()
  }

  const openModal = () => {
    dialogRef.current.showModal()
  }

  useImperativeHandle(ref, () => {
    return {
      closeModal,
      openModal,
    }
  })

  return (
    <dialog
      ref={dialogRef}
      className="rounded-lg w-[960px] p-6 max-w-lg border-none"
    >
      <header className="flex justify-end">
        <button className="text-lg border-none bg-botao text-textoPrincipal opacity-80">
          X
        </button>
      </header>
    </dialog>
  )
})
