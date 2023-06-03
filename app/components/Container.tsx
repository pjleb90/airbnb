'use client';

interface ContainerProps {
    children: React.ReactNode;
}

// returns all children listed in the navbar container
const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="
            max-w-[2520px]
            mx-auto
            xl:px-20
            md:px-10
            sm:px-2
            px-4
            ">
            {children}
        </div>
      );
}

export default Container;