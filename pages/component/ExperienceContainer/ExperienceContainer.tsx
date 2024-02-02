import React from 'react'
import Image from 'next/image'
import signImage from '@/public/image/img_sign.png'
import SkillItem from '@/pages/component/SkillContainer/SkillItem'
import SkillCategoryContainer from '@/pages/component/SkillContainer/SkillCategoryContainer/SkillCategoryContainer'
import DvTooltip from '@/component/tooltip/DvTooltip'
import ExperienceItem from '@/pages/component/ExperienceContainer/ExperienceItem'

export interface IProps {
    className?: string
}

export interface IExperience {
    name: string
    description?: string
    isWorkingNow?: boolean
    startAt: Date
    endAt?: Date
    skillTags?: string[]
    contents?: string[]
}

const data: IExperience[] = [
    {
        name: '위즈페이스 (Wizpace)',
        description: '프론트 개발 팀장',
        startAt: new Date('2019-09-01'),
        endAt: new Date('2023-09-26'),
        skillTags: ['React Native', 'React.js', 'Go', 'TypeScript', 'JavaScript', 'Jira', 'Notion', 'Svelte'],
        contents: [
            '가상자산 소셜 트레이딩 플랫폼 (16명, 개발팀 9명)',
            '리그오브트레이더스 서비스의 초기 멤버로 시작',
            'Android 앱 개발자로 시작해서 React Native, React 커리어 확장',
            '주니어 개발자도 개발/유지보수에 능동적으로 참여할 수 있도록 프로젝트 관리',
            '멤버들과 함께 총 340만 달러 투자 유치',
        ],
    },
    {
        name: '인플랩 (INPLAB)',
        description: '리드 개발자',
        startAt: new Date('2018-11-01'),
        endAt: new Date('2019-06-30'),
        skillTags: [
            'Python', 'Django', 'Android',
        ],
        contents: [
            '소셜 게임 제작, 정부 프로젝트 수주 스타트업 (6명, 개발팀 2명)',
            '초기 멤버로 시작, 게임 행사 진행에 필요한 웹 게임 제작',
        ],
    },
    {
        name: '플로언스 (FlowNS)',
        description: '안드로이드 앱 개발자',
        startAt: new Date('2017-07-01'),
        endAt: new Date('2018-07-31'),
        skillTags: [
            'Android', 'PHP', 'PostgreSQL', 'AWS', 'Jira',
        ],
        contents: [
            '공사 중개 플랫폼 스타트업 (20명, 개발팀 5명)',
            '초기 멤버로 시작, 투자 유치를 위한 MVP 앱 제작',
            'AWS 인프라 구축 및 관리',
        ],
    },
]

const ExperienceContainer: React.FC<IProps> = ({className}) => {
    return <div className={`${className} px-[20px] `}>
        <div className={'flex items-center gap-x-4'}>
            <p className={'text-[32px] font-medium text-blue-600'}>EXPERIENCE</p>
        </div>
        <section className={'mt-[20px] md:mt-[0px] grid divide-y gap-[16px]'}>
            {data?.map(item => <ExperienceItem {...item} />)}
        </section>
    </div>
}

export default ExperienceContainer