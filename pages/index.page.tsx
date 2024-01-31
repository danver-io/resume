import React from 'react'
import PageConfig from '@/component/layout/PageConfig'
import Image from 'next/image'
import ProfileImage from '@/public/image/img_profile.png'
import MailIcon from '@/public/svg/ic_mail.svg'
import BlogIcon from '@/public/svg/ic_blog.svg'
import GithubIcon from '@/public/svg/ic_github.svg'
import LinkedInIcon from '@/public/svg/ic_linkedin.svg'
import PersonalInfoContainer from '@/pages/component/PersonalInfo'

const HomePage: React.FC = () => {
    return (
        <PageConfig bodyClassName={'max-w-[1140px] mx-auto py-[40px]'}>

            {/* 인적사항 */}
         <PersonalInfoContainer/>

            {/* 소개 */}
            <section className={'grid grid-cols-4 overflow-hidden'}>
            </section>

            {/* 스킬 */}
            <section className={'grid grid-cols-4 overflow-hidden'}>
            </section>

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


        </PageConfig>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {},
})

export default HomePage
