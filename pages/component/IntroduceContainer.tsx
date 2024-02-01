import React from 'react'
import Image from 'next/image'
import signImage from '@/public/image/img_sign.png'
export interface IProps {
    className?: string
}

const IntroduceContainer: React.FC<IProps> = ({className}) => {
    return <div className={`${className}`}>
        <section className={'grid grid-cols-4 overflow-hidden px-[20px] md:grid-cols-2 gap-y-1'}>
            <p className={'text-[32px] font-medium text-blue-600'}>INTRODUCE</p>
            <div className={'col-span-3'}>
                <p className={'font-light text-fg.default'}>웹/앱의 프론트와 백엔드를 개발해왔으며, 스타트업
                    개발자로서 다양한 경험이 있습니다. 주니어
                    개발자도 이해하기 쉬운 코드를 작성하는 것을 기본으로 하고 있습니다. 개발자가 비즈니스 로직에만 집중할 수 있도록 돕는 CI/CD 에도 관심이 있습니다.
                    <br /><br />
                    직접 만든 사이드 프로젝트를 통해 충분한 수익을 얻는 것을 목표로 하고 있습니다. 그래서 언제나 사업을 전체적으로 바라봅니다.
                    <br /><br />
                    성장하기 위해 일을 합니다. 뛰어난 동료를 통해서 기술, 비즈니스 등을 배울 수 있기를 바라고 있습니다.
                </p>

                <p className={'text-right font-light text-fg.default text-[12px] mt-8'}>
                    Last updated <span className={'bg-gray-400 px-2 py-1 rounded-md ml-1 text-[12px] text-white' +
                    ' font-semibold'}>2024. 02. 01 (D+0)</span>
                </p>
                <div className={'flex justify-end mt-3'}>
                    <Image src={signImage} alt={'sign'} className={'w-[80px]'}/>
                </div>
            </div>
        </section>
    </div>
}

export default IntroduceContainer