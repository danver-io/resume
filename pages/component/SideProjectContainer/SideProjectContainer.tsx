import React from 'react'
import ProjectItem from '@/pages/component/ProjectContainer/ProjectItem'
import SideProjectItem from '@/pages/component/SideProjectContainer/SideProjectItem'
import VeinThumb from '@/public/image/img_vein.png'
import SingTunerThumb from '@/public/image/img_singtuner.png'
import SuperMarioThumb from '@/public/image/img_mario.png'
import ServerTimeThumb from '@/public/image/img_servertime.png'
import DisposalMailThumb from '@/public/image/img_disposalMail.png'
import CommentThumb from '@/public/image/img_comment.png'

export interface IProps {
    className?: string
}

export interface ISideProject {
    name: string
    image: any
    articleURL?: string,
    serviceURL?: string,
    summary?: string
    contents?: React.ReactNode
}

const contentStyle = 'list-disc list-outside mt-4'
const itemStyle = 'ml-6 text-[16px] text-fg.default font-light'

const data: ISideProject[] = [
    {
        name: '정맥 인식',
        image: VeinThumb,
        summary: '대학생 때 진행했던 팀 프로젝트 (3개월)',
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>openCV를 접하고 처음 진행한 프로젝트</li>
                <li className={`${itemStyle}`}>국내외 논문을 찾아보며 다양한 방법 검토</li>
                <li className={`${itemStyle}`}>웰캠을 적외선 카메라로 개조했고, 특정 파장의 LED를 구매해서 손등의 정맥을 촬영</li>
                <li className={`${itemStyle}`}>Win32 API를 사용해서 프로그램 구현</li>
            </ul>
        </>,
        articleURL: 'https://cuddly-tray-290.notion.site/2496c6515a1045ea9d51331cf3b056ca',
    },
    {
        name: 'Sing Tuner',
        image: SingTunerThumb,
        summary: '음감을 키워주는 음치탈출용 앱',
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>안드로이드 첫 프로젝트</li>
                <li className={`${itemStyle}`}>노래를 음대로 잘 부르고 있는지 눈으로 볼 수 있는 앱</li>
                <li className={`${itemStyle}`}>음감을 키울 수 있도록 미니게임도 첨부</li>
                <li className={`${itemStyle}`}>자신이 직접 부른 노래를 언제든 다시 듣고 분석할 수 있는 리플레이 기능</li>
            </ul>
        </>,
        articleURL: 'https://cuddly-tray-290.notion.site/Sing-Tuner-663ca68a8f6c429b92c4182b543a2ba3',
    },
    {
        name: 'TCP 통신으로 2명이 동시에 즐기는 슈퍼마리오 게임',
        image: SuperMarioThumb,
        summary: 'openGL을 활용한 멀티플레이 게임',
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>openGL ES를 이용한 슈퍼마리오 게임화면 렌더링</li>
                <li className={`${itemStyle}`}>DirectX SDK와 MFC를 이용한 게임 맵툴 제작</li>
                <li className={`${itemStyle}`}>게임에서 충돌 처리, 네트웍을 이용한 플레이어 움직임 동기화, 아이템 기능, 몬스터와의 전투 구현</li>
                <li className={`${itemStyle}`}>화면에 보이지 않은 것들을 그리지 않는 컬링 처리</li>
            </ul>
        </>,
        articleURL: 'https://cuddly-tray-290.notion.site/TCP-2-bd48e3a2d8974f31906a4f194250dd9d',
    },
    {
        name: '서버타임',
        image: ServerTimeThumb,
        summary: '특정 사이트의 서버 시간을 알려주는 서비스',
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>티켓팅에서 조금이라도 빠르게 버튼을 누르기 위해 사용</li>
                <li className={`${itemStyle}`}>Next.js를 이용해서 프론트와 백엔드 구현</li>
                <li className={`${itemStyle}`}>Firebase RealtimeDB를 이용해 채팅 구현</li>
                <li className={`${itemStyle}`}>공용 디자인 라이브러리를 제작해서 NPM 배포</li>


            </ul>
        </>,
        serviceURL: 'https://servertime.danver.io',
        articleURL: 'https://www.danver.io/blog/create-servertime',
    },
    {
        name: '하루메일',
        image: DisposalMailThumb,
        summary: '하루동안 사용하고 버리는 일회용 메일 서비스',
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>Next.js를 이용해서 프론트 구현</li>
                <li className={`${itemStyle}`}>AHEM 메일서버(오픈소스)를 사용해서 서버를 빠르게 구현한 사례</li>
            </ul>
        </>,
        serviceURL: 'https://tempmail.danver.io',
        articleURL: 'https://www.danver.io/blog/tmpmail-project',
    },
    {
        name: '댄버 코멘트',
        image: CommentThumb,
        summary: '',
        contents: <>
            <ul className={`${contentStyle}`}>
                <li className={`${itemStyle}`}>개인 블로그에 사용하는 플러그인 형태의 댓글 서비스</li>
                <li className={`${itemStyle}`}>금액을 선불로 충전하고, 이용한만큼 차감하는 구조</li>
                <li className={`${itemStyle}`}>Serverless Framework를 이용해서 백엔드를 구현</li>
                <li className={`${itemStyle}`}>Cold Start를 최대한 피하기 위해서 5분마다 웜업</li>
            </ul>
        </>,
        serviceURL: 'https://comment.danver.io',
    },
]

const SideProjectContainer: React.FC<IProps> = ({className}) => {
    return <div className={`${className} px-[20px] `}>
        <div className={'flex items-center gap-x-4'}>
            <p className={'text-[32px] font-medium text-blue-600'}>SIDE PROJECT</p>
        </div>
        <section className={'mt-[20px] md:mt-[4px] grid divide-y gap-[16px]'}>
            {data?.reverse().map(item => <SideProjectItem {...item} />)}
        </section>
    </div>
}

export default SideProjectContainer