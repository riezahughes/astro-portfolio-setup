// a generate file function will go here.
// using inputs from the command line, it will loop through each template involved
// each file will be read, with template literals filled in. 
// The file will then be copied to the correct directory based on the command
// eg: npm run component:generate MyFirstComponent will generate a file structure like so:
/*
--- /src/
------ /components/
---------- /MyFirstComponent/
------------- MyFirstComponent.tsx
------------- MyFirstComponent.test.tsx
------------- MyFirstComponent.story.tsx
------------- styles.module.css
------------- types.d.ts
*/
// It will also generate a new /components/index file for importing and overwrite the file.
// It is a very quick way to build new components in react going forward with this project
// for when they are needed.


// it will just use fs. Read the file, mark the variables before pulling in the files to output.