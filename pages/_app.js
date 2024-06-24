import { PrismicProvider } from "@prismicio/react";
import { client } from "../Components/api/_prismic";
import "../styles/GlobalStyle.scss"
import PrismicConfig from "../Components/api/_prismicConfig";

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
