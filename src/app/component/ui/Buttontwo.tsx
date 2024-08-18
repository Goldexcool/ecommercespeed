import React from 'react'

const Buttontwo = ({className, text}: any) => {
    return (
        <button className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border ${className}  bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}>
            {text}
        </button>

    )
}

export default Buttontwo
