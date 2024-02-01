import React from 'react'
import Image from 'next/image'
import signImage from '@/public/image/img_sign.png'
import SkillItem from '@/pages/component/SkillContainer/SkillItem'
import SkillCategoryContainer from '@/pages/component/SkillContainer/SkillCategoryContainer/SkillCategoryContainer'
import DvTooltip from '@/component/tooltip/DvTooltip'

export interface IProps {
    className?: string
}

interface ISkillCategory {
    label: string
    items?: ISkillItem[]
}

interface ISkillItem {
    label: string
    level?: number
}

const data: ISkillCategory[] = [
    {
        label: 'Languages', items: [
            {label: 'TypeScript', level: 3},
            {label: 'JavaScript', level: 3},
            {label: 'Kotlin', level: 3},
            {label: 'Go', level: 3},
            {label: 'Java', level: 3},
            {label: 'Python', level: 2},
            {label: 'C/C++', level: 2},
            {label: 'PHP', level: 2},
        ],
    },
    {
        label: 'Framework & Libraries', items: [
            {label: 'Next.js', level: 3},
            {label: 'React.js', level: 3},
            {label: 'React Native', level: 3},
            {label: 'Android', level: 3},
            {label: 'Vue.js', level: 2},
            {label: 'Serverless', level: 2},
            {label: 'Django', level: 2},
            {label: 'Svelte', level: 1},
            {label: 'TailwindCSS'},
        ],
    },
    {
        label: 'Infrastructure & Databases', items: [
            {label: 'AWS'},
            {label: 'Vercel'},
            {label: 'Nginx'},
            {label: 'MongoDB'},
            {label: 'PostgreSQL'},
            {label: 'MySQL'},
            {label: 'Redis'},
            {label: 'Docker'},
        ],
    },
    {
        label: 'Tools & IDE', items: [
            {label: 'Github'},
            {label: 'CircleCI'},
            {label: 'IDEA'},
            {label: 'Jira'},
            {label: 'Confluence'},
        ],
    },
    {
        label: 'Etc', items: [
            {label: 'Ubuntu'},
            {label: 'CentOS'},
        ],
    },
]

const SkillContainer: React.FC<IProps> = ({className}) => {
    return <div className={`${className} px-[20px] `}>
        <div className={'flex items-center gap-x-4'}>
            <p className={'text-[32px] font-medium text-blue-600'}>SKILL</p>
            <DvTooltip render={<button className={'bg-gray-400 min-w-[25px] min-h-[25px] rounded-full  font-bold' +
                ' text-white'}>?</button>}>
                1 : 기초 수준<br />
                2: 취미 개발 수준<br />
                3: Production 개발 가능 수준
            </DvTooltip>
        </div>
        <section className={'mt-[20px] grid divide-y gap-[16px]'}>
            {data?.map(category => <SkillCategoryContainer title={category?.label} key={category?.label}>
                {category.items?.map(item => <SkillItem key={item?.label} label={item?.label} level={item?.level} />)}
            </SkillCategoryContainer>)}
        </section>
    </div>
}

export default SkillContainer