import '../index.css';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container text-center">
        {/* Badge */}
        <div className="mb-8 animate-up delay-100">
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
        <h1 className="animate-up delay-200" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
          INGLÊS <span className="text-gradient">SEM MEDO</span>
        </h1>

        <p className="animate-up delay-300" style={{ fontSize: '1.5rem', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          Assista à aula gratuita e comece a falar inglês desde a primeira aula
        </p>

        {/* Video Container - Glass & Glow */}
        {/* Changed to padding-bottom hack for wider browser compatibility */}
        <div className="animate-up delay-300" style={{ width: '100%', maxWidth: '900px', margin: '0 auto 3rem' }}>
          <div className="glass-card" style={{
            position: 'relative',
            paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
            height: 0,
            width: '100%',
            boxShadow: 'var(--neon-shadow)',
            border: '1px solid var(--highlight-glow)',
            overflow: 'hidden'
          }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              src="https://www.youtube.com/embed/m9S9BIk9H2w?si=Sc74w8E7s8X9k9l9"
              title="Aula 1 - Inglês sem Medo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="animate-up delay-300" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
          <p className="mb-4">
            Essa aula é parte do método <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Inglês sem medo</span>.
          </p>
          <p>
            Aqui você entende em português primeiro e depois aprende a montar e falar frases em inglês.
          </p>
        </div>

        {/* Main CTA */}
        <div className="animate-up delay-300" style={{ marginTop: '3rem' }}>
          <a href="#" className="btn btn-primary" style={{
            fontSize: '1.2rem',
            padding: '1rem 3rem',
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: '1px'
          }}>
            QUERO ENTRAR NO CURSO
          </a>
        </div>
      </div>
    </section>
  );
}
