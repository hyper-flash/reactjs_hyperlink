import React from 'react'

export default function Contact() {
        return (
                <>
                        {/* component */}
                        {/* page */}
                        <main className="relative min-h-screen w-full bg-white">
                                {/* component */}
                                <div className="p-6" x-data="app">
                                        {/* header */}
                                        <header className="flex w-full justify-between">
                                                
                                                {/* buttons */}
                                                <div>
                                                        <button type="button" x-show="isLoginPage" className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">
                                                                Home
                                                        </button>
                                                </div>
                                        </header>
                                        <section className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
                                                {/* register content */}
                                                <div x-show="isLoginPage" className="space-y-4">
                                                        <header className="mb-3 text-2xl font-bold">Request</header>
                                                        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                                                                <input type="text" placeholder="Fullname" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                                                        </div>
                                                        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                                                                <input type="text" placeholder="Imdb link" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                                                        </div>
                                                        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                                                                <input type="text" placeholder="Google Searched Link" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                                                        </div>
                                                        <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                                                                <input type="password" placeholder="Message" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                                                        </div>
                                                        <button className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
                                                               Submit Request
                                                        </button>
                                                </div>
                                                {/* login content */}

                                                <div className="flex items-center space-x-4">
                                                        <hr className="w-full border border-gray-300" />
                                                        <div className="font-semibold text-gray-400">OR</div>
                                                        <hr className="w-full border border-gray-300" />
                                                </div>
                                                <footer>
                                                        <div className="grid gap-4">
                                                                <a href="/" className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">join our telegram channel</a>
                                                        </div>
                                                        <div className="mt-8 text-sm text-gray-400">
                                                        Sharing is Caring 🤗
                                                        </div>
                                                </footer>
                                        </section>
                                </div>
                        </main>

                </>
        )
}
