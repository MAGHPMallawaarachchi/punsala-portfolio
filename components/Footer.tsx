import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className=" flex flex-col py-4 px-6 gap-4">
            <hr></hr>
            <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-2">
                <Image
                    src='/images/Logo.svg'
                    alt='logo'
                    width={100}
                    height={30}
                />
                <div className="gap-4">
                    {NavLinks.map((link) => (
                        <Link key={link.key} href={link.href} className='px-[15px] py-[6px] dark:text-light text-dark uppercase text-xs sm:font-semibold font-medium '>
                            {link.text}
                        </Link>
                    ))}
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-0 gap-8">
                    <p className="uppercase sm:text-xs text-[8px] dark:text-secondary-text text-dark sm:font-semibold font-medium">©2023 Hasini Punsala</p>
                    <p className="uppercase sm:text-xs text-[8px] dark:text-secondary-text text-dark sm:font-semibold font-medium">All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;