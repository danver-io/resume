import DDayBadge from '@/component/badge/DDayBadge'
import signImage from '@/public/image/img_sign.png'
import Image from 'next/image'
import React from 'react'
export interface IProps {
    className?: string
}

const IntroduceContainer: React.FC<IProps> = ({className}) => {
    return <div className={`${className} px-[20px]`}>
        <section className={'grid grid-cols-4 overflow-hidden md:grid-cols-2 gap-[40px]'}>
            <p className={'text-[32px] font-medium text-blue-600'}>INTRODUCE</p>
            <div className={'col-span-3 px-[20px]'}>
                <p className={'font-light text-fg.default'}>
                    웹과 앱의 프론트엔드부터 백엔드, 인프라까지 폭넓은 개발 경험이 있습니다. 스타트업에서 빠르게 서비스를 개발하고 운영해본 경험이 있으며, 이해하기 쉬운 코드와 구조를 지향합니다.
                    <br /><br />
                    개발자가 비즈니스 로직에 집중할 수 있는 환경을 만드는 것을 중요하게 생각하며, CI/CD, 인프라 자동화, 코드 품질 개선에 지속적인 관심을 가지고 있습니다.
                    <br /><br />
                    사이드 프로젝트로 수익을 창출하는 것을 목표로 꾸준히 실험하고 있으며, 서비스 전체 흐름을 이해하고 직접 운영하는 데서 보람을 느낍니다.
                    <br /><br />
                    성장을 위해 일합니다. 뛰어난 동료들과 함께하며 기술과 비즈니스 관점 모두에서 배움을 이어가고 싶습니다.
                </p>

                <p className={'text-right font-light text-fg.default text-[12px] mt-8'}>
                    Last updated <DDayBadge date={'2024-02-01'}/>
                </p>
                <div className={'flex justify-end mt-3'}>
                    <Image src={signImage} alt={'sign'} className={'w-[80px]'}/>
                </div>
            </div>
        </section>
    </div>
}

export default IntroduceContainer