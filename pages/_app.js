import { PrismicProvider } from "@prismicio/react";
import { client } from "./Components/api/prismic";
import "../styles/GlobalStyle.scss"
import PrismicConfig from "./Components/api/PrismicConfig";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PrismicProvider client={client}>
        <PrismicConfig>
          <Component {...pageProps} />
        </PrismicConfig>
      </PrismicProvider>
    </>
  )
}
