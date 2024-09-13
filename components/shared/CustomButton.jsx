
const colorMap = {
    white: 'bg-neutral-200 hover:bg-neutral-300',
    red: 'bg-red-400 hover:bg-red-500',
    green: 'bg-green-400 hover:bg-green-500',
    // Add more colors as needed
};

const CustomButton = ({ text, color = 'white' }) => {
    const colorClasses = colorMap[color];

    const handleClick = () => {
        console.log('button clicked');
    };

    return (
        <div className="relative">
            <div className="absolute top-1 left-1 w-full h-full bg-neutral-700 -z-10"></div>

            <button
                onClick={handleClick}
                className={`border-2 font-bold stroke_primary text-neutral-700 border-neutral-700 
          px-4 py-2 ${colorClasses}`}
            >
                {text}
            </button>
        </div>
    );
};

export default CustomButton;
