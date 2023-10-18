import type {LoadInteractionContract} from "./LoadInteractionContract";
import Loader from "./Loader";
import type LinkInteraction from "../models/LinkInteraction";

export default class LoadLinkInteraction extends Loader implements LoadInteractionContract {
    constructor(private interaction: LinkInteraction) {
        super();
    }
    public handle() {
        console.log('loading link interaction');
    }
}
