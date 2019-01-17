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
    docker-compose up
  ;;
  prod)
    docker-compose -f docker-compose.yml -f docker-compose.production.yml up
  ;;
  i)
    shift
    docker-compose run node npm i $@
  ;;
  gatsby)
    shift
    docker-compose run node ./node_modules/gatsby-cli/lib/index.js $@
  ;;
  *)
    usage
    exit 1
  ;;
esac
