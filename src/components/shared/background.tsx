export function Background() {
    return (
        <>
            <div
                className="absolute inset-0 h-full w-full
            bg-[radial-gradient(circle,#73737350_1px,transparent_1px)]
            bg-size-[10px_10px]
            mask-[radial-gradient(ellipse_70%_70%_at_50%_50%,#000_40%,transparent_100%)]"
            />
            {/* Vibrant gradient orbs - Next.js style with oklch colors */}
            <div className="fixed top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[128px] pointer-events-none bg-[oklch(0.7_0.15_200/0.3)]" />
            <div className="fixed top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[128px] pointer-events-none bg-[oklch(0.65_0.25_320/0.3)]" />
            <div className="fixed bottom-0 right-1/3 w-[400px] h-[400px] rounded-full blur-[128px] pointer-events-none bg-[oklch(0.8_0.15_70/0.2)]" />
        </>
    );
}
