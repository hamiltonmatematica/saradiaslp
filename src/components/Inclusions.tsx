import { Gift } from 'lucide-react';

export default function Inclusions() {
    const items = [
        "Aulas gravadas passo a passo",
        "Produção de frases faladas desde a aula 01",
        "Material de apoio completo",
        "Tarefas práticas após as aulas",
        "Acesso ao curso por 1 ano",
        "Método estruturado para iniciantes absolutos"
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">O que você <span className="text-gradient-gold">recebe</span> ao entrar no curso</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {items.map((item, index) => (
                        <div key={index} className="glass-card" style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '2rem',
                            transition: 'transform 0.2s',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ marginRight: '1.5rem' }}>
                                <Gift color="var(--accent)" />
                            </div>
                            <span style={{ fontWeight: 500, fontSize: '1.1rem', color: 'var(--text-main)' }}>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
