PROJECT_NAME = refuge-hulman
STAGE = dev
BUCKET_NAME = $(PROJECT_NAME)-$(STAGE)


docker-build:
	@docker build --pull --rm -f "dockerfile" -t $(PROJECT_NAME):latest "."

docker-clear:
	@docker rmi $(PROJECT_NAME)

docker-start:
	@docker run $(PROJECT_NAME) -p 3000

deploy: 
	@echo "Not Implemented"