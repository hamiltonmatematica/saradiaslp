export default function FinalCTA() {
    return (
        <section className="section" style={{ position: 'relative', padding: '8rem 0' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
                zIndex: -1
            }} />

            <div className="container text-center">
                <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: 1 }}>
                    CONTINUE APRENDENDO <br />
                    <span className="text-gradient">INGLÊS SEM MEDO</span>
                </h2>

                <p className="mb-8" style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto 4rem', color: 'var(--text-secondary)' }}>
                    Se essa aula gratuita já te ajudou, imaginem o que o curso completo fará por você. Método, constância e segurança para falar de verdade.
                </p>

                <a href="https://pay.hotmart.com/C104256931L?bid=1770918139578" className="btn btn-primary" style={{ fontSize: '1.3rem', padding: '1.5rem 4rem', textTransform: 'uppercase' }}>
                    QUERO ENTRAR NO CURSO
                </a>

                <div style={{
                    marginTop: '1.5rem',
                    padding: '1.25rem',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))',
                    borderRadius: '12px',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    maxWidth: '400px',
                    margin: '1.5rem auto'
                }}>
                    <p style={{
                        marginBottom: '0.75rem',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                    }}>
                        💳 7x de R$ 28,15
                    </p>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        fontWeight: 600
                    }}>
                        Ou R$ 197,00 à vista
                    </p>
                </div>

                <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>
                    GARANTIA DE 7 DIAS • ACESSO IMEDIATO • PAGAMENTO SEGURO
                </p>
            </div>
        </section>
    );
}
