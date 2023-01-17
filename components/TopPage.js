import { useEffect } from 'react'
import Image from 'next/image'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TopPage = ({ image, title, blur, children, height, alt }) => {

    const handleScroll = (e) => {
        const title = document.getElementById('title');
        const image = document.getElementById('image');
        if (image)
            image.style.transform = `translateY(${window.scrollY / 6}px)`;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className={classNames(!image ? "bg-green-700" : "", "flex relative w-150 h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] justify-center overflow-hidden mb-8")}>
            {image &&
                (<Image
                    id='image'
                    src={image}
                    alt={alt ?? 'Image'}
                    style={{ objectFit: "cover", filter: blur ?? "blur(8px)", zIndex: 0 }}
                    fill={true}
                    priority
                />)}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70"></div>
            <div className="absolute mx-auto sm:px-6 lg:px-8 px-20 container h-full pb-10 flex flex-row items-center justify-center lg:justify-start w-full">
                {title &&
                    (<h1 id="title" className="text-5xl font-extrabold text-white lg:text-left text-center bg-green-800 p-5">
                        {title}
                    </h1>)}
                {children}
            </div>
            <div className="absolute w-screen h-1/4 -bottom-[14%] skew-y-[1.3deg] bg-gray-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"></div>
            <div className="absolute w-screen h-1/4 -bottom-[17%] -skew-y-[1.6deg] bg-gray-50 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"></div>
        </div>
    )
}


export default TopPage