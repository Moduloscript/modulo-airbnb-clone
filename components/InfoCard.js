import Image from "next/image"
import {HeartIcon} from "@heroicons/react/outline"
import {StarIcon} from "@heroicons/react/solid"


function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="flex px-2 pr-4 transition duration-200 cursor-pointer borde-b ease-:out first:border-t py-7 hover:opacity-80 hover:shadow-lg" >
            <div className="relative flex-shrink-0 w-40 h-24 md:h-52 md:w-80">
            <Image src={img}
                layout='fill'
                objectFit="cover"
                    alt="focus images"
                className="rounded-full"    
                />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="cursor-pointer h-7 " />
                    
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="w-10 pt-2 border-b " />
                <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>
                <div className="flex items-end justify-between pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                    <div>
                        <p className="pb-2 text-lg font-semibold lg:text-2xl">{ price}</p>
                        <p className="text-right font-extralight">{total }</p>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default InfoCard
