import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import Loader from "@/Component/Loader";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  body{
    background-color: #0000;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Big Shoulders Display', 'cursive';
  }
`;

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Función para activar el estado isLoading al recargar la página
    function handleBeforeUnload() {
      setIsLoading(true);
    }

    // Escuchar el evento beforeunload (recargar la página)
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Simulamos una demora de 2 segundos antes de mostrar el contenido
    const delay = 2000;
    setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Eliminar el evento antes de desmontar el componente
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {isLoading ? <Loader /> : <Component {...pageProps} />}
      <Analytics />
    </>
  );
}
