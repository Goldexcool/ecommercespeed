"use client";
import { ParallaxScrollSecond } from "../component/ui/ParallelScroll";
import port1 from '../../../public/port1.png';
import port2 from '../../../public/port2.png';
import port3 from '../../../public/port3.png';
import port4 from '../../../public/port4.png';
import port5 from '../../../public/port5.png';
import port6 from '../../../public/port6.png';
import port7 from '../../../public/port7.png';
import port8 from '../../../public/port8.png';
import port9 from '../../../public/port9.png';
import port10 from '../../../public/port10.png';
import port11 from '../../../public/port11.png';
import auto1 from '../../../public/auto1.png';
import auto2 from '../../../public/auto2.png';
import auto3 from '../../../public/auto3.png';
import auto4 from '../../../public/auto4.png';
import auto5 from '../../../public/auto5.png';
import Ecom1 from '../../../public/Ecom1.png';
import Ecom2 from '../../../public/Ecom2.png'
import Ecom3 from '../../../public/Ecom3.png'
import Ecom4 from '../../../public/Ecom4.png'
import Ecom5 from '../../../public/Ecom5.png'
import Ecom6 from '../../../public/Ecom6.png'
import Ecom7 from '../../../public/Ecom7.png'
import Ecom8 from '../../../public/Ecom8.png'
import Ecom9 from '../../../public/Ecom9.png'
import CBD1 from '../../../public/CBD1.png'
import CBD2 from '../../../public/CBD2.png'
import CBD3 from '../../../public/CBD3.png'
import CBD4 from '../../../public/CBD4.png'
import CBD5 from '../../../public/CBD5.png'
import CBD6 from '../../../public/CBD6.png'
import CBD7 from '../../../public/CBD7.png'
import Edu1 from '../../../public/EDU1.png'
import Edu2 from '../../../public/EDU2.png'
import Edu3 from '../../../public/EDU3.png'
import Edu4 from '../../../public/EDU4.png'
import Edu5 from '../../../public/EDU5.png'
import Edu6 from '../../../public/EDU6.png'
import Edu7 from '../../../public/EDU7.png'
import Edu8 from '../../../public/EDU8.png'
import Edu9 from '../../../public/EDU9.png'
import Edu10 from '../../../public/EDU10.png'
import Edu11 from '../../../public/EDU11.png'
import FR1 from '../../../public/FR1.png'
import RE1 from '../../../public/RE1.png'
import RE2 from '../../../public/RE2.png'
import RM3 from '../../../public/RM3.png'
import RM4 from '../../../public/RM4.png'
import RM5 from '../../../public/RM5.png'
import RM6 from '../../../public/RM6.png'
import SF1 from '../../../public/SF1.png'
import SF2 from '../../../public/SF2.png'
import SF3 from '../../../public/SF3.png'
import { Tabs } from "../component/ui/Tabs";

// Define the image arrays at the top level so they can be used in TabsDemo
const beautyImages = [port1, port2, port3, port4, port5, port6, port7, port8, port9, port10, port11];
const AutoImages = [auto1, auto2, auto3, auto4, auto5];
const RealEstateImages = [RE1, RE2, RM3, RM4, RM5, RM6];
const EcommerceImages = [Ecom1, Ecom2, Ecom3, Ecom4, Ecom5, Ecom6, Ecom7, Ecom8, Ecom9];
const CBDImages = [CBD1, CBD2, CBD3, CBD4, CBD5, CBD6, CBD7];
const EducationImages = [Edu1, Edu2, Edu3, Edu4, Edu5, Edu6, Edu7, Edu8, Edu9, Edu10, Edu11,];
const SandFImages = [SF1, SF2, SF3];
const FandRImages = [FR1];



export function ParallaxScrollSecondDemo({ images }: { images: any[] }) {
    return <ParallaxScrollSecond images={images} />;
}

export function TabsDemo() {
    const tabs = [
        {
            title: "Beauty",
            value: "beauty",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-950 to-black">
                    <p>Beauty</p>
                    <ParallaxScrollSecondDemo images={beautyImages} />
                </div>
            ),
        },
        {
            title: "Auto",
            value: "Auto",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-950 to-black">
                    <p>Services</p>
                    <ParallaxScrollSecondDemo images={AutoImages} />
                </div>
            ),
        },
        {
            title: "Real Estate",
            value: "Real Estate",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-950 to-black">
                    <p>Playground</p>
                    <ParallaxScrollSecondDemo images={RealEstateImages} />
                </div>
            ),
        },
        {
            title: "Ecommerce",
            value: "Ecommerce",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-950 to-black">
                    <p>Content</p>
                    <ParallaxScrollSecondDemo images={EcommerceImages} />
                </div>
            ),
        },
        {
            title: "CBD",
            value: "CBD",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-950 to-black">
                    <p>CBD</p>
                    <ParallaxScrollSecondDemo images={CBDImages} />
                </div>
            ),
        },
        {
            title: "Education",
            value: "Education",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-950 to-black">
                    <p>Education</p>
                    <ParallaxScrollSecondDemo images={EducationImages} />
                </div>
            ),
        },
        
    ];

    return (
        <div className="h-[34rem] md:h-[45rem] md:mt-[6rem] mb-[3rem] lg:mt-[7rem] sm:mt-[4rem] mt-[4rem] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start md:px-10 px-5">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-[1rem]">Portfolio</h1>
            <Tabs tabs={tabs} />
        </div>
    );
}
