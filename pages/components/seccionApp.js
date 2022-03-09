import Link from 'next/link'
import Image from 'next/image'

export default function SeccionApp() {

  return (
    <section className="mt-32 mb-28">
      <div className="items-center w-[960] mx-11 grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="text-center">
          <span className="text-green-600 text-xl font-medium">App</span>
          <h2 className="text-black dark:text-white text-3xl font-bold tracking-wider my-5">Pide tu pizza a domicilio</h2>
          <p className="text-black dark:text-white text-sm my-5">Descarga la aplicación de Just Eat y podrás hacer tu pedido y ver tus entregas en camino y mucho más.</p>
          <div className="space-x-6">
            <Link href="https://apps.apple.com/es/app/just-eat-es-comida-a-domicilio/id615238455" >
              <a>
                <Image
                  priority
                  src="/img/app1.png"
                  className=" rounded-lg my-4" height="50" width="175"
                  alt="Apple App Store"
                ></Image>
              </a>
            </Link>

            <Link href="https://play.google.com/store/apps/details?id=com.justeat.app.es&hl=en&gl=US">
              <a>
                <Image
                  priority
                  src="/img/app2.png"
                  className=" rounded-lg my-4" height="50" width="175"
                  alt="Google Play Store"
                ></Image>
              </a>
            </Link>
          </div>
        </div>

        <div className='w-auto flex justify-center mt-10'>
          <Image src="/img/justeat.png" alt="Just Eat" className="col-span-2 rounded-lg my-4  " height="420" width="225" />
        </div>
      </div>
    </section>
  )
}