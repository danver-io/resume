import React from 'react'
import PageConfig from '@/component/layout/PageConfig'
import PersonalInfoContainer from '@/pages/component/PersonalInfo'
import IntroduceContainer from '@/pages/component/IntroduceContainer'
import Footer from '@/pages/component/Footer'
import SkillContainer from '@/pages/component/SkillContainer/SkillContainer'
import ExperienceContainer from '@/pages/component/ExperienceContainer/ExperienceContainer'
import ProjectContainer from '@/pages/component/ProjectContainer/ProjectContainer'

const HomePage: React.FC = () => {
    return (
        <PageConfig bodyClassName={'max-w-[1140px] mx-auto py-[40px]'}>
            {/* 인적사항 */}
            <PersonalInfoContainer />

            {/* 소개 */}
            <IntroduceContainer className={'mt-20'} />

            {/* 스킬 */}
            <SkillContainer className={'mt-20'} />

            {/* 기업 */}
            <ExperienceContainer className={'mt-20'} />

            {/* 프로젝트 */}
            <ProjectContainer className={'mt-20'} />


            {/* 개인 프로젝트 (사이드 프로젝트 포함) 정맥인식, 슈퍼 마리오 등 */}
            <section className={'grid grid-cols-4 overflow-hidden'}>
            </section>

            {/* 교육 */}
            <section className={'grid grid-cols-4 overflow-hidden'}>
            </section>

            {/* 기타 NOS 6기 */}
            <section className={'grid grid-cols-4 overflow-hidden'}>
            </section>

        </PageConfig>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {},
})

export default HomePage
