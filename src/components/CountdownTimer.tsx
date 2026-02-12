import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 12,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Get or set the expiration time
        const getExpirationTime = () => {
            const stored = localStorage.getItem('offerExpiration');
            if (stored) {
                return parseInt(stored);
            } else {
                const expiration = Date.now() + (12 * 60 * 60 * 1000); // 12 hours from now
                localStorage.setItem('offerExpiration', expiration.toString());
                return expiration;
            }
        };

        const expirationTime = getExpirationTime();

        const timer = setInterval(() => {
            const now = Date.now();
            const difference = expirationTime - now;

            if (difference > 0) {
                const hours = Math.floor(difference / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ hours, minutes, seconds });
            } else {
                // Reset the timer after expiration
                localStorage.removeItem('offerExpiration');
                const newExpiration = Date.now() + (12 * 60 * 60 * 1000);
                localStorage.setItem('offerExpiration', newExpiration.toString());
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(239, 68, 68, 0.1))',
            border: '2px solid rgba(239, 68, 68, 0.5)',
            borderRadius: '50px',
            marginBottom: '1rem',
            animation: 'pulse 2s ease-in-out infinite'
        }}>
            <Clock size={18} style={{ color: '#ef4444' }} />
            <span style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#ef4444',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
            }}>
                Oferta expira em: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
        </div>
    );
}
