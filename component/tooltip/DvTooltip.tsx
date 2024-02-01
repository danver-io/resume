import React, {useState} from 'react'
import {
    autoUpdate,
    flip,
    offset,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useInteractions,
    useRole,
} from '@floating-ui/react'

interface IProps {
    className?: string
    render?: React.ReactNode
    children?: any
}

const ARROW_HEIGHT = 7
const GAP = 5

const DvTooltip = ({className, render, children}: IProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const {x, y, strategy, refs, context} = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [flip(), shift(), offset(ARROW_HEIGHT + GAP)],
        whileElementsMounted: autoUpdate,
    })

    const click = useClick(context)
    const dismiss = useDismiss(context)
    const role = useRole(context)
    const {getReferenceProps, getFloatingProps} = useInteractions([click, dismiss, role])

    return (
        <div className={`${className}`}>
            <div
                ref={refs?.setReference}
                {...getReferenceProps()}
                className={`${className} cursor-pointer`}
                onClick={(e: any) => {
                    setIsOpen(isOpen => !isOpen)
                    e.stopPropagation()
                }}>
                {render}
            </div>
            {isOpen && (
                <div
                    ref={refs?.setFloating}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                        width: 'max-content',
                    }}
                    {...getFloatingProps()}
                    className={'z-tooltip'}
                    onClick={e => {
                        setIsOpen(false)
                        e.stopPropagation()
                    }}>
                    <div className={`bg-white p-[20px] rounded-[5px] max-w-[340px] border border-line01 shadow-sm`}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DvTooltip
