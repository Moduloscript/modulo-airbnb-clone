import  Image from "next/image"


function Banner()
{
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
                alt="hero-cover"
            />
            <div className="absolute w-full text-center top-1/2" >
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="px-10 py-4 my-3 font-bold text-purple-500 transition duration-150 bg-white rounded-full shadomax-w-md hover:shadow-xl active:scale-90" >
                    I`m Flexible</button>
            </div>
        </div>
    )
}

export default Banner
