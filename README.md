# agile-board-cli

[![NPM version](https://badgen.net/npm/v/agile-board-cli)](https://npmjs.com/package/agile-board-cli) [![NPM downloads](https://badgen.net/npm/dm/agile-board-cli)](https://npmjs.com/package/agile-board-cli) 

```bash
npm install agile-board-cli -g
```

## Usage

Config
```bash
agile-board-cli init
```
### project operation
Get project list

```bash
agile-board-cli project ls
```

Get project detail
```bash
agile-board-cli project show [idOrKey] 
```
Get project release list
```bash
agile-board-cli project showReleases [idOrKey] 
```

### release operation

Get release detail
```bash
agile-board-cli release show [id] 
```

Get release related issues
```bash
agile-board-cli release showIssues [id] 
```

### issue operation
Get issue detail
```bash
agile-board-cli issue show [id] 
```

Get issue work history
```bash
agile-board-cli issue showHistory [id] 
```

Get issue current status and status list with status id
```bash
agile-board-cli issue showStatus [id] 
```

Move issue status to another statue
```bash
agile-board-cli issue statusTo [id] [statusId]
```

## Author

**agile-board-cli** © [caoyangyang](https://github.com/caoyangyang), Released under the [ISC](./LICENSE) License.<br>
Authored and maintained by caoyangyang with help from contributors ([list](https://github.com/caoyangyang/agile-board-cli/contributors)).

> [github.com/caoyangyang](https://github.com/caoyangyang) · GitHub [@caoyangyang](https://github.com/caoyangyang)
