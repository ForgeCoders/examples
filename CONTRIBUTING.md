# Contributing to ForgeCoders Examples

Thanks for contributing to the examples repository.

## Repository layout

Every example lives in a `{language}/{example-name}/` directory:

- source files for the example
- a `README.md` documenting how to run it and what it teaches

Current categories:

- `python/`
- `javascript/`
- `html-css/`

If an example needs a new language, create the new category folder at the same level and keep the example inside it.

## README format

Every example README should include:

1. A `#` title matching the example name
2. `## Description` - one short paragraph explaining what the example does
3. `## Run` - the command or open instructions needed to try it
4. `## Learning Goals` - a bullet list of beginner-friendly takeaways
5. Optional `## Preview` or screenshots when the result is visual

Use existing READMEs such as `python/hello-world/README.md` as the reference shape.

## Submitting an example

1. Fork the repository and create a branch from `main`.
2. Add the example under the correct category folder.
3. Keep the code simple, commented where useful, and runnable locally.
4. Add a README following the format above.
5. Test the example before opening the pull request.
6. Push the branch and open a pull request using the repository template.
7. Describe what the example teaches and how you verified it.

## Guidelines

- Keep examples simple and focused on one concept.
- Write beginner-friendly code with clear names.
- Include a README for every example.
- Avoid dependencies when a standard library version is just as clear.
- Add screenshots only when they help someone understand a visual example.
