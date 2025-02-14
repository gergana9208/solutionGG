# Junior Technical Assesment

This is a basic technical test for potential Kore developers.

This has been designed to provide an insight into the type of projects you'll be working on day to day. 
Nothing in here has been done to deliberately catch you out.

This repo contains a basic Angular app with some components and tests mirroring a fairly typical setup.

For simplicity authentication, authorisation and apis have been excluded. 
There is a service class which is emulating api like responses.

Before doing anything you will need to clone this repo and install the dependancies using `pnpm`.

We then have some simple tasks we'd like you to attempt, these are shown within the code using `@fixme`.

1. Refactor the product card out of the main app component into it's own (with tests)
1. Ensure errors during create/update of a product are shown to the user
1. Provide meaningful feedback to the user depending on the validation error
1. Ensure form data is not lost if errors occur
1. Complete the missing tests


## Development server

To start a local development server, run:

```bash
pnpm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
pnpm ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
pnpm ng generate --help
```

## Running unit tests

```bash
pnpm test
```


# Junior Technical Assesment Solution Steps

1. Refactor the product card out of the main app component into it's own (with tests)

Removed the code for a product card from app.component.html.
Created a new component product-card with the cli and made into a reusable component.
Added tests in product-card.component.spec.ts for new the product-card component.
Imported the product-card component into app.component.ts
Added the new product-card component inside app.component.html

2. Ensure errors during create/update of a product are shown to the user

Added error messages to be displayed when create/update product fails
Added a test to check if the error message is displayed when the crete/update fails

3. Provide meaningful feedback to the user depending on the validation error

Added meaningful feedback about errors within the form

4. Ensure form data is not lost if errors occur

Made sure data is not lost if there are errors in the form when create/update a product

5. Complete the missing tests

Added the missing tests in product-form.component.spec.ts

