import { CheckCircle2 } from 'lucide-react';

export default function TargetAudience() {
    const items = [
        "Já tentou aprender inglês e se sentiu perdido",
        "Teve aula onde o professor só falava em inglês",
        "Sente insegurança ou medo de falar",
        "Quer aprender do zero de forma prática",
        "Precisa do inglês para situações reais"
    ];

    return (
        <section className="section" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <h2 className="section-title">Esse curso é para <span className="text-gradient">você que</span></h2>

                <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {items.map((item, index) => (
                        <div key={index} className="glass-card" style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1.5rem',
                            transition: 'transform 0.2s',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(10px) scale(1.02)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0) scale(1)'; }}
                        >
                            <CheckCircle2 color="var(--accent)" style={{ minWidth: '24px', marginRight: '1.5rem' }} />
                            <span style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
