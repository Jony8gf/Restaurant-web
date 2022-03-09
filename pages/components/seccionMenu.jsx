import Image from 'next/image'

export default function SeccionMenu() {

  return (
    <section className="pt-16 px-0 pb-8 mx-2 mb-14 " id="menu">
      <div className='flex justify-center items-center my-3'>
        <span className='text-green-600 text-xl font-medium'>Menu</span>
      </div>

      <div className='flex justify-center items-center my-3'>
        <h2 className="text-black dark:text-white text-3xl font-bold tracking-wider my-5">Nuestras carta de Pizzas</h2>
      </div>

      {/* //Pizzas 1-3 */}
      <div className="container items-center w-[960]  md:grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 justify-center inline-grid justify-items-center">

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card">
          <div className="card-front">
            <Image src="/img/pizza1.png" alt="pizza2" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza Airlia</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$8.90</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-8">Salsa de tomate, champiñones, queso mozzarella rallado, rodajas de tomate, aceitunas negras, queso, espinacas, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card ">
          <div className="card-front">
            <Image src="/img/pizza2.png" alt="pizza2" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza Fratichelli</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$12.00</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-8">Salsa de tomate, champiñones, queso mozzarella rallado, queso parmesano rallado, bacon, rodajas de aceitunas, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card">
          <div className="card-front">
            <Image src="/img/pizza3.png" alt="pizza2" className="" width="290%" height="290%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza Peperoni</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$9.50</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-4">Salsa de tomate, rodajas de pepperoni, queso mozzarella rallado, queso parmesano rallado, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card">
          <div className="card-front">
            <Image src="/img/pizza4.png" alt="pizza2" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza Napolitina</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$8.90</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-8">Salsa de tomate, champiñones, queso mozzarella rallado, rodajas de tomate, aceitunas negras, queso, espinacas, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card ">
          <div className="card-front">
            <Image src="/img/pizza5.png" alt="pizza5" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza Siciliana</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$7.90</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-8">Salsa de tomate, champiñones, queso mozzarella rallado, queso parmesano rallado, bacon, rodajas de aceitunas, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card">
          <div className="card-front">
            <Image src="/img/pizza6.png" alt="pizza2" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza Tomato Agosta</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$9.50</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-4">Salsa de tomate, rodajas de pepperoni, queso mozzarella rallado, queso parmesano rallado, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card">
          <div className="card-front">
            <Image src="/img/pizza7.png" alt="pizza7" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza 4 Quesos</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$9.50</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-8">Salsa de tomate, champiñones, queso mozzarella rallado, rodajas de tomate, aceitunas negras, queso, espinacas, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card ">
          <div className="card-front">
            <Image src="/img/pizza8.png" alt="pizza2" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza Rosso</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$7.00</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-8">Salsa de tomate, champiñones, queso mozzarella rallado, queso parmesano rallado, bacon, rodajas de aceitunas, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card">
          <div className="card-front">
            <Image src="/img/pizza9.png" alt="pizza2" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza Infantina</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$9.50</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-4">Salsa de tomate, rodajas de pepperoni, queso mozzarella rallado, queso parmesano rallado, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card">
          <div className="card-front">
            <Image src="/img/pizza10.png" alt="pizza2" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza American</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$8.90</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-8">Salsa de tomate, champiñones, queso mozzarella rallado, rodajas de tomate, aceitunas negras, queso, espinacas, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card ">
          <div className="card-front">
            <Image src="/img/pizza11.png" alt="pizza2" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza di vegetale</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$12.00</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-8">Salsa de tomate, champiñones, queso mozzarella rallado, queso parmesano rallado, bacon, rodajas de aceitunas, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card">
          <div className="card-front">
            <Image src="/img/pizza12.png" alt="pizza12" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza Hawaiana</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$9.99</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-4">Salsa de tomate, rodajas de pepperoni, queso mozzarella rallado, queso parmesano rallado, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card">
          <div className="card-front">
            <Image src="/img/pizza13.png" alt="pizza13" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza Margherita</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$8.00</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-8">Salsa de tomate, champiñones, queso mozzarella rallado, rodajas de tomate, aceitunas negras, queso, espinacas, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card ">
          <div className="card-front">
            <Image src="/img/pizza14.png" alt="pizza14" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza Carbonara</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$12.00</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-8">Salsa de tomate, champiñones, queso mozzarella rallado, queso parmesano rallado, bacon, rodajas de aceitunas, aceite de oliva, sal de ajo</span>
          </div>
        </div>

        <div className="flex-col text-center mt-10  rounded-lg shadow-md dark:shadow-white hover:shadow-xl p-4 bg-opacity-50 card">
          <div className="card-front">
            <Image src="/img/pizza15.png" alt="pizza15" className="" width="275%" height="275%" />
            <h3 className="font-semibold text-lg text-black dark:text-white mt-1">Pizza California</h3>
            <div>
              <span className="font-semibold text-lg text-green-500 mt-1 flex justify-end mr-4">$11.90</span>
            </div>
          </div>

          <div className="card-back">
            <span className="text-black dark:text-white mb-6 -mt-4">Salsa de tomate, rodajas de pepperoni, queso mozzarella rallado, queso parmesano rallado, aceite de oliva, sal de ajo</span>
          </div>
        </div>
      </div>

    </section>
  )
}