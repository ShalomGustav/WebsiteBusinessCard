import ServiceSlider from '../components/ServiceSlider';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='relative flex flex-col items-center bg-[#0C011A] h-screen overflow-hidden p-6 md:p-12 lg:p-12'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: 'url(/assets/myprogectspace10.jpg)' }}
        aria-hidden="true"
      />
      <div className='relative flex left-0 top-14 md:top-32 lg:top-32 items-start gap-2 md:gap-4 lg:gap-6 p-2 md:p-4 lg:p-6 bg-gray-800 bg-opacity-40 rounded-lg shadow-lg z-10 max-w-full'>
        <div className="flex flex-col gap-4 w-auto">
          <h1 className="text-[12px] md:text-[16px] lg:text-[18px] text-gray-200 font-semibold">
            Мое<span className="text-red-500"> Образование</span>
          </h1>
          <ul className="text-[11px] md:text-[16px] lg:text-[18px] text-gray-200 list-disc list-inside pl-3 space-y-1">
            <li>ГАПОУ СО «ВПК им.Ф.И. Панферова» ИКТ, Информатика и ИКТ</li>
            <li>СГУ им. Н.Г. Чернышевского, Саратов КНИИТ, Информатика и ИКТ</li>
            <li>СГУ им. Н.Г. Чернышевского, Саратов Механико-математический факультет, Математика</li>
          </ul>
          <h1 className="text-[12px] md:text-[16px] lg:text-[18px] text-gray-200 font-semibold">
            О <span className="text-red-500"> себе</span>
          </h1>
          <p className='text-[12px] z-10 md:text-[16px] lg:text-[18px] text-gray-200 text-left'>
            Основа моего образования — это программирование и математика. Я окончил механико-математический факультет с красным дипломом. В университете я углубил свои знания в языке программирования C#, который стал основой моего интереса к программированию и формированию профессиональной карьеры.

            В данный момент я работаю учителем математики и программирования, но сосредоточен на back-end разработке на C#, что является основой моих профессиональных интересов.

            Этот сайт создан для более глубокого знакомства с React и удобной коммуникации. Надеюсь, что он будет полезен и поможет лучше понять мои профессиональные интересы и опыт. Ниже представлены курсы повышения квалификации. Ознакомиться с ними можно, щелкнув по ним.
          </p>
        </div>
      </div>
      <div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75'>
        <Image
          src="/assets/bulb.png"
          alt='bulb'
          width={260}
          height={260}
          className='w-full h-full hidden md:block'
        />
      </div>
      <ServiceSlider />
      <div className="absolute bottom-0 left-0 w-full text-center pb-2">
        <blockquote className="text-[10px] md:text-[14px] lg:text-[18px] text-gray-300 italic">
          &quot;Чем больше я учусь, тем больше понимаю, сколько я не знаю.&quot; — Сократ
        </blockquote>
      </div>
    </div>
  );
};

export default Page;
