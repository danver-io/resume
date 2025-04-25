import ExperienceItem from '@/pages/component/ExperienceContainer/ExperienceItem'
import React from 'react'

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
        name: '돌봄드림',
        description: '프론트 개발',
        startAt: new Date('2024-03-04'),
        endAt: new Date('2024-09-13'),
        skillTags: ['React.js', 'TypeScript'],
        contents: [
            '스마트 의류 기반의 케어 기술을 개발하는 팀에서 프론트엔드 개발 담당 (10명, 개발팀 4명)',
            '발달장애인의 정서 안정을 위한 스마트조끼 HUGGY의 앱 및 웹 유지보수',
            '돌봄조끼 클로멘탈 웹 서비스 개발 및 개선',
            'AI 학습에 집중하기 위해 퇴사',
        ],
    },
    {
        name: '위즈페이스 (Wizpace)',
        description: '프론트 개발 팀장',
        startAt: new Date('2019-09-01'),
        endAt: new Date('2023-09-26'),
        skillTags: ['React Native', 'React.js', 'Golang', 'TypeScript', 'JavaScript', 'Jira', 'Notion', 'Svelte', 'Android', 'Kotlin'],
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
            '소셜 게임 제작 스타트업 (4명, 개발팀 1명)',
            '정부지원사업으로부터 1억원을 지급받아 지인들과 함께 창업',
            '초기 멤버로 시작, 게임 행사 진행에 필요한 웹 게임 제작',
            '이후 정부 프로젝트 수주 업체로 피봇팅하며 사무실을 경북 구미로 이전',
        ],
    },
    {
        name: '플로언스 (FlowNS)',
        description: '안드로이드 앱 개발자',
        startAt: new Date('2017-07-01'),
        endAt: new Date('2018-07-31'),
        skillTags: [
            'Android', 'PHP', 'PostgreSQL', 'AWS', 'Jira', 'Django'
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
            {data?.map(item => <ExperienceItem key={item?.name} {...item} />)}
        </section>
    </div>
}

export default ExperienceContainer