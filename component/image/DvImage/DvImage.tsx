import React from 'react'
import Image from 'next/image'

export interface IProps {
    className?: string
    imageClassName?: string
    src?: any
    alt?: string
}

const DvImage: React.FC<IProps> = ({className, imageClassName, src, alt = 'img'}) => {
    return <div className={`${className}`}>
        <Image className={`${imageClassName}`} src={src} alt={alt}></Image>
    </div>
}

export default DvImage