import { HeartHandshake } from 'lucide-react';

export default function EmotionalGuarantee() {
    return (
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background flare */}
            <div style={{
                position: 'absolute', top: '-50%', left: '-20%', width: '80%', height: '200%',
                background: 'radial-gradient(circle, rgba(0,212,255,0.03) 0%, transparent 60%)', zIndex: -1
            }} />

            <div className="container text-center">
                <div style={{
                    display: 'inline-flex',
                    padding: '2rem',
                    borderRadius: '50%',
                    marginBottom: '2rem',
                    boxShadow: 'var(--neon-shadow)',
                    border: '1px solid var(--highlight-glow)'
                }}>
                    <HeartHandshake size={64} color="var(--highlight)" />
                </div>

                <h2 className="section-title">Você não vai se sentir <span style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>perdido</span></h2>

                <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        Eu garanto que você não vai se sentir perdido, inseguro ou com medo.
                    </p>
                </div>
            </div>
        </section>
    );
}
