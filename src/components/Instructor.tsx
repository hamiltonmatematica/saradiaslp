

export default function Instructor() {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Image Column */}
                    <div className="animate-up" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: 'var(--gold-shadow)',
                            border: '4px solid var(--primary-light)', // Frame effect
                        }}>
                            <img
                                src="/z_SaraEscolhidas-0002.jpg"
                                alt="Sara Dias - Professora de Inglês"
                                style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    height: 'auto',
                                    display: 'block',
                                    objectFit: 'cover'
                                }}
                            />
                            {/* Overlay/Gradient for better text readability if we put text over it in future */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 40%)',
                                pointerEvents: 'none'
                            }} />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="animate-up delay-200" style={{ textAlign: 'left' }}>
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem', color: 'var(--text-main)' }}>
                            Quem vai te <span className="text-gradient">ensinar</span>
                        </h2>

                        <h3 className="text-gradient-gold" style={{ fontSize: '2.5rem', marginBottom: '1rem', textTransform: 'uppercase', lineHeight: 1.1 }}>
                            Sara Dias
                        </h3>

                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', marginBottom: '2rem' }} />

                        <div style={{ color: 'var(--text-main)', fontSize: '1.15rem' }}>
                            <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                Comecei a dar aulas de inglês aos 17 anos — e já são <strong>18 anos ensinando</strong>. Estudei na Universidade Estadual de Montes Claros e passei 12 anos lecionando em escolas de idiomas, até decidir trilhar meu próprio caminho.
                            </p>
                            <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                Há 6 anos, ensino inglês online e produzo conteúdo para ajudar pessoas a destravarem de vez o idioma.
                            </p>
                            <p style={{ lineHeight: 1.8 }}>
                                Agora, reuni toda essa experiência em um <strong style={{ color: 'var(--primary)' }}>curso básico de inglês</strong>, pensado para guiar você passo a passo de forma simples, prática e possível.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
