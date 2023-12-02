import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} grid sm:grid-cols-[2fr_1fr] items-center`}
      >
        <div className="flex gap-x-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <TypeAnimation
              sequence={['Hi', 1000, "Hi I'am", 1000, "Hi, I'm Julián! ", 1000]}
              speed={50}
              className={`${styles.heroHeadText} text-white`}
              wrapper="h1"
              repeat={1}
            />
            <TypeAnimation
              sequence={[
                'I develop visual interfaces and web applications, focusing on user experience.',
              ]}
              speed={200}
              className={`${styles.heroSubText} mt-2 text-white-100`}
              wrapper="p"
              repeat={2}
              cursor={false}
            />
          </div>
        </div>
        <div className="sm:bg-violet-500/10 rounded-3xl h-full">
          <ComputersCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
