import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavigationMenu from './NavigationMenu';
import './PageBody.css';

gsap.registerPlugin(ScrollTrigger);

const PageBody = ({page}) => {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ".trigger-one",
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 2
            }
        )

        gsap.fromTo(
            ".trigger-one",
            {
                opacity: 1,
                y: 0,
                scale: 2,
            },
            {
                opacity: 0.3,
                y: -20,
                scale: 0.5,
                scrollTrigger: {
                    trigger: ".trigger-one",
                    start: "top 0%",
                    scrub: 1,
                }
            }
        );
        
        gsap.fromTo(
            ".trigger-two",
            {
                opacity: 0.3,
                y: -20,
                scale: 0.5,
            },
            {
                opacity: 1,
                y: 0,
                scale: 2,
                scrollTrigger: {
                    trigger: ".trigger-two",
                    start: "top 100%",
                    end: "bottom center",
                    scrub: 1,
                }
            }
        );

        gsap.fromTo(
            ".trigger-two",
            
            {
                opacity: 1,
                y: 0,
                scale: 2,
            },
            {
                opacity: 0.3,
                y: -20,
                scale: 0.5,
                scrollTrigger: {
                    trigger: ".trigger-two",
                    start: "top 0%",
                    scrub: 1,
                }
            }
        );

        gsap.fromTo(
            ".trigger-three",
            {
                opacity: 0.3,
                y: -20,
                scale: 0.5,
            },
            {
                opacity: 1,
                y: 0,
                scale: 2,
                scrollTrigger: {
                    trigger: ".trigger-three",
                    start: "top 100%",
                    end: "bottom center",
                    scrub: 1,
                }
            }
        );
    }, []);

    return (
        <>
            <div ref={ref}>
                <section className="text-section" style={{ backgroundColor: "orange" }}>
                    <div className='trigger-one'>
                        <h1>{page}'s Section 1</h1>
                        <p>Section 1 Description</p>
                    </div>
                </section>

                <section className="text-section" style={{ backgroundColor: "pink" }}>
                    <div className='trigger-two'>
                        <h1>{page}'s Section 2</h1>
                        <p>Section 2 Description</p>
                    </div>
                </section>

                <section className="text-section" style={{ backgroundColor: "turquoise" }}>
                    <div className='trigger-three'>
                        <h1>{page}'s Section 3</h1>
                        <p>Section 3 Description</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PageBody;
