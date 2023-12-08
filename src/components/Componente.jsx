import React, { useRef, useState } from 'react';

const SwipeDetector = () => {
    const [startX, setStartX] = useState(null);
    const [endX, setEndX] = useState(null);
    const [reachedMargin, setReachedMargin] = useState(false);
    const swipeContainerRef = useRef(null);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setReachedMargin(false);
    };

    const handleTouchMove = (e) => {
        if (!startX) {
            return;
        }

        const currentX = e.touches[0].clientX;

        if (!reachedMargin) {
            const deltaX = Math.abs(currentX - startX);
            
            if (deltaX >= 80) {
                console.log("x")
                setReachedMargin(true);
            }

            return;
        }

        setEndX(currentX);
    };

    const handleTouchEnd = () => {
        if (startX !== null && endX !== null) {
            const deltaX = endX - startX;

            if (deltaX > 0) {
                console.log('Swipe hacia la derecha');
            } else if (deltaX < 0) {
                console.log('Swipe hacia la izquierda');
            }

            // Reiniciar valores
            setStartX(null);
            setEndX(null);
            setReachedMargin(false);
        }
    };

    return (
        <div
            ref={swipeContainerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                position: "absolute",
                top: 0,
                width: '100%',
                height: '200px',
                background: 'lightgray',
                overflow: 'hidden',
            }}
        >
            {/* Contenido de tu div */}
            <p>Desliza aquí</p>
        </div>
    );
};

export default SwipeDetector;
