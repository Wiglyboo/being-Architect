import React from 'react';
import ContactSection from '../components/Contact';

const Contact: React.FC = () => {
    return (
        <>
            <section className="pt-32 bg-brand-black text-white px-6 pb-0">
                <div className="container mx-auto mb-16">
                    <h1 className="text-5xl md:text-7xl font-display font-black uppercase leading-none">
                        Get in <span className="text-brand-yellow">Touch</span>
                    </h1>
                </div>
            </section>
            <ContactSection />
        </>
    );
};

export default Contact;
