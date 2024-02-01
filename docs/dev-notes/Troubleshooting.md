---
state: Unstructured
level: Data
---
# Trouble-Shooting
## Git
### Remote Branches out of sync on my local machine
> When fetching from a repository, the new (remote) references are synced up automatically but the old ones aren't cleaned out from the local. The purge option fixes that.
> Source: [https://stackoverflow.com/questions/6373277/synchronizing-a-local-git-repository-with-a-remote-one]

Use `git fetch --prune` to clear all 


## Obsidian
### How to resize a linked image

For the image file image-name.png located in the vault
`![[image-name.png | 100 ]]` 

For an external image located in the internet (using the url)
`![| 50 ](http://url-to-the-image)`


___
Tags: #dev #git