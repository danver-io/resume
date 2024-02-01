import React, {useMemo} from 'react'
import {format} from 'date-fns'

export interface IProps {
    className?: string
    date?: string
}

const DDayBadge: React.FC<IProps> = ({className, date}) => {
    const dateWritten = useMemo(() => Date.parse(date), [date])
    const dateDiff = useMemo(() => ((Date.now() - Date.parse(date)) / 86400 / 1000), [date])

    return <span className={`bg-gray-400 px-2 py-1 rounded-md ml-1 text-[12px] text-white font-semibold ${className}`}>
        {format(new Date(dateWritten), 'yyyy-MM-dd')} (D+{Math.trunc(dateDiff)})
    </span>
}

export default DDayBadge