import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Esto mueve la ventana a la parte superior
    }, [pathname]); // Se ejecuta cada vez que cambie la ruta

    return null; // No necesita renderizar nada
}
