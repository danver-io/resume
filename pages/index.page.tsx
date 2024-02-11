import React from 'react'
import PageConfig from '@/component/layout/PageConfig'
import PersonalInfoContainer from '@/pages/component/PersonalInfo'
import IntroduceContainer from '@/pages/component/IntroduceContainer'
import SkillContainer from '@/pages/component/SkillContainer/SkillContainer'
import ExperienceContainer from '@/pages/component/ExperienceContainer/ExperienceContainer'
import ProjectContainer from '@/pages/component/ProjectContainer/ProjectContainer'
import SideProjectContainer from '@/pages/component/SideProjectContainer/SideProjectContainer'
import EducationContainer from '@/pages/component/EducationContainer/EducationContainer'
import EtcContainer from '@/pages/component/EtcContainer/EtcContainer'

const HomePage: React.FC = () => {
    return (
        <PageConfig bodyClassName={''}>
            <div className={'max-w-[1140px] mx-auto py-[40px]'}>
                {/* 인적사항 */}
                <PersonalInfoContainer />

                {/* 소개 */}
                <IntroduceContainer className={'mt-20'} />

                {/* 스킬 */}
                <SkillContainer className={'mt-20'} />

                {/*/!* 기업 *!/*/}
                <ExperienceContainer className={'mt-20'} />

                {/*/!* 프로젝트 *!/*/}
                <ProjectContainer className={'mt-20'} />

                {/*/!* 개인 프로젝트 (사이드 프로젝트 포함) 정맥인식, 슈퍼 마리오 등 *!/*/}
                <SideProjectContainer className={'mt-20'} />

                {/*/!* 교육 *!/*/}
                <EducationContainer className={'mt-20'}/>

                {/*/!* 기타 *!/*/}
                <EtcContainer className={'mt-20'}/>
            </div>
        </PageConfig>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {},
})

export default HomePage
