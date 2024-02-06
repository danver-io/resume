import React, {useMemo} from 'react'
import {IExperience} from '@/pages/component/ExperienceContainer/ExperienceContainer'
import {format} from 'date-fns'
import skillItem from '@/pages/component/SkillContainer/SkillItem'
import {IProject} from '@/pages/component/ProjectContainer/ProjectContainer'
import {ISideProject} from '@/pages/component/SideProjectContainer/SideProjectContainer'
import DvImage from '@/component/image/DvImage/DvImage'
import {Button} from '@danver-io/danver-design-system'
import Link from 'next/link'
import {isNotEmpty} from '@/util/strings'

export interface IProps extends ISideProject {
    className?: string
}

const SideProjectItem: React.FC<IProps> = ({
                                               className,
                                               name,
                                               summary,
                                               image,
                                               contents,
                                               articleURL,
                                               serviceURL,
                                           }) => {

    return <div className={`grid grid-cols-4 gap-x-[40px] py-[20px] ${className} md:grid-cols-1 gap-y-[16px]`}>
        <div className={'flex flex-col md:flex-row md:justify-between md:items-center'}>
            <DvImage src={image} className={'border-black border-[5px] rounded-lg max-w-[300px]'}/>
        </div>
        <div className={'col-span-3'}>
            <div className={'gap-x-1'}>
                <span className={'text-[28px] font-medium align-middle mr-1.5'}>{name}</span>
                {isNotEmpty(serviceURL) &&
                    <Link href={serviceURL} className={'inline-block align-middle mx-0.5'} target="_blank"><Button label={'서비스'} variant={'primary'}
                                                                                               size={'small'} /></Link>}
                {isNotEmpty(articleURL) &&
                    <Link href={articleURL} className={'inline-block align-middle mx-0.5'} target="_blank"><Button label={'게시글'}
                                                                                                                   size={'small'} /></Link>}
            </div>
            <p className={'mt-1 text-[16px] text-fg.muted font-light'}>{summary}</p>
            <div className={'mt-3'}>
                {contents}
            </div>
        </div>
    </div>
}

export default SideProjectItem