import React, {useMemo} from 'react'
import {IExperience} from '@/pages/component/ExperienceContainer/ExperienceContainer'
import {format} from 'date-fns'
import skillItem from '@/pages/component/SkillContainer/SkillItem'
import {IProject} from '@/pages/component/ProjectContainer/ProjectContainer'
import {isNotEmpty} from '@/util/strings'
import Link from 'next/link'
import {Button} from '@danver-io/danver-design-system'

export interface IProps extends IProject {
    className?: string
}

// todo Description을 추가해줘도 되겠다 상황 설명이나 프로젝트에 대한 문단을 쓸 수 있게.
const ProjectItem: React.FC<IProps> = ({
                                           className,
                                           name,
                                           company,
                                           startAt,
                                           endAt,
                                           contents,
                                           articleURL,
                                           serviceURL,
                                       }) => {

    return <div className={`grid grid-cols-4 gap-x-[40px] py-[20px] ${className} md:grid-cols-1`}>
        <div className={'flex flex-col md:flex-row md:justify-between md:items-center'}>
            <p className={'text-[24px] font-medium text-gray-400 text-right md:text-left mt-1'}>{format(startAt, 'yyyy.' +
                ' MM')} ~ {endAt && format(endAt, 'yyyy. MM')}</p>
        </div>
        <div className={'col-span-3'}>
            <div className={'gap-x-1'}>
                <span className={'text-[28px] font-medium align-middle mr-1.5'}>{name}</span>
                {isNotEmpty(serviceURL) &&
                    <Link href={serviceURL} className={'inline-block align-middle mx-0.5'} target="_blank"><Button
                        label={'서비스'} variant={'primary'}
                        size={'small'} /></Link>}
                {isNotEmpty(articleURL) &&
                    <Link href={articleURL} className={'inline-block align-middle mx-0.5'} target="_blank"><Button
                        label={'게시글'}
                        size={'small'} /></Link>}
            </div>
            <p className={'mt-1 text-[16px] text-fg.muted font-light'}>{company}</p>
            <div className={'mt-3'}>
                {contents}
            </div>
        </div>
    </div>
}

export default ProjectItem