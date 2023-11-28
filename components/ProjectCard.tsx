import { ProjectData } from "@/constants";
import Image from "next/image";
import Button from "./Button";

type Props = {
    name: string
    category: string
    description: string
    link: string
    image: string
    techStack: string[]
};

const ProjectCard = ({name, category, description, link, image, techStack}:Props) => {
    return(
        <div className="flex lg:flex-row flex-col lg:gap-[60px] gap-5 items-center w-[95%]">
            <Image src={image} width={440} height={100} alt={name} className='rounded-2xl lg:w-[40%] w-full' />
            <div className="flex flex-col items-start lg:gap-10 gap-5">
                <div className='flex flex-col items-start gap-1'>
                    <h4 className=' dark:text-secondary-text text-dark text-sm sm:text-xl leading-none'>{category}</h4>
                    <h1 className='dark:text-light text-dark sm:text-[40px] tracking-[2px] text-2xl leading-none'>{name}</h1>
                </div>
                <p className="sm:text-xl text-sm dark:text-secondary-text text-dark lg:leading-9 leading-6">{description}</p>
                <ul className="flex lg:flex-row flex-wrap gap-4">
                    {techStack.map((tech, techIndex) => (
                        <li key={techIndex}>
                            <span>{tech}</span>
                            {techIndex < techStack.length - 1 && <span className="ml-4"> | </span>}
                        </li>
                    ))}
                </ul>
                <Button text='view project' color='blue' link={link}></Button>
            </div>
        </div>
    )
}

export default ProjectCard;