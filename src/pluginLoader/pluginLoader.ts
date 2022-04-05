import { GetPackageManagerAdapterHookContext } from "./hooks";

export interface HookDeclContext {
    "getPackageManagerAdapter": GetPackageManagerAdapterHookContext;
}

export type HookFunction<T extends keyof HookDeclContext> = (ctx: HookDeclContext[T]) => Promise<void>|void;

export class PluginLoader {
    registeredHooks: Map<keyof HookDeclContext, HookFunction<keyof HookDeclContext>[]> = new Map;
}