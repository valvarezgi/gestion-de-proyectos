import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <Head>
        <title>Home | Gestion de proyectos </title>
      </Head>
      <p>Pagina de Index - dev</p>
      <Link href="./admin/usuarios">
      <a className="cursor-pointer">Ir a admin usuarios</a>
      </Link>
      <div>
        <i className="fas fa-home"></i>
      </div>
    </div>
  )
}

export default Home
