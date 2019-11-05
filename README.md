# agile-board-cli

[![NPM version](https://badgen.net/npm/v/agile-board-cli)](https://npmjs.com/package/agile-board-cli) [![NPM downloads](https://badgen.net/npm/dm/agile-board-cli)](https://npmjs.com/package/agile-board-cli) 

## Install
```bash
npm install agile-board-cli -g
```

## How to use

### config account info
```bash
agile-board-cli init
```
[how to get token](https://github.com/caoyangyang/agile-board-cli/blob/master/GET_API_KEYS.md)
### project operation


```bash
# Get project list
agile-board-cli project ls 

#Get project detail
agile-board-cli project show [idOrKey]  

#Get project release list
agile-board-cli project showReleases [idOrKey]  
```

### release operation

```bash
#Get release detail
agile-board-cli release show [id] 

#Get release related issues
agile-board-cli release showIssues [id] 
```

### issue operation

```bash
#Get issue detail
agile-board-cli issue show [id] 

#Get issue work history
agile-board-cli issue showHistory [id] 

#Get issue current status and status list with status id
agile-board-cli issue showStatus [id] 

#Move issue status to another statue
agile-board-cli issue statusTo [id] [statusId]
```

## Author

**agile-board-cli** © [caoyangyang](https://github.com/caoyangyang), Released under the [ISC](./LICENSE) License.<br>
Authored and maintained by caoyangyang with help from contributors ([list](https://github.com/caoyangyang/agile-board-cli/contributors)).

> [github.com/caoyangyang](https://github.com/caoyangyang) · GitHub [@caoyangyang](https://github.com/caoyangyang)
