include .env

TARGET=$(USER)@$(HOST):$(ROOT_DIR)

deploy: 
	@echo "===== Build Application ====="
	@rm -rf node_modules
	@npm ci
	@npm run build

	@echo "===== Clear Remote App ====="
	@ssh -i $(CERT_KEY) -t $(USER)@$(HOST) 'rm -rf $(ROOT_DIR)'

	@echo "===== Upload Application Build ====="
	@ssh -i $(CERT_KEY) -t $(USER)@$(HOST) 'mkdir -p $(ROOT_DIR)/.next $(ROOT_DIR)/public'
	@scp -i $(CERT_KEY) -rpC .next/* $(TARGET)/.next/
	@scp -i $(CERT_KEY) -rpC public/* $(TARGET)/public/

	@echo "===== Upload package.json and .env ====="
	@scp -Ci $(CERT_KEY) ./package.json ./package-lock.json $(TARGET)
	@scp -Ci $(CERT_KEY) ./.env $(TARGET)

	@echo "===== Install Dependencies ====="
	@ssh -i $(CERT_KEY)  -t $(USER)@$(HOST) 'cd $(ROOT_DIR) && npm ci --production'

	@echo "===== Restart Service ====="
	@ssh -i $(CERT_KEY) -t $(USER)@$(HOST) 'sudo systemctl restart refuge-web'