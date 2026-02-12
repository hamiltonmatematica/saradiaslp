import { Play } from 'lucide-react';
import '../index.css';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container text-center animate-up">
        {/* Badge */}
        <div className="mb-8 delay-100">
          <span style={{
            color: 'var(--accent)',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            border: '1px solid var(--accent)',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            backgroundColor: 'rgba(212, 175, 55, 0.1)'
          }}>
            Curso Básico de Inglês
          </span>
        </div>

        {/* Title */}
        <h1 className="delay-200" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
          INGLÊS <span className="text-gradient">SEM MEDO</span>
        </h1>

        <p className="delay-300" style={{ fontSize: '1.5rem', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          Assista à aula gratuita e comece a falar inglês desde a primeira aula
        </p>

        {/* Video Container - Glass & Glow */}
        <div className="glass-card delay-300" style={{
          maxWidth: '900px',
          margin: '0 auto 3rem',
          aspectRatio: '16/9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--neon-shadow)',
          border: '1px solid var(--highlight-glow)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle background placeholder for video */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, #1a2c4e 0%, #000 100%)', zIndex: -1 }} />

          <div style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'var(--highlight)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px var(--highlight-glow)',
              marginBottom: '1rem'
            }}>
              <Play size={40} color="black" fill="black" style={{ marginLeft: '4px' }} />
            </div>
            <p style={{ fontWeight: 600, letterSpacing: '1px' }}>ASSISTIR AGORA</p>
          </div>
        </div>

        <div className="delay-300" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
          <p className="mb-4">
            Essa aula é parte do método <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Inglês sem medo</span>.
          </p>
          <p>
            Aqui você entende em português primeiro e depois aprende a montar e falar frases em inglês.
          </p>
        </div>
      </div>
    </section>
  );
}
