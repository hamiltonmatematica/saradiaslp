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
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/m9S9BIk9H2w?si=Sc74w8E7s8X9k9l9"
            title="Aula 1 - Inglês sem Medo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ border: 'none' }}
          ></iframe>
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
