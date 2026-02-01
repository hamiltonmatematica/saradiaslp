export default function CoursePresentation() {
    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-8 animate-up">
                    <h2 className="section-title">Curso <span className="text-gradient">Inglês sem medo</span></h2>
                    <p className="section-subtitle" style={{ color: 'var(--highlight)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                        Não é um curso de gramática. É um curso para falar inglês.
                    </p>
                </div>

                <div className="animate-up delay-100" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <p className="mb-8" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Esse curso foi criado para quem está começando do zero ou já tentou aprender inglês e travou.<br />
                        Aqui eu explico em português primeiro e depois te ensino a montar as frases em inglês, sem confusão e sem medo.
                    </p>

                    <div className="glass-card" style={{
                        padding: '3rem',
                        border: '1px solid var(--accent)',
                        boxShadow: '0 0 20px var(--accent-glow)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(212, 175, 55, 0.05)'
                    }}>
                        <p className="text-gradient-gold" style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.4, textTransform: 'uppercase' }}>
                            Ao final da primeira aula do curso, você já consegue falar mais de 60 frases em inglês.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
