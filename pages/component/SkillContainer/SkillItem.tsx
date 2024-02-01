import React from 'react'

export interface IProps {
    className?: string
    level?: number
    label?: string
}

const LevelClassMap = new Map<number, string>([
    [1, 'text-fg.default font-semibold bg-gray-100'],
    [2, 'text-white font-semibold bg-gray-500'],
    [3, 'text-white font-semibold bg-blue-500'],
])


const SkillItem: React.FC<IProps> = ({className, label, level}) => {

    return <li className={`${className} ml-6`}>
        {level && <span className={`${LevelClassMap?.get(level)} mr-1.5 rounded-full text-[12px] px-[6px] py-[2px]`}>{level}</span>}
        <span className={'text-body.large font-light text-fg.default'}>{label}</span>
    </li>
}

export default SkillItem