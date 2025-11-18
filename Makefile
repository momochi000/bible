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
