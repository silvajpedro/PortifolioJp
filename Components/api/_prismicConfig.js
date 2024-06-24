import PrismicContext from "./_prismic";
import { useFirstPrismicDocument } from "@prismicio/react";

export default function PrismicConfig({children}) {

    const [document] = useFirstPrismicDocument();

    return (
        <PrismicContext.Provider value={document}>
            {children}
        </PrismicContext.Provider>
    )
}