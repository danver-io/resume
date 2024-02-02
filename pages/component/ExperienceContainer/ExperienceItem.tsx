import React, {useMemo} from 'react'
import {IExperience} from '@/pages/component/ExperienceContainer/ExperienceContainer'
import {format} from 'date-fns'
import skillItem from '@/pages/component/SkillContainer/SkillItem'

export interface IProps extends IExperience {
    className?: string
}

const ExperienceItem: React.FC<IProps> = ({
                                              className,
                                              name,
                                              description,
                                              startAt,
                                              endAt,
                                              isWorkingNow,
                                              contents,
                                              skillTags,
                                          }) => {

    const duration = useMemo(() => {
        const diff = endAt.getTime() - startAt.getTime()
        const year = diff / (86400 * 1000 * 365)
        const month = (diff % (86400 * 1000 * 365)) / (86400 * 1000 * 30)

        if (Math.trunc(year) > 0)
            return `${Math.trunc(year)}년 ${Math.trunc(month)}개월`
        else
            return `${Math.trunc(month)}개월`
    }, [startAt, endAt])

    return <div className={`grid grid-cols-4 gap-x-[40px] py-[20px] ${className} md:grid-cols-1`}>
        <div className={'flex flex-col md:flex-row md:justify-between md:items-center'}>
            <p className={'text-[24px] font-medium text-gray-400 text-right md:text-left mt-1'}>{format(startAt, 'yyyy.' +
                ' MM')} ~ {endAt && format(endAt, 'yyyy. MM')}</p>
            <div className={'flex justify-end mt-1 gap-x-1'}>
                {isWorkingNow && <span
                    className={'text-[12px] bg-blue-500 text-white px-1 py-0.5 rounded font-bold flex-none'}>재직 중</span>}
                {startAt && endAt &&
                    <span className={'text-[12px] bg-[#17A2B8] text-white px-1 py-0.5 rounded flex-none' +
                        ' font-bold'}>{duration}</span>}
            </div>
        </div>
        <div className={'col-span-3'}>
            <p className={'text-[28px] font-medium'}>{name}</p>
            <p className={'mt-1 text-[16px] text-fg.muted font-light'}>{description}</p>
            <ul className={'list-disc list-outside mt-5'}>
                {contents?.map(item => <li key={item}
                                           className={'ml-6 text-[16px] text-fg.default font-light'}>{item}</li>)}
            </ul>
            {skillTags && skillTags?.length > 0 && <div className={'mt-5 flex gap-x-1'}>
                {skillTags?.map(item => <span
                    key={item} className={'text-[12px] text-white font-normal bg-gray-500 px-1 py-0.5 rounded'}>{item}</span>)}
            </div>}
        </div>
    </div>
}

export default ExperienceItem