import React from 'react'

export interface IProps {
    className?: string
}

const Footer: React.FC<IProps> = ({className}) => {
    return <div className={`${className} bg-gray-100`}>
        출처 : yowu
    </div>
}

export default Footer