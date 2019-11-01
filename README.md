# jira-tool-cli

[![NPM version](https://badgen.net/npm/v/jira-tool-cli)](https://npmjs.com/package/jira-tool-cli) [![NPM downloads](https://badgen.net/npm/dm/jira-tool-cli)](https://npmjs.com/package/jira-tool-cli) 

```bash
npm install jira-tool-cli -g
```

## Usage

Config
```bash
jira-tool-cli login -u yycao -p passowrd -l www.jira.com
```
### project operation
Get project list

```bash
jira-tool-cli project ls
```

Get project detail
```bash
jira-tool-cli project show [idOrKey] 
```
Get project release list
```bash
jira-tool-cli project showReleases [idOrKey] 
```

### release operation

Get release detail
```bash
jira-tool-cli release show [id] 
```

Get release related issues
```bash
jira-tool-cli release showIssues [id] 
```

### issue operation
Get issue detail
```bash
jira-tool-cli issue show [id] 
```

Get issue work history
```bash
jira-tool-cli issue showHistory [id] 
```

Get issue current status and status list with status id
```bash
jira-tool-cli issue showStatus [id] 
```

Move issue status to another statue
```bash
jira-tool-cli issue statusTo [id] [statusId]
```

## Author

**jira-tool-cli** © [caoyangyang](https://github.com/caoyangyang), Released under the [ISC](./LICENSE) License.<br>
Authored and maintained by caoyangyang with help from contributors ([list](https://github.com/caoyangyang/jira-tool/contributors)).

> [github.com/caoyangyang](https://github.com/caoyangyang) · GitHub [@caoyangyang](https://github.com/caoyangyang)
