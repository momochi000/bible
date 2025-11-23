build:
	docker compose build

shell:
	docker compose run --rm bible bash

compile:
	docker compose run --rm bible bash -c 'npx shadow-cljs compile app'

debug-release:
	docker compose run --rm bible bash -c 'npm run build:html:debug'

release:
	docker compose run --rm bible bash -c 'npx shadow-cljs release app'

up:
	docker compose up

# This doesn't work because it has to run in the same container as the `up` process (npx shadow-cljs watch app)
#repl:
#	npx shadow-cljs cljs-repl app
# Similarly, this creates a new docker container
#repl:
#	docker compose exec bible npx shadow-cljs cljs-repl app
repl:
	docker exec -it $(CONTAINER_ID) npx shadow-cljs clj-repl
