import { motion, useScroll } from "motion/react";
import SmoothScroll from 'smooth-scroll';

import Button from "../components/Button";

import Section from "../components/Section";
import Telegram from "../assets/svgs/telegram.svg?react";
import Discord from "../assets/svgs/discord.svg?react";
import X from "../assets/svgs/x.svg?react";
import Message from "../assets/svgs/message.svg?react";
import { useEffect } from "react";

const contents = [
  {
    title: "Decentralised Telecommunications Focus:",
    content: "Projects that prioritise the decentralisation of telecommunications infrastructure and services."
  },
  {
    title: "Decentralisation of Physical Infrastructure:",
    content: "Initiatives that aim to decentralise physical infrastructure, such as networks, hardware, and facilities."
  },
  {
    title: "Web2 Applications Seeking Decentralisation:",
    content: "Existing Web2 applications looking to transition towards decentralised operations and architectures."
  },
  {
    title: "Web2 and Web3 Applications and dApps:",
    content: "A wide range of applications, including traditional Web2 apps, Web3 apps, and decentralised applications (dApps)."
  },
  {
    title: "Projects Addressing Interconnectivity Issues:",
    content: "Ventures that tackle challenges related to interconnectivity, such as interoperability, cross-chain communication, and network integration."
  },
  {
    title: "On-chain Security through Decentralisation and Data Management Excellence:",
    content: "Projects that enhance on-chain security by leveraging decentralisation techniques and implementing best practices in data management."
  },
  {
    title: "Governance of Existing and Future Projects:",
    content: "Initiatives that explore and implement innovative governance models, consensus protocols, and information sharing mechanisms for both existing and upcoming projects."
  },
  {
    title: "Zero-Knowledge as the Next Frontier: ",
    content: "Projects that advance the use of zero-knowledge proofs and related technologies for secure data Projects that advance the use of zero-knowledge proofs and related technologies for secure data "
  },
  {
    title: "Digital Identity and Decentralised Identity (DID) Management:",
    content: "Solutions that focus on the development and management of digital identities and decentralised identity systems."
  },
  {
    title: "Real-World Assets on Chain:",
    content: "Projects that bridge the gap between real-world assets and blockchain technology, enabling the tokenization and on-chain representation of physical assets."
  }
]

