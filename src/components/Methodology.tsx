import { Mic, Layers, TrendingUp } from 'lucide-react';

export default function Methodology() {
    const items = [
        { text: "Construção de frases desde a aula 01", icon: <Layers /> },
        { text: "Repetição em voz alta para destravar a fala", icon: <Mic /> },
        { text: "Vocabulário aplicado ao dia a dia", icon: <TrendingUp /> }
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Como você vai <span className="text-gradient-gold">aprender na prática</span></h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto 4rem'
                }}>
                    {items.map((item, index) => (
                        <div key={index} className="glass-card" style={{
                            textAlign: 'center',
                            padding: '3rem 2rem',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            borderTop: '2px solid var(--highlight)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = 'var(--neon-shadow)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                            }}
                        >
                            <div style={{ color: 'var(--highlight)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                {/* Clone icon with larger size */}
                                <div style={{ transform: 'scale(2)' }}>{item.icon}</div>
                            </div>
                            <p style={{ fontWeight: 600, fontSize: '1.1rem', color: 'white' }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
