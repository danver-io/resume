import React, {useMemo} from 'react'
import {IExperience} from '@/pages/component/ExperienceContainer/ExperienceContainer'
import {format} from 'date-fns'
import skillItem from '@/pages/component/SkillContainer/SkillItem'
import {IProject} from '@/pages/component/ProjectContainer/ProjectContainer'

export interface IProps extends IProject {
    className?: string
}

const ProjectItem: React.FC<IProps> = ({
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
        </div>
        <div className={'col-span-3'}>
            <p className={'text-[28px] font-medium'}>{name}</p>
            <p className={'mt-1 text-[16px] text-fg.muted font-light'}>{description}</p>
            <div className={'mt-3'}>
                {contents}
            </div>
        </div>
    </div>
}

export default ProjectItem