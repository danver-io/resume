import React from 'react'
import Image from 'next/image'
import ProfileImage from '@/public/image/img_profile.png'
import MailIcon from '@/public/svg/ic_mail.svg'
import BlogIcon from '@/public/svg/ic_blog.svg'
import GithubIcon from '@/public/svg/ic_github.svg'
import LinkedInIcon from '@/public/svg/ic_linkedin.svg'
import DvImage from '@/component/image/DvImage/DvImage'

export interface IProps {
    className?: string
}

const PersonalInfoContainer: React.FC<IProps> = ({className}) => {
    return <div className={`${className}`}>
        <section className={'grid grid-cols-4 overflow-hidden md:grid-cols-1 gap-y-4'}>
            <div className={'flex md:justify-center'}>
                <DvImage src={ProfileImage} alt={'프로필 이미지'} className={'px-[20px] md:max-w-[260px]'} />
            </div>
            <div className={'col-span-3 md:col-span-1 px-[20px]'}>
                <p className={'text-[40px] font-bold md:text-center'}>김지식</p>

                {/* 이메일 */}
                <div className={'flex gap-4 items-center mt-5'}>
                    <MailIcon className={'w-7 h-7 flex-none'} />
                    <a href="mailto:dan@danver.io"
                       className={'cursor-pointer text-blue-600 break-all'}>dan@danver.io</a>
                </div>

                {/* 블로그 주소 */}
                <div className={'flex gap-4 items-center mt-3'}>
                    <BlogIcon className={'w-7 h-7 flex-none'} />
                    <a target="_blank" rel="noopener noreferrer" href="https://www.danver.io"
                       className={'cursor-pointer text-blue-600 break-all'}>https://www.danver.io</a>
                </div>

                {/* 깃허브 주소 */}
                <div className={'flex gap-4 items-center mt-3'}>
                    <GithubIcon className={'w-7 h-7 flex-none'} />
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/JiSikKim"
                       className={'cursor-pointer text-blue-600 break-all'}>https://github.com/JiSikKim</a>
                </div>

                {/* 링크드인 주소 */}
                <div className={'flex gap-4 items-center mt-3'}>
                    <LinkedInIcon className={'w-7 h-7 flex-none'} />
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/danver0921"
                       className={'cursor-pointer text-blue-600 break-all'}>https://www.linkedin.com/in/danver0921</a>
                </div>

                {/* 휴대전화가 아닌 이메일로 연락 부탁드립니다. */}
                <p className={'border px-4 py-3.5 mt-5 rounded bg-gray-100'}>
                    이메일로 연락 부탁드립니다.
                </p>
            </div>
        </section>
    </div>
}

export default PersonalInfoContainer