import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Section from '../../components/Section'
import TopPage from '../../components/TopPage'
import placeholderImg from '../../public/logo.jpg'


export async function getStaticPaths() {
    const res_services = await fetch('http://localhost:3000/api/services')
    const services = await res_services.json()

    const paths = services.reduce((acc, service) => {
        acc.push({
            params: { service: service.slug.toString() },
        })
        return acc
    }, [])

    return { paths, fallback: false }
}

export async function getStaticProps(context) {

    const { service } = context.params;
    const res_service = await fetch(`http://localhost:3000/api/services/${service}`)
    const res_departments = await fetch('http://localhost:3000/api/departments?short=true')
    const services = await res_service.json()
    const departments = await res_departments.json()

    return {
        props: { service: services, departments: departments },
    }
}

const Service = ({ service, departments }) => {

    return (
        <>
            <Head>
                <title>DSTR 3D - Nos services</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Generated by create next app" />
            </Head>

            <TopPage image={placeholderImg} title={`Nos services de ${service.name}`} />
            <Section style="bg-green-500" container={true}>
                <div className="grid grid-cols-1 skew-y-0 gap-7 w-full font-semibold mb-2 text-black text-justify">
                    {service.landing && service.landing.blocs.map((bloc, i) => {
                        if (bloc.tag == 'h1') return (<h1 key={i} className="block text-4xl text-left py-8 mb-4 border-b-4 border-b-green-500" dangerouslySetInnerHTML={{ __html: bloc.content }}></h1>)
                        if (bloc.tag == 'h2') return (<h2 key={i} className="block text-2xl text-left" dangerouslySetInnerHTML={{ __html: bloc.content }}></h2>)
                        if (bloc.tag == 'p') return (<p key={i} className="" dangerouslySetInnerHTML={{ __html: bloc.content }}></p>)
                        if (bloc.tag == 'ul')
                            return (
                                <ul key={i} style={{ listStyle: 'inside' }}>
                                    {bloc.content.map((li, i) => {
                                        return (<li key={i}>{li}</li>)
                                    })}
                                </ul>
                            )
                    })}
                </div>
            </Section>
            <Section style="" container={true}>
                <h2 className='text-4xl py-7 border-b-2 border-b-green-500'>Retrouvez nous près de chez vous </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 py-12">
                    {departments.length ? departments.map((department, i) => {
                        return (
                            <Link href={`/${service.slug}/${department.slug}`} key={department.slug}>
                                <div className="card group flex h-52 drop-shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.05)] shadow-color-gray-900 rounded-xl ring-1 ring-slate-100 duration-100 overflow-hidden">
                                    <Image
                                        id='image'
                                        src={`/images/${department.slug}_${department.cities[0].slug}.png`}
                                        alt='Image'
                                        style={{ objectFit: "cover" }}
                                        fill={true}
                                    />
                                    <div className="absolute bottom-0 px-6 py-4 group-hover:bottom-2 duration-200">
                                        <h3 className="text-2xl font-bold text-start pb-2 mb-2 border-b-4 border-b-green-500">{department.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    }) : ""
                    }
                </div>
            </Section>
        </ >
    )
}

export default Service
