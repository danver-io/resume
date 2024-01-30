import React from 'react'

const HomePage: React.FC = () => {
    return <div className={'font-default text-title.large'}>안녕하세요, 제 이름은 김지식입니다.</div>
}

export const getStaticProps = async ({locale}) => ({
    props: {
    },
})

export default HomePage
