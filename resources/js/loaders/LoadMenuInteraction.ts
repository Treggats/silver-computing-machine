import type {LoadInteractionContract} from "./LoadInteractionContract";
import Loader from "./Loader";
import type MenuInteraction from "../models/MenuInteraction";

export default class LoadMenuInteraction extends Loader implements LoadInteractionContract {
    constructor(private interaction: MenuInteraction) {
        super();
    }

    public handle() {
        console.log('load menu interaction');
    }
}
