import fs from "fs/promises";
import path from "path";
import { PluginLoader } from "./pluginLoader";

const npmFiles = [ "package-lock.json" ];
const yarnFiles = [ ".yarn", "node_modules/.yarn-state.yml", ".yarnrc.yml", "yarn.lock", ".pnp.cjs" ];
const pnpmFiles = [ "pnpm-lock.yaml" ]

export enum PackageManager {
    Npm,
    Yarn,
    Pnpm
}

async function checkFileExists(filePath: string) {
    try {
        await fs.open(filePath, "");

        return true;
    } catch (e) {
        return false;
    }
}

async function checkAnyFileExists(filePaths: string[]) {
    for (const filePath of filePaths) {
        if (await checkFileExists(filePath))
            return true;
    }

    return false;
}

export class EnsembleProject {
    static create(workingDirectory: string) {
        const pluginLoader = new PluginLoader;

        
    }
}