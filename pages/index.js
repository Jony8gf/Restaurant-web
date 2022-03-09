import Head from 'next/head'
import Footer from './components/footer'
import Header from './components/header'
import SeccionAbout from './components/seccionAbout'
import SeccionApp from './components/seccionApp'
import SeccionContacto from './components/seccionContacto'
import SeccionHome from './components/seccionHome'
import SeccionMenu from './components/seccionMenu'
import SeccionServicios from './components/seccionServicios'

export default function Home() { 

  return (
    <div>
      <Head>
        <title>Pizzeria Castro</title>
        <meta name="Pizzeria castro" content="Pizzeria Castro" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>

      <div className='w-[1080px] mx-auto'>
        
        <Header />

        <main className='main'>

          {/* //Home */}
          <SeccionHome />

          {/* //About */}
          <SeccionAbout />

          {/* //Servicios */}
          <SeccionServicios />

          {/* //Menu */}
          <SeccionMenu />


          {/* //App y domicilio  */}
          <SeccionApp />

          {/* //Contacto  */}
          <SeccionContacto />

        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </div>
  )
}
