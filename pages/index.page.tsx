import React from 'react'
import PageConfig from '@/component/layout/PageConfig'
import Image from 'next/image'
import ProfileImage from '@/public/image/img_profile.png'


const HomePage: React.FC = () => {
    return (
        <PageConfig bodyClassName={'max-w-[1140px] mx-auto py-[40px]'}>

            {/* 인적사항 */}
            <section className={'grid grid-cols-4 overflow-hidden'}>
                <Image src={ProfileImage} alt={'프로필 이미지'} className={'px-[20px]'} />
                <div className={'grid-cols-3 px-[20px]'}>
                    <p>김지식</p>

                    {/* 이메일 */}
                    {/* 연락처 - 이메일로 연락주세요 */}
                    {/* 블로그 주소 */}
                    {/* 깃허브 주소 */}
                    {/* 링크드인 주소 */}

                    {/* 휴대전화가 아닌 이메일로 연락 부탁드립니다. */}
                </div>
            </section>

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
