function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Section({ children, style, container = false }) {
    return (
        <section className={classNames(style === 'black' ? 'bg-gray-700 text-white' : 'bg-gray-50', "flex relative w-full items-center justify-between py-10 md:justify-center overflow-x-hidden")}>
            <div className={classNames(container ? "container" : "", "z-30 py-5 mx-auto sm:px-6 lg:px-8 px-20")}>
                <div className="px-6">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Section
