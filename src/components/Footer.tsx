export default function Footer() {
    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 0', textAlign: 'center' }}>
            <div className="container">
                <h4 style={{ marginBottom: '1rem', letterSpacing: '2px' }}>SARA DIAS</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Inglês sem Medo. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
