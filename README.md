# Introduction To Test-Driven Development (Test-Driven Development)

## Pre-requisites
- Docker (a "modern" version )
  - To check that it's the right one, run `docker compose version`

## Set up: how to prepare the exercises
- From a terminal, run:
  1. `make setup`
  2. `make start`
- Whenever you want to stop everything, run: `make stop`
- To see everything that can be executed, run `make` or `make help`

## How to run the tests
- To run ALL the tests for the project, from a terminal run: `make test-all`
- To run the tests for a specific exercise in watcher mode, run the required one (reminder: running `make` or `make help` will show you all the available targets):
  - E.g. `make test-watch-intro` 