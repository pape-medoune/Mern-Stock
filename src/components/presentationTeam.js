import React from 'react'
import me from '../assets/images/me.jpg'
import './team.css'
import {useEffect,useRef} from 'react';
import {TweenMax,Power3} from 'gsap';



function Team() {
let bigTitleSpan1 = useRef(null);
let bigTitleSpan2 = useRef(null);
let bigTitleSpan3 = useRef(null);
let bigTitleSpan4 = useRef(null);
let bigTitleSpan5 = useRef(null);
let bigTitleSpan6 = useRef(null);
let bigTitleSpan7 = useRef(null);
let bigTitleSpan8 = useRef(null);
let bigTitleSpan9 = useRef(null);
let bigTitleSpan10 = useRef(null);
let secondTitle = useRef(null);
let  subTitle = useRef(null);
let card1 = useRef(null);
let card2 = useRef(null);
let card3 = useRef(null);


useEffect(()=>{
    TweenMax.staggerFromTo(
        bigTitleSpan1,
        5,
        { delay: 0.1, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 0.1, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );
      TweenMax.staggerFromTo(
        bigTitleSpan2,
        5,
        { delay: 0.3, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 0.3, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );
      TweenMax.staggerFromTo(
        bigTitleSpan3,
        5,
        { delay: 0.5, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 0.5, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );
      TweenMax.staggerFromTo(
        bigTitleSpan4,
        5,
        { delay: 0.7, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 0.7, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );
      TweenMax.staggerFromTo(
        bigTitleSpan5,
        5,
        { delay: 0.9, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 0.9, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );
      TweenMax.staggerFromTo(
        bigTitleSpan6,
        5,
        { delay: 1.1, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 1.1, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );
      TweenMax.staggerFromTo(
        bigTitleSpan7,
        5,
        { delay: 1.3, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 1.3, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );
      TweenMax.staggerFromTo(
        bigTitleSpan8,
        5,
        { delay: 1.5, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 1.5, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );
      TweenMax.staggerFromTo(
        bigTitleSpan9,
        5,
        { delay: 1.7, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 1.7, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );
      TweenMax.staggerFromTo(
        bigTitleSpan10,
        5,
        { delay: 1.9, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 1.9, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );

      TweenMax.staggerFromTo(
        secondTitle,
        5,
        { delay: 2.1, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 2.1, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );

      TweenMax.staggerFromTo(
        subTitle,
        5,
        { delay: 2.3, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 2.3, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );
      TweenMax.staggerFromTo(
        card1,
        5,
        { delay: 2.5, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 2.5, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );

      TweenMax.staggerFromTo(
        card2,
        5,
        { delay: 2.8, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 2.8, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );

      TweenMax.staggerFromTo(
        card3,
        5,
        { delay: 3.1, opacity: 0, y: -40, ease: Power3.easeOut },
        { delay: 3.1, opacity: 1, y: 5, ease: Power3.easeOut },
        0.5
      );

},[])


return (
    <section className="py-14">
        <div className='flex justify-center text-[6.5vw]'>
            <span ref={El=>bigTitleSpan1=El} className='slogan'>S</span>
            <span ref={El=>bigTitleSpan2=El} className='slogan'>A</span>
            <span ref={El=>bigTitleSpan3=El} className='slogan'>M</span>
            <span ref={El=>bigTitleSpan4=El} className='slogan'>A</span>
            <span ref={El=>bigTitleSpan5=El}>&nbsp;&nbsp;</span>
            <span  ref={El=>bigTitleSpan6=El} className='slogan'>S</span>
            <span ref={El=>bigTitleSpan7=El} className='slogan'>T</span>
            <span ref={El=>bigTitleSpan8=El} className='slogan'>O</span>
            <span ref={El=>bigTitleSpan9=El} className='slogan'>C</span>
            <span ref={El=>bigTitleSpan10=El} className='slogan'>K</span>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-xl mx-auto sm:text-center">
                <h3 ref={El=>secondTitle=El} className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Notre Equipe de devs
                </h3>
                <p ref={El=>subTitle=El} className="text-gray-600 mt-3">
                    Composition de notre équipe !
                </p>
            </div>
            <div className="mt-12">
                <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">

                            <li ref={El=>card1=El} >
                                <div className="w-full h-60 sm:h-52 md:h-56 overflow-hidden">
                                    <img
                                        src={me}
                                        className="w-full transition hover:scale-110 ease-in-out delay-200  h-full object-cover object-center shadow-md rounded-xl"
                                        alt=""
                                    />
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg text-gray-700 font-semibold">Mouhamedoune Fall</h4>
                                    <p className="text-indigo-600">Developper Full Stack and Mobile</p>
                                </div>
                            </li>
                            <li ref={El=>card2=El} >
                                <div className="w-full h-60 sm:h-52 md:h-56 overflow-hidden">
                                    <img
                                        src={me}
                                        className="w-full transition hover:scale-110 ease-in-out delay-200  h-full object-cover object-center shadow-md rounded-xl"
                                        alt=""
                                    />
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg text-gray-700 font-semibold">Mouhamedoune Fall</h4>
                                    <p className="text-indigo-600">Developper Full Stack and Mobile</p>
                                </div>
                            </li>
                            <li ref={El=>card3=El} >
                                <div className="w-full h-60 sm:h-52 md:h-56 overflow-hidden">
                                    <img
                                        src={me}
                                        className="w-full transition hover:scale-110 ease-in-out delay-200  h-full object-cover object-center shadow-md rounded-xl"
                                        alt=""
                                    />
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg text-gray-700 font-semibold">Mouhamedoune Fall</h4>
                                    <p className="text-indigo-600">Developper Full Stack and Mobile</p>
                                </div>
                            </li>
                </ul>
            </div>
        </div>
    </section>
);
 
}

export default Team;
