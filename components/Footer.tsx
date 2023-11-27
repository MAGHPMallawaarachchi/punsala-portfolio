import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className=" flex flex-col py-4 px-6 gap-4">
            <hr></hr>
            <div className="flex justify-between items-center">
                <Image
                    src='/images/Logo.svg'
                    alt='logo'
                    width={100}
                    height={30}
                />
                <div className="gap-4">
                    {NavLinks.map((link) => (
                        <Link key={link.key} href={link.href} className='px-[15px] py-[6px] dark:text-light text-dark uppercase text-xs '>
                            {link.text}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col">
                    <p className="uppercase text-xs dark:text-secondary-text text-dark">©2023 Hasini Punsala</p>
                    <p className="uppercase text-xs dark:text-secondary-text text-dark">All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;