import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import TopPage from '../components/TopPage'
import Section from '../components/Section'
import targets from '../json/targets.json'
import products from '../json/products.json'
import Image from 'next/image'
import { groupBy } from '../components/init'
import { useFormik } from 'formik'
import CustomSwal from '../components/CustomSwal'
import InterventionForm from '../components/InterventionForm'

const Home = () => {

  const [groupedTargets, setGroupedTargets] = useState([])

  useEffect(() => {
    setGroupedTargets(groupBy(targets, 'category'))
  }, [])

  const popup = (target) => {
    CustomSwal.fire({
      title: target.name,
      text: target.description,
      confirmButtonText: 'Fermer',
      confirmButtonColor: '#166534',
    })
  }

  return (
    <Fragment>

      <Head>
        <title>DSTR 3D | Accueil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <TopPage>
        <div className="flex flex-col md:flex-row items-center h-full w-full sm:px-6 lg:px-8 px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 container mx-auto my-auto">
            <div className="flex flex-col justify-center h-full flex-grow justify-self-center max-w-[500px]">
              <h1 className="text-4xl md:text-5xl pb-3 font-semibold text-center text-white">DSTR 3D</h1>
              <h2 className="text-xl md:text-2xl font-semibold text-center text-white">Votre spécialiste en dératisation, désinsectisation et désinfection</h2>
              <p className="text-lg text-center text-white">Nous intervenons sur toute l'Île de France</p>
            </div>
            <div className="hidden p-8 rounded-xl lg:flex flex-col flex-grow max-w-[350px] justify-self-center self-center bg-white/80 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-center leading-8">Besoin d'une intervention rapide ?</h3>
              <button className="bg-orange-500 hover:bg-orange-700 duration-100 py-3 px-4 rounded-lg text-lg font-semibold text-white mt-5" onClick={InterventionForm}>
                Demander une intervention
              </button>
            </div>
          </div>
        </div>
      </TopPage>

      <h2 className='text-4xl font-semibold mb-2 text-center'>Nos cibles</h2>
      {/* For each groupedTargets by category, show category name and item list  */}
      {
        Object.keys(groupedTargets).map((category, i) => {
          return (
            <Section style="" container={true}>
              <div key={i} >
                <h3 className='text-3xl py-4 border-b-2 border-b-green-500'>{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6 py-12">
                  {groupedTargets[category].map((target, i) => {
                    return (
                      <button onClick={() => { popup(target) }} className="card group flex h-28 drop-shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)] shadow-color-gray-900 rounded-xl ring-1 ring-slate-100 duration-100 overflow-hidden">
                        {/* <Image
                        id='image'
                        src=""
                        alt='Image'
                        style={{ objectFit: "cover" }}
                        fill={true}
                      /> */}
                        <div className="absolute bottom-0 px-6 py-4 group-hover:bottom-2 duration-200">
                          <h3 className="text-xl font-bold text-start pb-2 mb-2 border-b-4 border-b-green-500">{target.name}</h3>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </Section >
          )
        })
      }

      < Section style="black" container={true} >
        <h2 className='text-4xl font-semibold mb-2 text-center'>Nos solutions</h2>
        {/* For each groupedTargets by category, show category name and item list  */}
        < div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 py-12" >
          {
            products.map((product, i) => {
              return (
                <div key={i} className="card text-black group flex h-28 drop-shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)] shadow-color-gray-900 rounded-xl ring-1 ring-slate-100 duration-100 overflow-hidden">
                  {/* <Image
                        id='image'
                        src=""
                        alt='Image'
                        style={{ objectFit: "cover" }}
                        fill={true}
                      /> */}
                  <div className="absolute bottom-0 px-6 py-4 group-hover:bottom-2 duration-200">
                    <h3 className="text-xl font-bold text-start pb-2 mb-2 border-b-4 border-b-green-500">{product.name}</h3>
                  </div>
                </div>
              )
            })
          }
        </div >
      </Section >

    </Fragment >
  )
}

export default Home
