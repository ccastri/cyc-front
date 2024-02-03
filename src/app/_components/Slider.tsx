'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const sliderItems = [
  {'id':1, 
//   'title':'Chatbots and virtual assistants',
   'imgBg':"sos.jpg",
//    'adds':'AI is here to assist you, your company and your clients! As simple as passing a pdf with instructions and the guidelines about the way you want it to treat your costumers! The assistant will learn everything from the knowledge base you are passing in and he will kindly help you take care of your clients. It would feels like having all the Chat GPT knowledge and resources customized to your own business. It is also possible to train the assistant in pattern recognition, emotions identification and classification, recomendation systems and even more... by taking feedback directly from the main source: ¡Your clients!',
  //  'repoLink':'https://github.com/ccastri/alma-by-tdi' ,
    // 'website':'https://www.almabyyuyumolina.com'
  },
  {'id':2, 
//   'title':"RESTFull API's and Webapps Design",
   'imgBg':"famisanar.jpg",
    // 'adds':'When aiming to optimize information management, security, continuous integration, or to scale our system according to the real-time needs of our business, a Rest API can handle all logistics and store the information in our database while monitoring changes in real-time, enhancing control over daily operations.',
    //  'repoLink':'https://github.com/ccastri/productSoft' ,
    //   'website':' https://productsoft-52eb0.web.app/dashboard'
},
  {'id':3, 
//   'title':'AI Based 3D Design:',
   'imgBg':"sura.png",
    // 'adds':'3D Applications: Bringing your own 3D designs to reality is now possible! The best 3D software tools and CAD design allow the realization of prosthetics, parts, and difficult-to-obtain or custom-made replacements, animations, and graphics for augmented reality... only limited by your imagination', 'repoLink':'https://github.com/ccastri/react-three-fiber' , 'website':' https://r3js-vite.vercel.app/'
},
  {'id':4, 

//   'title':'Entornos 3D digitales en salud', 
  'imgBg':"compensar.png", 
//   'adds':'Computer vision and augmented reality are some of the techniques setting the pace in the medical technology industry. The possibilities of recreating real scenarios in digital spaces promise an unprecedented improvement throughout the specialist training process, and real-time support opens doors to personalized and uninterrupted assistance', 'repoLink':'https://github.com/ccastri/THREEJS-basics' ,
  
  'website':' https://threejs-basics-sigma.vercel.app/'},
  {'id':5, 
//   'title':'Entornos 3D digitales en salud', 
  'imgBg':"medimas.webp",
//    'adds':'Computer vision and augmented reality are some of the techniques setting the pace in the medical technology industry. The possibilities of recreating real scenarios in digital spaces promise an unprecedented improvement throughout the specialist training process, and real-time support opens doors to personalized and uninterrupted assistance', 'repoLink':'https://github.com/ccastri/THREEJS-basics' ,
    // 'website':' https://threejs-basics-sigma.vercel.app/'
},
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current image index to the next one, looping back to the start if necessary
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 3000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);


  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };


  return (
    <div className="w-auto relative    flex flex-col ">
      {/* <h1>Slider works</h1> */}
      <div
        ref={sliderRef}
        className="h-auto w-auto  flex rounded-md "
      >
        <AnimatePresence>

        {sliderItems.map((slide, index) => (
          <motion.div
            className="relative flex items-center justify-center mx-auto max-h-28 min-h-60  duration-200 transition-all ease z-20 -in-out w-full md:h-screen rounded-md"
            key={index}
            initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              exit={{ opacity: 0 }}

      >
            <Image
              className=" absolute opacity-60 object-cover cursor-pointer"
              src={`/${slide.imgBg}`}
              alt={`Image ${index}`}
              width={300}
              height={300}
              style={{ display: index === currentImageIndex ? 'flex' : 'none' }}
            />
           
     
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    
    </div>
  );
};

export default Slider;