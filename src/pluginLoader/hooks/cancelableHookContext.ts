import { BaseHookContext } from "./baseHookContext";

export class CancelableHookContext extends BaseHookContext {
    private _isCanceled = false;

    cancel() {
        this._isCanceled = true;
    }

    isCanceled() {
        return this._isCanceled;
    }
}