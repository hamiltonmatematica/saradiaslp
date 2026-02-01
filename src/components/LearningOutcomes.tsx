import { Check } from 'lucide-react';

export default function LearningOutcomes() {
    const items = [
        "Montar frases afirmativas, negativas e perguntas",
        "Falar sobre rotina, comida, trabalho, família e situações do dia a dia",
        "Fazer perguntas básicas em inglês",
        "Se comunicar sem travar",
        "Entender a estrutura do inglês sem decorar regras"
    ];

    return (
        <section className="section" style={{
            background: 'radial-gradient(ellipse at center, #112 0%, var(--bg-dark) 80%)'
        }}>
            <div className="container">
                <h2 className="section-title">O que você será <span className="text-gradient">capaz de fazer</span></h2>

                <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>
                    <ul style={{ listStyle: 'none' }}>
                        {items.map((item, index) => (
                            <li key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '2rem',
                                fontSize: '1.25rem',
                                borderBottom: index !== items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                paddingBottom: index !== items.length - 1 ? '2rem' : '0'
                            }}>
                                <div style={{
                                    minWidth: '32px',
                                    height: '32px',
                                    backgroundColor: 'var(--accent)',
                                    borderRadius: '50%',
                                    marginRight: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 0 10px var(--accent-glow)'
                                }}>
                                    <Check size={20} color="black" strokeWidth={3} />
                                </div>
                                <span style={{ color: 'var(--text-main)' }}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
