#!/bin/bash

#Variables
IMAGE_NAME="raju-token-service"
CONTAINER_NAME="token-service"
SOURCE_PORT=3000
DEST_PORT=5000


#Targets

build(){
    docker build -t "$IMAGE_NAME" .
}

run(){
    docker run -d --name "$CONTAINER_NAME" -p "$DEST_PORT":"$SOURCE_PORT" "$IMAGE_NAME"
}
	
stop(){

    docker stop "$CONTAINER_NAME"
    docker rm "$CONTAINER_NAME"
}


# main script logic

case "$1" in 
    build)
        build
        ;;
    run)
        run
        ;;
    stop)
        stop
        ;;
    *)
     echo "Usage : $0 {build|run|stop}"
     exit 1
     ;;
esac
exit 0