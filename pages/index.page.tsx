import React from 'react'
import PageConfig from '@/component/layout/PageConfig'
import PersonalInfoContainer from '@/pages/component/PersonalInfo'
import IntroduceContainer from '@/pages/component/IntroduceContainer'
import Footer from '@/pages/component/Footer'
import SkillContainer from '@/pages/component/SkillContainer/SkillContainer'

const HomePage: React.FC = () => {
    return (
        <PageConfig bodyClassName={'max-w-[1140px] mx-auto py-[40px]'}>
            {/* 인적사항 */}
            <PersonalInfoContainer />

            {/* 소개 */}
            <IntroduceContainer className={'mt-20'}/>

            {/* 스킬 */}
            <SkillContainer className={'mt-20'}/>

            {/* 기업 */}
            <section className={'grid grid-cols-4 overflow-hidden'}>
            </section>

            {/* 프로젝트 */}
            <section className={'grid grid-cols-4 overflow-hidden'}>
            </section>


            {/* 사이드 프로젝트 */}
            <section className={'grid grid-cols-4 overflow-hidden'}>
            </section>

            {/* 교육 */}
            <section className={'grid grid-cols-4 overflow-hidden'}>
            </section>

            {/* 기타 */}
            <section className={'grid grid-cols-4 overflow-hidden'}>
            </section>

            {/* Footer (출처) */}
            <Footer className={'hidden'}/>

        </PageConfig>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {},
})

export default HomePage
