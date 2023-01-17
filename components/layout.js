import Navbar from './Navbar'
import Footer from './Footer'
import { Fragment } from 'react'

export default function Layout({ children }) {
    return (
        <Fragment>
            <Navbar />
            <main className="bg-gray-50 min-h-screen">{children}</main>
            <Footer />
        </Fragment>
    )
}