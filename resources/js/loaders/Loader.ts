import type {LoadInteractionContract} from "./LoadInteractionContract";

export default abstract class Loader implements LoadInteractionContract {
    abstract handle(): void;
}
