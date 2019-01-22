#!/usr/bin/env bash
function usage(){
cat << EOF
Usage: do <command>

Commands:
  dev
    - start server in development mode
  prod
    - start server in production mode
  i <packages*>
    - install packages

EOF
}

case $1 in
  dev)
    docker-compose up -d
    docker-compose logs -f node
  ;;
  follow)
    docker-compose logs -f node
  ;;
  prod)
    docker-compose -f docker-compose.yml -f docker-compose.production.yml up
  ;;
  i)
    shift
    docker-compose run node npm i $@
  ;;
  npm)
    shift
    docker-compose run node npm $@
  ;;
  ash)
  if ! docker-compose exec node ash ; then
    echo "Is your container running?"
  fi
  ;;
  lint)
    docker-compose run node npm run lint
  ;;
  clean)
    docker-compose kill node
  ;;
  purge)
    docker-compose down
  ;;
  flushredis)
    docker-compose exec redis redis-cli flushall
  ;;
  stats)
    if docker-compose exec node npm run stats:json && npm run stats:report ; then
      open -a "Google Chrome" analyze/report.html
    fi
  ;;
  *)
    usage
    exit 1
  ;;
esac
