.DEFAULT_GOAL := help

help:  ## Show this help.
	@grep -E '^\S+:.*?## .*$$' $(firstword $(MAKEFILE_LIST)) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "%-30s %s\n", $$1, $$2}'

setup: ## Set up the local environment (e.g. update the attendance ID, check Docker is running, etc.)
	./setup.sh

start: ## Start the project
	docker compose up

stop: ## Stop the project
	docker compose down

shell: start ## Start a shell in the container
	docker compose exec bun sh

test-all: start ## Run all the tests
	docker compose exec bun bun test

test-watch-intro: start ## Run the tests in watch mode under introduction_to_tdd
	docker compose exec bun bun --watch test introduction_to_tdd

test-watch-layers: start ## Run the tests in watch mode under layers_of_tests
	docker compose exec bun bun --watch test layers_of_tests

test-watch-maintainable-tests: start ## Run the tests in watch mode under writing_maintainable_tests
	docker compose exec bun bun --watch test writing_maintainable_tests