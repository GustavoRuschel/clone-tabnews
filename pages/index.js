import { useEffect, useState } from 'react';

function Home() {
    const [text, setText] = useState("Pensa em um número de 1 a 10");

    useEffect(() => {
        const timer = setTimeout(() => {
            setText("Vai estudar e para de perder tempo! 😹");
        }, 5000); // muda o texto após 5 segundos

        return () => clearTimeout(timer); // limpa o timer se o componente for desmontado
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>{text}</h1>
        </div>
    );
}

export default Home;