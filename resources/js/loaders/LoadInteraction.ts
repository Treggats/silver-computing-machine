import type {LoadInteractionContract} from "./LoadInteractionContract";
import LoadMenuInteraction from "./LoadMenuInteraction";
import LoadLinkInteraction from "./LoadLinkInteraction";
import Interaction from "../models/Interaction";

export type LoaderType = 'menu' | 'link';

type LoaderItem = {
    type: LoaderType;
    loader: typeof LoadMenuInteraction | typeof LoadLinkInteraction;
};

interface Prop {
    type: string;
}

interface TInteraction extends Prop {}

export default class LoadInteraction {
    private loaders: LoaderItem[] = [];
    private readonly interaction: TInteraction;

    constructor(interaction: TInteraction) {
        this.interaction = interaction;
        this.registerLoaders();
    }

    public static make(type: string): LoadInteraction {
        return new LoadInteraction(
            new Interaction(type)
        );
    }

    getForType(type: LoaderType) {
        const loaderItem = this.loaders.find(item => item.type === type);
        if (!loaderItem) {
            return;
        }

        const {loader} = loaderItem;

        // @ts-ignore
        return new loader(this.interaction);
    }

    private registerLoaders(): void {
        this.loaders.push(
            {
                type: 'menu',
                loader: LoadMenuInteraction,
            },
            {
                type: 'link',
                loader: LoadLinkInteraction,
            }
        );
    }
}
