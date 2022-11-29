import Image from "next/image";

type AppIconProps = {
    src: string;
    alt: string;
    className?: string;
};

function AppIcon({ src, alt, className }: AppIconProps) {
    return (
        <div
            className={`h-6 w-6 block relative hover:brightness-125 ${className}`}
        >
            <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        </div>
    );
}

export default AppIcon;
