/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function Info() {
    return (
        <div className="flex gap-4 max-h-28 min-h-28 h-28 items-center">
            <img src="./grunge.jpg" className="object-cover h-28 w-28 hidden md:block rounded-lg"/>
            <div className="flex flex-col">
                <h1 className="text-2xl font-krona">
                    grunge.
                </h1>
                <p className="font-inter text-md h-full opacity-70">
                    <span className="text-[#4501ad]">he/him. </span>
                    Just your average kid making stuff with your favorite frameworks and libraries. Check out more stuff about me & my socials below.
                </p>
            </div>
        </div>
    )
}