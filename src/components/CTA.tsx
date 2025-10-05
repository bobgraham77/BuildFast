"use client"
import React, { useRef, useEffect, useState } from 'react';
// import siteConfig from '@config/siteConfig.json'; // Removed unused import
import { motion, useScroll, useTransform } from 'framer-motion';
import ButtonLead from '@atoms/Buttons/ButtonLead';
import ctaConfig from '@config/CTA/cta.json';

const CTA: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { heading, description, buttonText, buttonToolTip } = ctaConfig;
    const handleCheckout = React.useCallback(
        // @ts-ignore - dynamic import for SSR safety
        require('@hooks/useStripeCheckout').default(),
        []
    );
    const handleButtonClick = async () => {
        if (ctaConfig.btnLink?.startsWith('stripe:')) {
            const priceKey = ctaConfig.btnLink.split(':')[1];
            const { default: StripeConfig } = await import('@config/paymentsConfig/stripe.json');
            const { prices } = StripeConfig;
            if (priceKey in prices) {
                handleCheckout({ priceId: prices[priceKey as keyof typeof prices] });
            } else {
                alert('Erreur de configuration du paiement.');
            }
        }
    };

    return (
        <motion.section
            ref = {targetRef}
            className='bg-background-secondary pt-7'
            id='cta'
        >
            <div 
                className='bg-background-secondary pb-24 pt-24 px-8 w-full mx-auto flex flex-col items-center gap-8 md:gap-12'>
                <div className='text-center'>
                <h2 className="relative font-bold text-3xl md:text-5xl tracking-tight mt-4 mb-4 md:mb-8 ">{heading}</h2>
                <p className="relative text-lg text-base-content/80">{description}</p>
                </div>
               <div className='w-3/4 md:w-1/4 flex items-center'>
                <ButtonLead text={buttonText} toolTipText={buttonToolTip} onClick={handleButtonClick} />
               </div>
                
            </div>
        </motion.section>
    );
};

export default CTA;