import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import { useRouter } from 'next/router'
import services from '../json/services.json'
import Link from 'next/link'
import InterventionForm from './InterventionForm'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {

    const router = useRouter();

    let [menuIsOpen, setMenuIsOpen] = useState(false);
    let [navigation, setNavigation] = useState([]);
    let [dropdown, setDropdown] = useState(false);
    let [currentPage, setCurrentPage] = useState('/' + (router.asPath.split('/')[1] || ''));

    useEffect(() => {
        setDropdown(false);
        setCurrentPage('/' + (router.asPath.split('/')[1] || ''));
    }, [router.asPath])

    useEffect(() => {
        let nav = [
            { name: 'Accueil', href: '/' },
        ]
        let children = []

        services.slice(0, 3).map((service) => {
            nav.push({ name: service.name, href: `/${service.slug}` })
        })
        services.slice(3).map((service) => {
            children.push({ name: service.name, href: `/${service.slug}` })
        })
        nav.push({ name: 'Tous nos services', children })
        setNavigation(nav)
    }, [])

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }

    const closeDropdown = () => {
        setTimeout(() => {
            setDropdown(false)
        }, 150)
    }

    return (

        <nav id="header" className="sticky bg-white/75 text-gray-900 w-full z-50 backdrop-blur-xl top-0">
            <div className="w-full md:max-w-5xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
                <Link href="/">
                    <Image src={logo} alt="Logo" width={100} height={100} />
                </Link>
                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" className="flex items-center px-3 py-2 text-green-700 border-gray-600 focus:outline-none" onClick={toggleMenu}>
                        <svg fill="text-green-700" viewBox="0 0 20 20" className="w-6 h-6 fill-current">
                            <title>Menu</title>
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className={classNames(menuIsOpen ? "" : "hidden", "w-full flex-grow p-4 lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 z-20 h-[99vh] lg:h-auto")}
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-center flex-1 items-center relative">
                        {navigation.map((item) => (
                            <li className="mr-3 w-full lg:w-auto text-center" key={item.name}>
                                {item.children ? (
                                    <div className="relative">
                                        <div>
                                            <button type="button"
                                                onFocus={toggleDropdown}
                                                onBlur={closeDropdown}
                                                className={
                                                    classNames(
                                                        "border-0 md:border-b-4 border-transparent border-b-transparent hover:border-b-green-500/60 hover:text-green-700 py-2 px-3",
                                                        dropdown ?
                                                            "border-0 md:border-b-4 border-transparent border-b-green-500 hover:border-b-green-500 text-green-700" :
                                                            ""
                                                    )
                                                }
                                            >
                                                {item.name}
                                            </button>
                                        </div>
                                        <div className={
                                            classNames(
                                                dropdown ? "" : "hidden",
                                                "origin-top-left absolute w-full lg:w-56 lg:ml-[-28px] shadow-lg rounded bg-white focus:outline-none"
                                            )}
                                        >
                                            <div className='mt-1'>
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={item.name + '-' + child.name}
                                                        href={child.href}
                                                        className="block px-3 py-5 border-l-0 md:border-l-4 border-l-transparent hover:border-l-green-500 hover:text-green-700"
                                                    >{child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        key={item.name}
                                        className={
                                            classNames(
                                                "border-0 md:border-b-4 border-transparent inline-block py-2 px-3",
                                                (currentPage === item.href) ?
                                                    "border-0 md:border-b-4 border-transparent border-b-green-500 hover:border-b-green-500 text-green-700 font-semibold" :
                                                    "border-b-transparent hover:border-b-green-500/60 hover:text-green-700"
                                            )
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                        {/* Divider */}
                        <li className='block lg:hidden mt-4 mb-6'>
                            <div className='h-[1px] w-10px bg-gray-300'></div>
                        </li>
                        <li className='block lg:hidden text-center'>
                            <h3 className='mb-4 font-semibold'>Besoin d'une réponse rapide ?</h3>
                            <a className="inline-block py-2 px-3 rounded-lg bg-green-200 hover:bg-green-800 duration-100 font-semibold text-green-800 hover:text-green-100" href='tel:06.01.02.03.04'>
                                <div>
                                    Appelez-nous au 06.01.02.03.04
                                </div>
                            </a>

                            <p className='my-5'>ou</p>

                            <button className="bg-orange-500 hover:bg-orange-700 duration-100 py-2 px-3 rounded-lg text-lg font-semibold text-white mt-5" onClick={InterventionForm}>
                                Demander une intervention
                            </button>

                        </li>
                    </ul>
                    {/* <a className="inline-flex justify-center rounded-lg text-sm font-bold py-3.5 px-4 bg-slate-100 text-gray-700 hover:bg-slate-200 -my-2.5 ml-4 cursor-pointer" href='tel:06.02.03.04.05'>
                        <div className='ml-2 lg:block text-[18px]' >
                        06.02.03.04.05
                        </div>
                    </a> */}
                </div>
                <a className="hidden lg:inline-block mb-1 py-2 px-3 rounded-lg bg-green-200 hover:bg-green-800 duration-100 font-semibold text-green-800 hover:text-green-100" href='tel:06.01.02.03.04'>
                    <div>
                        06.01.02.03.04
                    </div>
                </a>
            </div>
        </nav >

    )
}
