import React from 'react'
import Image from 'next/image'
import signImage from '@/public/image/img_sign.png'
import SkillItem from '@/pages/component/SkillContainer/SkillItem'
import SkillCategoryContainer from '@/pages/component/SkillContainer/SkillCategoryContainer/SkillCategoryContainer'
import DvTooltip from '@/component/tooltip/DvTooltip'
import ExperienceItem from '@/pages/component/ExperienceContainer/ExperienceItem'
import ProjectItem from '@/pages/component/ProjectContainer/ProjectItem'

export interface IProps {
    className?: string
}

export interface IProject {
    name: string
    description?: string
    startAt: Date
    endAt?: Date
    contents?: React.ReactNode
}

const contentStyle = 'list-disc list-outside mt-4'
const itemStyle = 'ml-6 text-[16px] text-fg.default font-light'

const data: IProject[] = [
    {
        name: '공사중개 플랫폼 MVP 버전 개발',
        description: '플로언스 (FlowNS)',
        startAt: new Date('2017-07-01'),
        endAt: new Date('2017-12-31'),
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>Android 앱 개발 담당</li>
                <li className={`${itemStyle}`}>초기 개발팀 3명 모두가 주니어 개발자라서, 백엔드 역시 함께 논의하며 개발</li>
                <li className={`${itemStyle}`}>Nginx, PHP, PostgreSQL 등을 사용하여 서비스 개발</li>
                <li className={`${itemStyle}`}>디자이너와 기획자 역시 모바일 앱 개발은 처음이라서 서로 소통하며 협업</li>
            </ul>
        </>,
    },
    {
        name: '공사중개 플랫폼 공사PD의 정식 버전 개발',
        description: '플로언스 (FlowNS)',
        startAt: new Date('2018-01-01'),
        endAt: new Date('2018-07-31'),
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>Android 앱 개발 담당</li>
                <li className={`${itemStyle}`}>주니어 개발자를 채용해서 함께 개발, 가르치면서 개발적인 협업에 대해 배울 수 있었던 기회 (Git, 코드 관리 등)</li>
                <li className={`${itemStyle}`}>이해하기 쉬운 일관된 구조를 갖기 위해 MVVM 아키텍처 적용</li>
            </ul>
        </>,
    },
    {
        name: '빅게임, 소수의 지배 서비스 개발',
        description: '인플랩 (INPLAB)',
        startAt: new Date('2018-12-01'),
        endAt: new Date('2019-01-31'),
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>프론트는 Django를 사용해 모바일 웹과 백엔드 개발</li>
                <li className={`${itemStyle}`}>백엔드는 Python, Django, Nginx, MySQL로 구성</li>
            </ul>
        </>,
    },
    {
        name: '빅게임, 보물찾기 개발',
        description: '인플랩 (INPLAB)',
        startAt: new Date('2019-02-01'),
        endAt: new Date('2019-04-31'),
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>오프라인 보물찾기 행사에서 활용하는 모바일 웹과 백엔드 전체 개발</li>
                <li className={`${itemStyle}`}>외부 퍼블리셔와 협업</li>
            </ul>
        </>,
    },
    {
        name: 'League of Traders 안드로이드 앱 개발 및 개선',
        description: '위즈페이스 (Wizpace)',
        startAt: new Date('2019-09-01'),
        endAt: new Date('2022-06-30'),
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>개발 초기단계에 합류하여 개발 시작</li>
                <li className={`${itemStyle}`}>기획자를 채용하지 않고, 트레이딩에 관심있는 팀원들이 끊임없이 아이디어를 제시하며 프로젝트를 개선</li>
                <li className={`${itemStyle}`}>개발 효율성을 위해 CI/CD 적용</li>
            </ul>
        </>,
    },
    {
        name: 'League of Traders 관리자 페이지 개발',
        description: '위즈페이스 (Wizpace)',
        startAt: new Date('2020-07-01'),
        endAt: new Date('2020-08-31'),
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>관리자 페이지가 없어 개발자에게 끊임없이 요청이 오는 상황에서 필요성을 느꼈고 개발 필요성을 어필</li>
                <li className={`${itemStyle}`}>React에 대한 경험이 없는 상황이었지만, 내부 웹개발자의 도움을 받아 직접 개발</li>
            </ul>
        </>,
    },
    {
        name: 'League of Traders 앱을 React Native 로 개발',
        description: '위즈페이스 (Wizpace)',
        startAt: new Date('2022-01-01'),
        endAt: new Date('2022-08-30'),
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>Android로 개발되어있던 앱을 React Native로 재개발 <br/> (이유 : iOS 개발자 채용의 어려움, 생산성, Code Push로 업데이트의 불편함 제거)</li>
                <li className={`${itemStyle}`}>개발 생산성을 위해 처음으로 디자인 시스템을 적용</li>
                <li className={`${itemStyle}`}>주니어 개발자가 프로젝트를 관리할 수 있도록 교육 (코드 리뷰, issue 분리, 능동적인 학습 유도)</li>
            </ul>
        </>,
    },
    {
        name: 'League of Traders 웹 개발',
        description: '위즈페이스 (Wizpace)',
        startAt: new Date('2022-09-01'),
        endAt: new Date('2023-06-30'),
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>서비스 성공을 위해 반드시 필요한 웹 개발의 지속적인 실패가 이어지자 직접 개발</li>
                <li className={`${itemStyle}`}>주니어 개발자도 쉽게 개발 및 유지보수를 할 수 있도록 이해하기 쉬운 코드 구조로 개발</li>
                <li className={`${itemStyle}`}>CI/CD 적용 (Github Actions, Docker, AWS ECS)</li>
            </ul>
        </>,
    },
]

const ProjectContainer: React.FC<IProps> = ({className}) => {
    return <div className={`${className} px-[20px] `}>
        <div className={'flex items-center gap-x-4'}>
            <p className={'text-[32px] font-medium text-blue-600'}>PROJECT</p>
        </div>
        <section className={'mt-[20px] md:mt-[0px] grid divide-y gap-[16px]'}>
            {data?.reverse().map(item => <ProjectItem {...item} />)}
        </section>
    </div>
}

export default ProjectContainer