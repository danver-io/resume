import React from 'react'
import Image from 'next/image'
import signImage from '@/public/image/img_sign.png'
import SkillItem from '@/pages/component/SkillContainer/SkillItem'
import SkillCategoryContainer from '@/pages/component/SkillContainer/SkillCategoryContainer/SkillCategoryContainer'
import DvTooltip from '@/component/tooltip/DvTooltip'
import ExperienceItem from '@/pages/component/ExperienceContainer/ExperienceItem'
import EducationItem from '@/pages/component/EducationContainer/EducationItem'
import EtcItem from '@/pages/component/EtcContainer/EtcItem'

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
        name: 'Nexon 대학생 알고리즘 대회',
        description: '전체 6위',
        startAt: new Date('2014-07-01'),
        endAt: new Date('2014-08-31'),
    },
]

const EtcContainer: React.FC<IProps> = ({className}) => {
    return <div className={`${className} px-[20px] `}>
        <div className={'flex items-center gap-x-4'}>
            <p className={'text-[32px] font-medium text-blue-600'}>ETC</p>
        </div>
        <section className={'mt-[20px] md:mt-[0px] grid divide-y gap-[16px]'}>
            {data?.map(item => <EtcItem {...item} />)}
        </section>
    </div>
}

export default EtcContainer