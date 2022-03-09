import Link from 'next/link'
import Image from 'next/image'

export default function SeccionHome() {

    return(
        <section className="home mt-14 mb-28" id="home">
            <div className="items-center w-[960] mx-11 grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="text-center">
                <h1 className=" text-green-600 text-6xl font-semibold mb-3 my-5">Pizzeria Castro</h1>
                <h2 className="text-black dark:text-white text-3xl font-bold tracking-wider my-5">Las mejores pizzas al estilo cantábrico.</h2>
                <Link href="#menu">
                  <a className="my-4 inline-block bg-green-600 text-white py-3 px-3 font-semibold rounded-lg transition duration-300">View Menu</a>

                </Link>
              </div>

              <div className='w-auto flex justify-center'>
                <Image src="/img/pizzahome.png" alt="pizzahome" className="col-span-2 rounded-full object-cover my-4 hover:object-scale-down  " height="475" width="475" />
              </div>

            </div>
          </section>
    )
}