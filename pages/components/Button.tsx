export default function Button(props : any) {
    return (
        <a href={props.href}>
            <div className="text-black text-xl hover:bg-[#4501ad] p-2 rounded-md transition-all duration-300 hover:text-white !bg-opacity-70">
                    <props.Icon />
            </div>
        </a>
    )
}