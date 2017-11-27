# Roots Example Project

This repository is an example of how to integrate and use the following projects together:

* [Bedrock](https://github.com/roots/bedrock)
* [Sage](https://github.com/roots/sage) (with [Soil](https://github.com/roots/soil))

For more background, see this [blog post](https://roots.io/a-modern-wordpress-example/).

This project is a complete working example that's deployed on a [Digital Ocean](https://roots.io/r/digitalocean/) 512MB droplet.

You can view it at https://rootsbase.s13.ca/.

## Requirements

Make sure you have installed all of the dependencies for [Trellis](https://github.com/roots/trellis#requirements), [Bedrock](https://github.com/roots/bedrock#requirements) and [Sage](https://github.com/roots/sage#requirements) before moving on.

At a minimum you need to have:

* [Node.js](http://nodejs.org/) >= 4.5.0
* [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) >= 1.5.1
* [Yarn](https://github.com/yarnpkg/yarn/blob/master/README.md#installing-yarn) >= 0.27.5

## Instructions

Here's how this example project was created:

1. Create a new project directory: `$ mkdir example.com && cd example.com`
2. Clone Bedrock: `$ git clone --depth=1 git@github.com:roots/bedrock.git site && rm -rf site/.git`
3. Clone Sage: `$ git clone --depth=1 --branch sage-9 git@github.com:roots/sage.git site/web/app/themes/sage && rm -rf site/web/app/themes/sage/.git`

```shell
example.com/      # → Root folder for the project
├── trellis/      # → System management & deployment
└── site/         # → A Bedrock-based WordPress site
    └── web/
        ├── app/  # → WordPress content directory (themes, plugins, etc.)
        └── wp/   # → WordPress core (don't touch!)
```

## Local development setup

1. **Clone this repository** into a working directory (e.g., `/Applications/MAMP/htdocs`)
  ```shell
  $ git clone git@github.com:spot13/rootsbase.git
  ```

2. **Install composer packages**
  ```shell
  # @ rootsbase.com/site
  $ composer install
  ```

3. **Install theme components**
  ```shell
  # @ rootsbase/site/web/app/themes/sage
  $ composer install
  $ yarn install
  ```

4. **Create a new host in MAMP and point it to your web directory

 @ rootsbase.com/site/web
 
 start the web server and mysql

5. **Test the install** at [rootsbase.dev](http://rootsbase.dev/)

## Remote server setup (staging/production)

### Provision server:
```shell
# @ rootsbase.com/trellis
$ ansible-playbook server.yml -e env=<environment>
```

### Deploy:
```shell
# @ rootsbase.com/trellis
./deploy.sh <environment> rootsbase.com

# OR
ansible-playbook deploy.yml -e "site=rootsbase.com env=<environment>"
```

**To rollback a deploy:**
```shell
ansible-playbook rollback.yml -e "site=rootsbase.com env=<environment>"
```

## Theme development

In **development**, run gulp in _watch_ mode for live updates at [localhost:3000](http://localhost:3000). **Important**: always use the [rootsbase.dev](http://rootsbase.dev/wp/wp-admin/) URL to access the WordPress admin.
```shell
# @ rootsbase.com/site/web/app/themes/sage
$ gulp watch
```

**Production** assets (minified CSS, JavaScript, images, fonts, etc.) need to be compiled. Run gulp with the `--production` flag. The resulting files will be saved in `themes/sage/dist/`. Never edit files in the `dist` directory.

```shell
# @ rootsbase.com/site/web/app/themes/sage
$ gulp --production
```

## Contributing

Contributions are welcome from everyone. We have [contributing guidelines](https://github.com/roots/guidelines/blob/master/CONTRIBUTING.md) to help you get started.

## Community

Keep track of development and community news.

* Participate on the [Roots Discourse](https://discourse.roots.io/)
* Follow [@rootswp on Twitter](https://twitter.com/rootswp)
* Read and subscribe to the [Roots Blog](https://roots.io/blog/)
* Subscribe to the [Roots Newsletter](https://roots.io/subscribe/)
* Listen to the [Roots Radio podcast](https://roots.io/podcast/)
