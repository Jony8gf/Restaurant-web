import Image from 'next/image'

export default function SeccionAbout() {

  return (
    <section className="home mt-14 mb-8" id="about">
      <div className="items-center w-[960] mx-11 grid grid-cols-1 md:grid-cols-2 gap-6 ">


        <div className='w-auto flex justify-center'>
          <Image src="/img/about.jpg" alt="pizzahome" className="col-span-2 rounded-lg object-cover my-4  " height="325" width="325" />
        </div>

        <div className="text-center">
          <span className='text-green-600 text-xl font-medium'>Sobre nosotros</span>
          <h2 className="text-black dark:text-white text-3xl font-bold tracking-wider my-5">Los mejores ingredientes frescos.</h2>
          <p className="text-black dark:text-white text-sm my-5">Cocinamos las mejores pizzas utilizando ingredientes 100% naturales, con un excelente servicio al cliente y al mejor precio, visítanos en <span className='text-black dark:text-white font-bold text-md'>Castro Urdiales</span>.</p>
        </div>

      </div>
    </section>
  )
}