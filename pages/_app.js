import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';
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
  useEffect(() => {
    // Lógica o efectos secundarios que se ejecutarán después de que el componente se monte
    // Puedes colocar aquí llamadas a APIs, suscripciones, etc.
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
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
