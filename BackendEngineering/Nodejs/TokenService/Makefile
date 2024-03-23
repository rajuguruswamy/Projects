IMAGE_NAME  := raju-token-service
CONTAINER_NAME := token-service
SOURCE_PORT := 5000
DEST_PORT := 5000

# Targets
.PHONY: build run stop

build:
	docker build -t $(IMAGE_NAME) .


run:
	docker run -d --name $(CONTAINER_NAME) -p $(DEST_PORT):$(SOURCE_PORT) $(IMAGE_NAME)

stop:
	docker stop $(CONTAINER_NAME)
    docker rm $(CONTAINER_NAME)
