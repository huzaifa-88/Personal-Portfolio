APP := portfolio

.PHONY: install dev build start lint clean

install:
	cd $(APP) && bun install

dev:
	cd $(APP) && bun run dev

build:
	cd $(APP) && bun run build

start:
	cd $(APP) && bun run start

lint:
	cd $(APP) && bun run lint

clean:
	rm -rf $(APP)/.next
