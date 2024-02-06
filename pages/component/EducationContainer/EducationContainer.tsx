import React from 'react'
import Image from 'next/image'
import signImage from '@/public/image/img_sign.png'
import SkillItem from '@/pages/component/SkillContainer/SkillItem'
import SkillCategoryContainer from '@/pages/component/SkillContainer/SkillCategoryContainer/SkillCategoryContainer'
import DvTooltip from '@/component/tooltip/DvTooltip'
import ExperienceItem from '@/pages/component/ExperienceContainer/ExperienceItem'
import EducationItem from '@/pages/component/EducationContainer/EducationItem'

export interface IProps {
    className?: string
}

export interface IEducation {
    name: string
    description?: string
    startAt: Date
    endAt?: Date
    contents?: string[]
}

const data: IEducation[] = [
    {
        name: '고려대학교 세종캠퍼스',
        description: '컴퓨터정보학과',
        startAt: new Date('2009-03-01'),
        endAt: new Date('2017-02-28'),
    },
    {
        name: '태안 고등학교',
        description: '자연계 졸업',
        startAt: new Date('2007-03-01'),
        endAt: new Date('2009-02-28'),
    },
]

const EducationContainer: React.FC<IProps> = ({className}) => {
    return <div className={`${className} px-[20px] `}>
        <div className={'flex items-center gap-x-4'}>
            <p className={'text-[32px] font-medium text-blue-600'}>EDUCATION</p>
        </div>
        <section className={'mt-[20px] md:mt-[0px] grid divide-y gap-[16px]'}>
            {data?.map(item => <EducationItem {...item} />)}
        </section>
    </div>
}

export default EducationContainer