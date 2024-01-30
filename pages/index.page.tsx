import React from 'react'
import PageConfig from '@/component/layout/PageConfig'

const HomePage: React.FC = () => {
    return <PageConfig>안녕하세요, 제 이름은 김지식입니다.</PageConfig>
}

export const getStaticProps = async ({locale}) => ({
    props: {
    },
})

export default HomePage
