import { LuSparkle } from "react-icons/lu"
import { motion } from 'framer-motion'

const Stars = () => {
    return(
        <div className='flex flex-col'>
              <div className='hidden lg:flex flex-col items-end'>
                <motion.div
                  initial={{
                    rotate: -5,
                  }}
                  animate={{
                    rotate: 5,
                  }}
                  transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 0.5,
                    delay: 0.2,
                  }}
                >
                  <LuSparkle size="72px" className="fill-blue stroke-[0.6px] stroke-dark -mb-6" color="#38B8FF"/>
                </motion.div>

                <motion.div
                  initial={{
                    rotate: 5,
                  }}
                  animate={{
                    rotate: -5,
                  }}
                  transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 0.5,
                  }}
                >
                  <LuSparkle size="46px" className="fill-blue stroke-[0.8px] stroke-dark" color="#38B8FF"/>
                </motion.div>
              </div>

              <div className='flex lg:hidden flex-col items-end'>
                <motion.div
                  initial={{
                    rotate: -5,
                  }}
                  animate={{
                    rotate: 5,
                  }}
                  transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 0.5,
                    delay: 0.2,
                  }}
                >
                  <LuSparkle size="62px" className="fill-blue stroke-[0.6px] stroke-dark -mb-5" color="#38B8FF"/>
                </motion.div>
                
                <motion.div
                  initial={{
                    rotate: 5,
                  }}
                  animate={{
                    rotate: -5,
                  }}
                  transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 0.5,
                  }}
                >
                  <LuSparkle size="36px" className="fill-blue stroke-[0.8px] stroke-dark" color="#38B8FF"/>
                </motion.div>
              </div>
              <div className='h-3'></div>
            </div>
    )
}

export default Stars;