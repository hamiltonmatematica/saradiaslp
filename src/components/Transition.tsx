export default function Transition() {
    return (
        <section className="section" style={{ position: 'relative' }}>
            {/* Decorative Glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(5, 10, 20, 0) 0%, var(--bg-dark) 100%)', zIndex: -1
            }} />

            <div className="container text-center">
                <div className="glass-card animate-up" style={{ padding: '4rem 2rem', border: '1px solid var(--accent-glow)' }}>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', textTransform: 'uppercase' }}>
                        Gostou da aula?<br />
                        <span className="text-gradient-gold">Então o curso completo é para você</span>
                    </h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        Se nessa aula gratuita você já conseguiu entender a lógica e começar a falar, no curso completo eu te acompanho passo a passo para desenvolver segurança e constância.
                    </p>
                </div>
            </div>
        </section>
    );
}
