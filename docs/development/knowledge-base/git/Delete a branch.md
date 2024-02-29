---
state: Unstructured
level: Data
language: English
---
# Deleting a branch
## Deleting _local_ branches in Git

```shell
git branch -d feature/login
```

Using the "-d" flag, you tell "git branch" which item you want to delete.

Note that you might also need the "-f" flag if you're trying to delete a branch that contains _unmerged changes_. Use this option with care because it makes losing data very easy.

## Deleting _remote_ branches in Git

To delete a remote branch, we do **not** use the "git branch" command - but instead "git push" with the "--delete" flag:

```shell
git push origin --delete feature/login
```

Source: https://www.git-tower.com/learn/git/faq/delete-remote-branch