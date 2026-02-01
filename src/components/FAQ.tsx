import { ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="glass-card" style={{ marginBottom: '1rem', overflow: 'hidden' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '1.5rem',
                    textAlign: 'left',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: isOpen ? 'var(--highlight)' : 'var(--text-main)',
                    cursor: 'pointer',
                    transition: 'color 0.2s'
                }}
            >
                <span>{question}</span>
                {isOpen ? <ChevronDown color="var(--highlight)" /> : <Plus color="var(--text-secondary)" />}
            </button>

            <div style={{
                height: isOpen ? 'auto' : '0',
                overflow: 'hidden',
                transition: 'height 0.3s ease'
            }}>
                <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default function FAQ() {
    const faqs = [
        { q: "Preciso saber inglês para começar?", a: "Não. O curso começa do zero e foi desenhado especificamente para quem nunca estudou ou tem dificuldades com o básico." },
        { q: "As aulas são em inglês?", a: "As explicações são feitas 100% em português claro e objetivo, e a prática é feita em inglês. Você entende tudo antes de falar." },
        { q: "Quanto tempo preciso estudar por dia?", a: "O método é otimizado para quem tem pouco tempo. Cerca de 20 a 30 minutos por dia são suficientes para manter a constância e evoluir." },
        { q: "Por quanto tempo terei acesso?", a: "O acesso por um ano, permitindo que você estude no seu próprio ritmo." }
    ];

    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="section-title">Perguntas <span className="text-gradient">frequentes</span></h2>

                <div style={{ marginTop: '3rem' }}>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
}
