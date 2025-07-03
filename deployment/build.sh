#!/bin/bash
docker compose -f docker-compose.build.yml down --volumes --remove-orphans

docker compose -f docker-compose.build.yml up --build
