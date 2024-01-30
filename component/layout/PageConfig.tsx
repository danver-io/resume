import React from 'react'
import Head from 'next/head'
import {isNotEmpty} from '@/util/strings'
import Compose from '@/util/compose'

interface IProps {
    metaTags?: IMetaTags
    children?: any
    bodyClassName?: string
    pageName?: string
}

interface IMetaTags {
    title?: string
    description?: string
    image?: string
}

const PageConfig: React.FC<IProps> = ({metaTags = {}, bodyClassName = '', pageName, children}) => {

    return (
        <>
            <Head>
                <title>이력서 - 김지식</title>
                <meta
                    property="og:title"
                    content={isNotEmpty(metaTags?.title) ? metaTags?.title : '이력서 - 김지식'}
                />
                <meta
                    name="description"
                    content={isNotEmpty(metaTags?.description) ? metaTags?.description : '개발자 김지식의 이력서입니다.'}
                    key={'desc'}
                />
                <meta
                    property="og:description"
                    content={isNotEmpty(metaTags?.description) ? metaTags?.description : '개발자 김지식의 이력서입니다.'}
                />
                <meta property="og:image" content={isNotEmpty(metaTags?.image) ? metaTags?.image : ''} />
            </Head>

            <div className={`flex flex-col min-h-screen relative ${bodyClassName} font-default`}>
                <Compose items={[]}>
                    <main className={'grow flex'}>
                        <div className={'grow'}>{children}</div>
                    </main>
                </Compose>
            </div>
        </>
    )
}

export default PageConfig
