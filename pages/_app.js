import { PrismicProvider } from "@prismicio/react";
import { client } from "./api/prismic";
import "../styles/GlobalStyle.scss"

export default function App({ Component, pageProps }) {
  return(
    <>
    <PrismicProvider client={client}>
      <Component {...pageProps} />
    </PrismicProvider>
    </>
  )
}
