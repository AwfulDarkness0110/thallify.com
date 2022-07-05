
const RangeItem = ({label, onClick, active, secondaryLabel}) => {
    return (
        <div 
            className={`py-3 px-2 drop-shadow-lg select-none bg-white font-bold line-h cursor-pointer text-center flex-grow flex flex-col content-center justify-center transition-all rounded-lg border-4 text-black active:bg-gray-200 active:border-gray-200 ${active ? "bg-gray-100 border-primary" : "border-white"}`}
            onClick={onClick}
        >
            <div className="text-xl m-0 p-0 leading-3">{label}</div>
            <div className="mt-2 text-xs leading-3">{secondaryLabel}</div>
        </div>
    )
}

export default RangeItem