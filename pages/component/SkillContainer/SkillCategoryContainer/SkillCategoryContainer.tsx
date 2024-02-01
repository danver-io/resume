import React from 'react'
import SkillItem from '@/pages/component/SkillContainer/SkillItem'

export interface IProps {
    className?: string
    title?: string
    children?: any
}

const SkillCategoryContainer: React.FC<IProps> = ({className, title, children}) => {
    return <div className={`grid grid-cols-4 gap-[40px] md:gap-[16px] py-[20px] ${className} md:grid-cols-1`}>
            <p className={'text-[24px] font-medium text-gray-400 text-right md:text-left'}>{title}</p>
            <ul className={'col-span-3 grid grid-cols-3 md:grid-cols-1 gap-1.5 list-disc list-outside'}>
                {children}
            </ul>
        </div>
}

export default SkillCategoryContainer