const Home = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 2000,  // Adjust speed for smoother scroll
      speedAsDuration: true,
      easing: 'easeInOutCubic'
    });

    return () => {
      scroll.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="relative">
      <motion.div className="fixed top-0 left-0 z-10 w-full h-1 origin-left bg-red-500" style={{ scaleX: scrollYProgress }} />
      <div className="relative flex flex-col items-center lg:items-start bg-[url('/imgs/home-mobile.jpg')] lg:bg-[url('/imgs/home.jpg')] bg-cover bg-center lg:px-[140px] pt-[53px] h-[810px]">
        <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="flex items-center gap-4">
          <img src="/imgs/logo.png" alt="" className="" width={40} height={40} />
          <span className="text-2xl font-semibold">WMTx</span>
        </motion.div>
        <div className="flex flex-col items-center lg:items-start mt-10 sm:mt-20 lg:mt-[113px] px-5 lg:px-0 w-full">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="font-bold font-neue text-[50px] text-center sm:text-[70px] md:text-[80px] lg:text-[100px] lg:text-left xs:text-[60px] leading-none tracking-tighter scale-x-90 xs:scale-x-100">
            THE FRENCH<br />CONNECTIVITY
          </motion.div>
          <motion.div initial={{ transform: "translate(0, 100px)", opacity: 0 }} whileInView={{ transform: "translate(0, 0px)", opacity: 1 }} className="space-y-[10px] mt-5 text-center lg:text-left">
            <div className="font-semibold text-[20px] text-center lg:text-left text-wrap">
              <p>Introducing the World Mobile Chain Grant Program:</p>
              <p><span className="text-transparent bg-clip-text bg-gradient-primary">Allocating $25M</span> to Fuel the Future of DePIN Development</p>
            </div>
            <div className="max-w-[547px] text-[#BDB2D0]">Introducing World Mobile Chain’s dedicated non-dilutive grant program, enabling the wave of DePIN innovation onchain.</div>
          </motion.div>
          <div className="flex gap-[10px] sm:gap-5 mt-10 w-full justify-center lg:justify-start">
            <Button href="https://forms.gle/dsb6hQsuu3omcLeT9" className="flex items-center justify-center w-full xs:w-auto bg-white xs:px-[50px] py-5 rounded-[5px] font-semibold text-[#0C021D] text-[18px] leading-none">Apply now</Button>
            <Button href="#world_mobile" className="flex items-center justify-center w-full xs:w-auto border-white bg-gradient-to-b from-white/50 to-white/0 xs:px-[50px] py-5 border rounded-[5px] font-semibold text-[18px] leading-none">Learn more</Button>
          </div>
          <div className="fixed bottom-0 z-10 flex items-center w-full py-5 mt-10 border-t border-white/20 backdrop-blur-md lg:backdrop-blur-0 lg:border-t-0 lg:top-1/2 lg:right-12 justify-evenly lg:justify-center lg:w-auto lg:flex-col lg:gap-5 lg:mt-0 lg:-translate-y-1/2">
            <Button href="https://t.me/WorldMobileTeam" className="flex justify-center items-center border-white bg-gradient-to-b from-white/50 to-white/0 border rounded-full w-[50px] h-[50px]">
              <Telegram />
            </Button>
            <Button href="https://x.com/wmtoken" className="flex justify-center items-center border-white bg-gradient-to-b from-white/50 to-white/0 border rounded-full w-[50px] h-[50px]">
              <Discord />
            </Button>
            <Button href="https://discord.gg/worldmobile" className="flex justify-center items-center border-white bg-gradient-to-b from-white/50 to-white/0 border rounded-full w-[50px] h-[50px]">
              <X />
            </Button>
            <Button className="flex justify-center items-center border-white bg-gradient-to-b from-white/50 to-white/0 border rounded-full w-[50px] h-[50px]">
              <Message />
            </Button>
          </div>
        </div>
      </div>

      <div id="world_mobile" className="">
      <motion.div initial={{ transform: "translate(0, 100px)", opacity: 0 }} whileInView={{ transform: "translate(0, 0px)", opacity: 1 }} className="flex flex-col items-center px-5 xs:px-10 sm:px-16 md:px-20 lg:px-[100px] py-[90px]">
        <div className="bg-gradient-primary px-2 sm:px-10 py-[15px] rounded-[5px] font-bold font-neue text-[20px] xs:text-[35px] lg:text-[50px] text-center uppercase leading-none tracking-tighter">World Mobile's Ecosystem Program<br />Fuels Global DePIN Innovation</div>
        <div className="mt-5 text-[#BDB2D0] text-center">
          <p>World Mobile, the world's first global decentralised wireless network, is pleased to announce the launch of its ecosystem support programme designed to encourage innovation and development on the World Mobile Chain. As a leading provider of Decentralised Physical Infrastructure Network (DePIN) technology, World Mobile is dedicated to promoting the adoption and growth of DePIN solutions worldwide.</p><br />
          <p>The company recognises the vast potential of DePIN in revolutionising network infrastructure and is allocating significant resources to support projects built on its dedicated chain. With a strong emphasis on expanding its presence in the United States and other key markets globally, World Mobile aims to establish itself as a premier facilitator of DePIN technology. Through this ecosystem support programme, World Mobile seeks to collaborate with developers, entrepreneurs, and organisations who share its vision of a more secure, efficient, and user-centric network infrastructure. The company believes that by cultivating a thriving ecosystem of DePIN solutions, it can accelerate the realisation of this transformative technology's full potential.</p>
        </div>
        <div className="flex flex-col justify-center w-full gap-5 mt-10 sm:flex-row">
          <Button href="https://forms.gle/dsb6hQsuu3omcLeT9" className="flex items-center justify-center w-full sm:w-auto bg-white px-[50px] py-5 rounded-[5px] font-semibold text-[#0C021D] text-[18px] leading-none">Apply now</Button>
          <Button href="#grand_power" className="flex items-center justify-center w-full sm:w-auto border-white bg-gradient-to-b from-white/50 to-white/0 p-5 border rounded-[5px] font-semibold text-[18px] leading-none">More about the program</Button>
        </div>
      </motion.div>
      </div>

      <Section id="grand_power">
        <motion.div initial={{ transform: "translate(0, 100px)", opacity: 0 }} whileInView={{ transform: "translate(0, 0px)", opacity: 1 }} className="apply-section">
          <div className="text-center">
            <div className="font-bold font-neue text-[40px] sm:text-[60px] lg:text-[100px] leading-none">$25,000,000</div>
            <div className="mt-[10px] font-semibold text-[20px] xs:text-[24px]">Grant Powered by $WMTx</div>
          </div>
          <div className="mt-5 lg:px-[78px] text-center">
            The $25,000,000 grant programme is powered by the World Mobile Token (WMTx). WMTx is the utility token that enables the sharing economy of World Mobile's global mobile network. All transactions generated on the network, including calls, data usage, and wallet transactions, will be paid out in WMTx to node operators and those staking WMTx. By rewarding network participants for actual usage, such as calls, texts, streaming, and internet browsing, World Mobile is establishing itself as a pioneer in the wireless industry, offering a unique and sustainable model for network growth and user engagement.
          </div>
          <div className="flex flex-col justify-center w-full gap-5 mt-5 sm:flex-row">
            <Button href="https://forms.gle/dsb6hQsuu3omcLeT9" className="flex items-center justify-center bg-white px-[50px] py-5 rounded-[5px] font-semibold text-[#0C021D] text-[18px] leading-none">Apply now</Button>
            <Button href="#why_build" className="flex items-center justify-center border-white bg-gradient-to-b from-white/50 to-white/0 p-5 border rounded-[5px] font-semibold text-[18px] leading-none">More about WMC</Button>
          </div>
        </motion.div>
      </Section>

      <Section id="why_build">
        <motion.div initial={{ transform: "translate(0, 100px)", opacity: 0 }} whileInView={{ transform: "translate(0, 0px)", opacity: 1 }} className="flex flex-col items-center">
          <div className="font-bold font-neue text-[20px] xs:text-[35px] lg:text-[50px] text-center uppercase leading-none tracking-tighter">
            Why build on the <span className="text-transparent bg-clip-text bg-gradient-primary">World Mobile Chain (WMC)?</span>
          </div>
          <div className="grid gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-center items-center space-y-[10px] border-[#2C2735] px-5 py-10 border rounded-[20px]">
              <div className="font-semibold text-[20px] text-center">World's First Dedicated Telco DePIN Chain</div>
              <div className="text-[#A196B2] text-center">WMC is an EVM-compatible Layer 3 blockchain built on top of Base, offering fast and affordable transactions. This makes it easy for developers to deploy applications on the network.</div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-[10px] border-[#2C2735] px-5 py-10 border rounded-[20px]">
              <div className="font-semibold text-[20px] text-center">Decentralised by Design</div>
              <div className="text-[#A196B2] text-center">Tap into WMC's network of 1,000 Earth Node Operators (ENOs) to run your applications in a decentralised manner, ensuring robustness and resilience.</div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-[10px] border-[#2C2735] px-5 py-10 border rounded-[20px]">
              <div className="font-semibold text-[20px] text-center">24/7 Community and Developer Relations Support</div>
              <div className="text-[#A196B2] text-center">Benefit from an existing community of passionate supporters and receive top-notch assistance from our dedicated developer relations team.</div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-[10px] border-[#2C2735] px-5 py-10 border rounded-[20px]">
              <div className="font-semibold text-[20px] text-center">Inclusive Grant Programme</div>
              <div className="text-[#A196B2] text-center">Our grants start from $5,000, ensuring that everyone has a fair chance to contribute to the ecosystem, regardless of the size or scale of their projects.</div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full gap-5 mt-10 sm:flex-row">
            <Button href="https://forms.gle/dsb6hQsuu3omcLeT9" className="flex items-center justify-center bg-white px-[50px] py-5 rounded-[5px] font-semibold text-[#0C021D] text-[18px] leading-none">Apply now</Button>
            <Button href="#support" className="flex items-center justify-center border-white bg-gradient-to-b from-white/50 to-white/0 p-5 border rounded-[5px] font-semibold text-[18px] leading-none">Projects we support</Button>
          </div>
        </motion.div>
      </Section>

      <Section id="support">
        <motion.div initial={{ transform: "translate(0, 100px)", opacity: 0 }} whileInView={{ transform: "translate(0, 0px)", opacity: 1 }} className="flex flex-col items-center">
          <div className="font-bold font-neue text-[20px] xs:text-[35px] lg:text-[50px] text-center uppercase leading-none tracking-tighter">
            Who we <span className="text-transparent bg-clip-text bg-gradient-primary">support</span>
          </div>
          <div className="grid grid-flow-col mt-10 grid-rows-10 lg:grid-rows-5 gap-x-10">
            {contents.map((content, key) => <div key={key} className="flex gap-[2px] bg-gradient-to-r even:bg-gradient-to-r odd:from-[#3F247C40] even:from-[#3A2172] odd:to-[#2C273500] even:to-[#2C273500] p-[10px] pb-6">
              <div className="w-8 h-8 font-semibold">{key + 1}.</div>
              <div className="flex-1">
                <div className="font-bold">{content.title}</div>
                <div className="text-[#BDB2D0]">{content.content}</div>
              </div>
            </div>)}
          </div>
          <div className="flex justify-center w-full mt-10">
            <Button href="https://forms.gle/dsb6hQsuu3omcLeT9" className="flex items-center justify-center text-center bg-white w-full sm:w-auto px-2 sm:px-[20px] lg:px-[50px] py-5 rounded-[5px] font-semibold text-[#0C021D] text-[18px] leading-none tracking-tighter">Apply For The French Connectivity Grant Program</Button>
          </div>
        </motion.div>
      </Section>

      <Section className="pt-[50px] pb-[120px] lg:pb-[50px]">
        <motion.div initial={{ transform: "translate(0, 100px)", opacity: 0 }} whileInView={{ transform: "translate(0, 0px)", opacity: 1 }} className="flex flex-col items-center gap-10 font-compact">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex justify-center items-center bg-white rounded-full w-[30px] sm:w-[49px] h-[30px] sm:h-[49px]">
              <img src="/imgs/logo.png" alt="" className="w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <div className="font-semibold text-[18px] sm:text-[28px] tracking-tighter whitespace-nowrap">Powering the future of connectivity</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 tracking-tighter xs:flex-row">
            <a href="https://worldmobiletoken.com/terms-and-conditions?_gl=1*1ydkj44*_up*MQ..*_ga*NTEwMDM0NDIyLjE3MzE1NDg5NTc.*_ga_4H9G3W8ZW7*MTczMTU0ODk1Ny4xLjAuMTczMTU0ODk1Ny4wLjAuMA.." target="_blank">Terms and conditions</a>
            <a href="https://worldmobiletoken.com/privacy-policy?_gl=1*1ydkj44*_up*MQ..*_ga*NTEwMDM0NDIyLjE3MzE1NDg5NTc.*_ga_4H9G3W8ZW7*MTczMTU0ODk1Ny4xLjAuMTczMTU0ODk1Ny4wLjAuMA.." target="_blank">Privacy policy</a>
            <a href="https://worldmobiletoken.com/cookie-policy?_gl=1*1ydkj44*_up*MQ..*_ga*NTEwMDM0NDIyLjE3MzE1NDg5NTc.*_ga_4H9G3W8ZW7*MTczMTU0ODk1Ny4xLjAuMTczMTU0ODk1Ny4wLjAuMA.." target="_blank">Cookie policy</a>
          </div>
          <div className="font-semibold text-center">© 2024 World Mobile Token (BVI) Ltd All rights reserved</div>
        </motion.div>
      </Section>

      <img src="/imgs/footer.jpg" alt="" className="absolute bottom-0 -z-10 h-[577px] w-full" />
    </div>
  )
}

export default Home;