# Writing Logger

## Setup

- Install [nvm](https://github.com/nvm-sh/nvm)

```
// set Node version to be used
nvm use

// install all depedencies
npm ci

// run in watch mode
npm run serve:ssr

```


## Contribute

This project uses [Husky](https://typicode.github.io/husky/) to lint branch names and commit messages.

### Branch naming

All branch names must follow the convention of `<type>/<scope>` with type being `feat`, `fix` or `other`.

### Commit messages

All commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci:** Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs:** Documentation only changes
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test:** Adding missing tests or correcting existing tests

## Versioning

The versioning of this project follows the [Semantic Versioning](https://semver.org/) system.

- MAJOR version when you make incompatible changes
- MINOR version when you add functionality in a backward compatible manner
- PATCH version when you make backward compatible bug fixes

### Semver and Conventional Commits

- **fix/other:** a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
- **feat:** a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
- **BREAKING CHANGE:** a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
