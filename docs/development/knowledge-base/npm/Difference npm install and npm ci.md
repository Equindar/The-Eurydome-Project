# Difference `npm install` and `npm ci`

> In short, the main differences between using npm install and npm ci are:
> 
> - The project must have an existing package-lock.json or npm-shrinkwrap.json.
> - If dependencies in the package lock do not match those in package.json, npm ci will exit with an error, instead of updating the package lock.
> - npm ci can only install entire projects at a time: individual dependencies cannot be added with this command.
> - If a node_modules is already present, it will be automatically removed before npm ci begins its install.
> - It will never write to package.json or any of the package-locks: installs are essentially frozen.

   *Source: https://stackoverflow.com/questions/52499617/what-is-the-difference-between-npm-install-and-npm-ci*

Documentation can be found here:
https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable