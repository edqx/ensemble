# Ensemble

Ensemble is a node.js CLI linting utility to ensure that your project or package structure stays relevant, consistent and organised always. It has native support for Yarn, PNPM and NPM and even supports workspaces, monorepo.

### What does it check?

Ensemble will check everything related to your project structure, including, but not limited to:

- Classes per file
- Filenames (consistent casing, class/export name)
- Directory names (plurals, consistent casing)
- Directory exports
- Package.json relevance
- Dependencies (versions, correctly installed as dev)
- Workspace dependencies (correctly linked, no circular dependencies)
- Installed utilities (code linters, testers, git hooks)

### Plugins
Ensemble also has full support for plugins, allowing them to hook certain parts of ensemble for new features or to modify existing behaviour, such as adding support for new package managers.

