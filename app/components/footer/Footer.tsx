export default function Footer (): React.ReactElement {
  const year = new Date().getFullYear()

  return (
    <footer className="flex items-center justify-center w-full h-24">
      <p className='text-xl font-medium'>
        Anghelo Alva - {year}
      </p>
    </footer>
  )
}
