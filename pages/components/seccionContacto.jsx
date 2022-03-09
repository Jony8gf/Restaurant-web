
export default function SeccionContacto() {

    return(
      <section className="mt-32 mb-28" id="contact">
      <div className="items-center w-[960] mx-11 grid grid-cols-1 gap-6 ">
        <div className="text-center">
          <span className="text-green-600 text-xl font-medium">Contáctanos</span>
          <h2 className="text-black dark:text-white text-3xl font-bold tracking-wider my-5">Contacto</h2>
          <p className="text-black dark:text-white text-sm my-5">Ponte en contacto con nosotros a través de nuestro email: <span className='text-black dark:text-white text-md font-black'>pizzacastro@pizza.com</span> o desde el teléfono: <span className='text-black dark:text-white font-black text-md'>900 00 00 00</span>.</p>
        </div>
      </div>
    </section>
    )
}