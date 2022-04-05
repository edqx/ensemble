import { PackageManagerAdapter } from "../../packageManagerAdapters";
import { BaseHookContext } from "./baseHookContext";

export class GetPackageManagerAdapterHookContext extends BaseHookContext {
    protected alteredAdapter?: PackageManagerAdapter;

    constructor(protected readonly workingDirectory: string, protected readonly adapter?: PackageManagerAdapter) {
        super();
    }

    getWorkingDirectory() {
        return this.workingDirectory;
    }

    getAdapter() {
        return this.adapter;
    }

    getAlteredAdapter() {
        return this.alteredAdapter;
    }

    setAdapter(adapter: PackageManagerAdapter) {
        this.alteredAdapter = adapter;
    }

    invalidateAdapter() {
        this.alteredAdapter = undefined;
    }
}