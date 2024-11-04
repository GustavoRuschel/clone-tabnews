import { useEffect, useState } from 'react';

function Home() {
    const [text, setText] = useState("Seu gatinho é gordinho :D e fofinho");

    useEffect(() => {
        const timer = setTimeout(() => {
            setText("Ops, acho que seu gatinho comeu o texto! 😹");
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