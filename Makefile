build:
	docker-compose build

up:
	docker-compose -f docker-compose.yml up -d

down:
	docker-compose -f docker-compose.yml down

logs:
	docker-compose ${COMPOSE_FILES} logs -f --tail 100