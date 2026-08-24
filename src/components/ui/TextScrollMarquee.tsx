'use client';

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    useAnimationFrame,
    useMotionValue,
} from 'framer-motion';

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface TextScrollMarqueeProps {
    children: React.ReactNode;
    baseVelocity?: number;
}

export default function TextScrollMarquee({
    children,
    baseVelocity = -2,
}: TextScrollMarqueeProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-100, 0, v % 100)}%`);

    useAnimationFrame((t, delta) => {
        let moveBy = baseVelocity * (delta / 1000);
        moveBy += moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden whitespace-nowrap flex flex-nowrap w-full select-none py-4">
            <motion.div
                className="flex whitespace-nowrap gap-8 flex-nowrap items-center"
                style={{ x }}
            >
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="flex items-center gap-8 shrink-0">
                        {children}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
