# Git Review

[![CircleCI](https://circleci.com/gh/USA-RedDragon/gitreview.svg?style=svg)](https://circleci.com/gh/USA-RedDragon/gitreview)

## Running Locally

The `docker-compose.yml` file is setup for local development

I recommend [ngrok](https://ngrok.com/) to tunnel locally for GitHub OAuth.

## Deploying

The Docker images for the current master branch are found on [Docker Hub](https://hub.docker.com/u/jamcswain) under `gitreview-{name}`. Versioning will be implemented once we reach stable 1.0.

The below documentation will go through the information you need.

As far as best practices, and how to deploy containers, a Google search is your best friend.

## Docker Images

### API

[![API](https://images.microbadger.com/badges/image/jamcswain/gitreview-api.svg)](https://microbadger.com/images/jamcswain/gitreview-api "Get your own image badge on microbadger.com")

### Caddy

[![Caddy](https://images.microbadger.com/badges/image/jamcswain/gitreview-caddy.svg)](https://microbadger.com/images/jamcswain/gitreview-caddy "Get your own image badge on microbadger.com")

### Client

[![Client](https://images.microbadger.com/badges/image/jamcswain/gitreview-client.svg)](https://microbadger.com/images/jamcswain/gitreview-client "Get your own image badge on microbadger.com")

### Gitserver

[![Gitserver](https://images.microbadger.com/badges/image/jamcswain/gitreview-gitserver.svg)](https://microbadger.com/images/jamcswain/gitreview-gitserver "Get your own image badge on microbadger.com")

## Environment Variables

### API

| Environment Variable | Details                                     |  Example                                          |
|----------------------|---------------------------------------------|---------------------------------------------------|
| DB_HOST              | The hostname for the database               | localhost                                         |
| DB_USERNAME          | The username for the database               | username                                          |
| DB_PASSWORD          | The password for the database               | password                                          |
| DB_DATABASE          | The name of the database to use             | data                                              |
| DB_DIALECT           | The type of database to use                 | mysql                                             |
| PORT                 | The port to run the app on                  | 3000                                              |
| HOST                 | The host the app is on                      | http://localhost:3000                             |
| GITHUB_CLIENT_ID     | The GitHub oauth client id                  | e784805167d98101e139                              |
| GITHUB_CLIENT_SECRET | The GitHub oauth client secret              | 9f626c1a443864ccc0f8397a933ca1f7edae870c          |
| GITHUB_CALLBACK_URL  | The GitHub oauth callback url               | http://localhost:3000/api/v1/auth/github/callback |
| SECRET               | The signing secret for sessions and cookies | secret                                            |

### Caddy

| Environment Variable | Details                                                                     |  Example                      |
|----------------------|-----------------------------------------------------------------------------|-------------------------------|
| ACME_AGREE           | Agree to ACME TOS                                                           | true                          |
| URL                  | The URL the app is running on                                               | url.domain.com                |
| TLS_OPTIONS          | The TLS options for Caddy, off for local development, email for LetsEncrypt | email@domain.com              |
| API_HOST             | The hostname of the API                                                     | localhost                     |
| API_PORT             | The port of the API                                                         | 3000                          |
| CLIENT_HOST          | The hostname of the client                                                  | localhost                     |
| CLIENT_PORT          | The port of the client                                                      | 3001                          |
| BASIC_AUTH_OPTIONS   | Caddyfile basic auth options                                                | basicauth / username password |

### Client

Note: Client environment variables must be set at build time

| Environment Variable | Details                       | Example |
|----------------------|-------------------------------|---------|
| BASE_URL             | The base URL for the frontend | /       |

### Gitserver

| Environment Variable | Details                                                                |  Example   |
|----------------------|------------------------------------------------------------------------|------------|
| REPO_PATH            | The path to keep git repos in                                          | /app/repos |
| AUTO_CREATE_REPOS    | Whether to create repos if they don't exist                            | true       |
| PORT                 | The port to listen to git on                                           | 29418      |

## Volumes

### API

None

### Caddy

| Path         | Details                               |
|--------------|---------------------------------------|
| /root/.caddy | The persistent SSL certificate volume |

### Client

None

### Gitserver

| Path       | Details                        |
|------------|--------------------------------|
| /app/repos | The persistent git repo volume |

## Database

Any database system compatible with Sequelize will work with this

See <http://docs.sequelizejs.com/manual/dialects.html> for a list

Make sure to persist this and take backups
