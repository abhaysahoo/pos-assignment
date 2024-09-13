const colorMap = {
    neutral: 'bg-neutral-200',
    red: 'bg-red-400',
    green: 'bg-green-400',
}

const hoverColorMap = {
    neutral: 'hover:bg-neutral-300',
    red: 'hover:bg-red-500',
    green: 'hover:bg-green-500',
}

const CustomButton = ({ text, color = 'neutral', handleClick, disabled = false }) => {
    const baseColorClass = colorMap[color];
    const hoverColorClass = hoverColorMap[color];

    return (
        <div className="relative">
            <div className={`absolute top-1 left-1 w-full h-full bg-neutral-700 -z-10 ${disabled && 'opacity-10'}`}></div>

            <button
                onClick={handleClick}
                disabled={disabled}
                className={`border-2 font-bold stroke_primary text-neutral-700 border-neutral-700 
          px-4 py-2 ${baseColorClass} ${disabled ? 'opacity-60 cursor-not-allowed' : hoverColorClass}`}
            >
                {text}
            </button>
        </div>
    );
};

export default CustomButton;
