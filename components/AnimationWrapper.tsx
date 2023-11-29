'use client';
import { motion } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    delay: number;
}

const AnimationWrapper: React.FC<Props> = ({
    children, delay
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}

export default AnimationWrapper;
