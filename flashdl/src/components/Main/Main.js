import React from 'react'

export default function Main() {
    return (
        <div>
            {/* component */}
            <div className="flex h-screen items-center bg-gray-300">
                <div className="group relative mx-auto overflow-hidden rounded-[16px] bg-gray-300 p-[3px] transition-all duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className="group-animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-visible" />
                    <div className="relative rounded-[15px] bg-white p-6">
                        <div className="space-y-4 flex"><img alt="" src="https://img.icons8.com/emoji/45/null/smiling-face-with-smiling-eyes.png"/>&nbsp;
                            <p className="text-lg font-semibold text-slate-800">why so serious </p> 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
