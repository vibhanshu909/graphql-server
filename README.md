<h1 align="center">Add GraphQL Server to Svelte kit application</h1>

## What is this?

This is an **experimental** project to run to add a GraphQL server (powered by [`apollo-server-lambda`](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-lambda)) to your SvelteKit project (works for both typescript & javascript).

## Usage

You must start with a fresh copy of the official SvelteKit template, which is currently created by running this command.

```sh
npm init svelte@next
```

Once that is set up, run this command in your project directory to set up GraphQL:

```sh
npx apply vibhanshu909/graphql-server --no-ssh
```

After the preset runs,

- You can visit GraphQL Playground in the browser at the `/graphql` endpoint.

- You can query your API (with POST requests) at the `/graphql` endpoint.

## 😵 Help! I have a question

[Create an issue](https://github.com/vibhanshu909/graphql-server/issues/new) and I'll try to help.

## 😡 Fix! There is something that needs improvement

[Create an issue](https://github.com/vibhanshu909/graphql-server/issues/new) or [pull request](https://github.com/vibhanshu909/graphql-server/pulls) and I'll try to fix it.

## 📄 License

MIT
