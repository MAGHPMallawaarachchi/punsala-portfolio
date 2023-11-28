'use client';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div 
        className='mx-auto max-w-7xl py-14 px-6 sm:px-12 lg:px-20 lg:py-32'>
            {children}
        </div>
    );
}

export default Container;
