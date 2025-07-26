"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CustomImage = ({
  src,
  alt,
  fill,
  width,
  height,
  className,
  style,
  ...props
}: Props) => {
  const [isloading, setIsLoading] = useState(true);
  return (
    <>
      {fill ? (
        <Image
          {...props}
          src={src}
          alt={alt}
          fill
          className={`object-contain duration-200 ease-in-out group-hover:opacity-75 ${className} 
            ${
              isloading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            }
            
        `}
          onLoad={() => setIsLoading(false)}
          style={style}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`object-contain duration-200 ease-in-out group-hover:opacity-75 ${className} 
            ${
              isloading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            }
        
        `}
          onLoad={() => setIsLoading(false)}
          style={style}
        />
      )}
    </>
  );
};

export default CustomImage;
