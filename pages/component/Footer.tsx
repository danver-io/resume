import React from 'react'

export interface IProps {
    className?: string
}

const Footer: React.FC<IProps> = ({className}) => {
    return <div className={`${className} bg-gray-50 pt-[60px] pb-[20px]`}>
        <div className={'max-w-[1140px] mx-auto '}>
            <p className={'text-[12px] text-gray-500 font-light text-right'}>이 사이트는 아래 오픈소스 템플릿을 참고해서 제작함<br />(https://github.com/uyu423/resume-nextjs)
            </p>
        </div>
    </div>
}

export default Footer