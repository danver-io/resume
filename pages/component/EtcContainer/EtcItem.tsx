import React, {useMemo} from 'react'
import {IExperience} from '@/pages/component/ExperienceContainer/ExperienceContainer'
import {format} from 'date-fns'
import skillItem from '@/pages/component/SkillContainer/SkillItem'
import {IEducation} from '@/pages/component/EducationContainer/EducationContainer'

export interface IProps extends IEducation {
    className?: string
}

const EtcItem: React.FC<IProps> = ({
                                              className,
                                              name,
                                              description,
                                              startAt,
                                              endAt,
                                              contents,
                                          }) => {

    return <div className={`grid grid-cols-4 gap-x-[40px] py-[20px] ${className} md:grid-cols-1`}>
        <div className={'flex flex-col md:flex-row md:justify-between md:items-center'}>
            <p className={'text-[24px] font-medium text-gray-400 text-right md:text-left mt-1'}>{format(startAt, 'yyyy.' +
                ' MM')} ~ {endAt && format(endAt, 'yyyy. MM')}</p>
            <div className={'flex justify-end mt-1 gap-x-1'}>
            </div>
        </div>
        <div className={'col-span-3'}>
            <p className={'text-[28px] font-medium'}>{name}</p>
            <p className={'mt-1 text-[16px] text-fg.muted font-light'}>{description}</p>
            <ul className={'list-disc list-outside mt-5'}>
                {contents?.map(item => <li key={item}
                                           className={'ml-6 text-[16px] text-fg.default font-light'}>{item}</li>)}
            </ul>
        </div>
    </div>
}

export default EtcItem