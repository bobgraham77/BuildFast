"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import siteConfig from '@config/siteConfig.json';
import AboutConfig from '@config/about/about.json';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const About: React.FC = () => {
    const { videoUrl } = AboutConfig;
    return (
        <section id="about">
            <div className='py-24 max-md:px-8 max-w-3xl mx-auto'>
                <div className='relative w-full aspect-video overflow-hidden rounded-lg bg-cards-bg backdrop-blur-lg border-8 border-cards-bg-secondary hover:scale-105 transition-transform duration-200'>
                    <ReactPlayer url={videoUrl} width='100%' height='100%' className='w-full h-full ' controls={true}/>
                </div>
            </div>
        </section>
    );
};

export default About;