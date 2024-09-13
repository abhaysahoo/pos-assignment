const SpinnerLoader = () => {
    return (
        <div className="flex w-full min-h-[50vh] justify-center items-center">
            <div className="w-10 h-10 border-4 border-neutral-700 border-dashed rounded-full animate-spin"></div>
        </div>
    );
};

export default SpinnerLoader;
