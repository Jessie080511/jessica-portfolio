import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' yanjie080511@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 bg-[#E3D6D6]" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/IMG_4791.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Jessica Yan</p>
              <p className="grid-subtext">
                I am a graduate student majoring in computer science and I am currently looking for a job. I have 4 years of relevant work experience and have had two project experiences. I am good at front-end and database management, and I am also good at using financial software.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I am good at applying various technologies, including React.js, Vite, Node.js,
                HTML5/CSS3, REST API, Selenium, MySQL, PostgresQL, OpenAl api, Git, IntelliJ, VSCode, AWS, Google Cloud Platform.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in United States and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container flex flex-col md:flex-row items-center">
            {/* 左侧图片 */}
            <div className="w-full md:w-1/2 flex items-center">
              <img src="/assets/passion.png" alt="grid-3" className="w-full h-auto object-cover rounded-lg" />
            </div>

            {/* 右侧文字 - 垂直居中 */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-5">
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                In my previous work experience, I developed a strong interest in code. After a few years of self-study, I studied for a master degree in computer science and systematically mastered a lot of knowledge. Now I want to continue to delve deeper and apply what I have learned to work and life.
              </p>
            </div>
          </div>
        </div>

        {/* 修改后的 Contact 部分 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container h-full flex flex-col justify-center items-center gap-4">
            {/* 图片部分 */}
            <img 
              src="/assets/logos.png" 
              alt="logos" 
              className="w-full max-h-[150px] object-contain rounded-lg"
            />

            {/* 文字部分 */}
            <p className="grid-headtext">Contact me</p>

            {/* 复制邮箱的功能 */}
            <div 
              className="copy-container flex items-center gap-2 cursor-pointer" 
              onClick={handleCopy}
            >
              <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy-icon" className="w-5 h-5" />
              <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-black">
                yanjie080511@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
