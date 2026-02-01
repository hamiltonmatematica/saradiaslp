import { User } from 'lucide-react';

export default function Instructor() {
    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Quem vai te <span className="text-gradient">ensinar</span></h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        width: '240px',
                        height: '240px',
                        borderRadius: '50%',
                        marginBottom: '2rem',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '4px solid var(--primary)',
                        boxShadow: '0 0 40px rgba(0,0,0,0.5), 0 0 10px var(--accent)'
                    }}>
                        <div style={{ width: '100%', height: '100%', backgroundColor: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <User size={120} color="#666" />
                        </div>
                    </div>

                    <h3 className="text-gradient-gold" style={{ fontSize: '3rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Sara Dias</h3>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
                        Professora de inglês focada em comunicação oral
                    </p>

                    <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--accent)' }}>
                        <p style={{ fontSize: '1.4rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--text-main)' }}>
                            "Meu objetivo é te mostrar que aprender inglês pode ser simples, possível e acessível, mesmo começando do zero."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
