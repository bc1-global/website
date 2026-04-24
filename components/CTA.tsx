import React from 'react';
import { Link } from 'react-router-dom';
import { StoreButtons } from './StoreButtons';

export const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-bc1-dark relative overflow-hidden flex items-center justify-center text-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-hero-glow opacity-40 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center space-y-10">
        <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
          Pronto para a sua nova <br className="hidden md:block"/>
          <span className="text-bc1-lime">experiência digital?</span>
        </h2>

        <p className="text-xl text-bc1-textMuted max-w-xl leading-relaxed">
          Junte-se a milhares de pessoas que já simplificaram sua rotina financeira com a Bc1.
        </p>

        <div className="flex flex-col items-center gap-8">
          <StoreButtons />

          <Link to="/support">
            <button className="px-12 py-5 bg-bc1-lime text-black font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-bc1-lime/20 cursor-pointer">
              Falar com um Especialista
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
