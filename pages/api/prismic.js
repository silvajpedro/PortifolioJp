import * as Prismic from "@prismicio/client";
import { createContext } from "react";

export const client = Prismic.createClient("silvajpedro",{
    accessToken: "MC5aWlZoU3hBQUFDQUFqaDll.B--_vUDvv701QnUS77-977-977-977-9Y--_vWod77-9fjda77-9L--_vS7vv71dau-_ve-_vUIn77-9",
});

const PrismicContext = createContext(null);

export default PrismicContext