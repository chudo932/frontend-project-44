.PHONY: publish install brain-games lint lint-fix

install:
    npm ci

brain-games:
    node bin/brain-games.js

publish:
    npm publish --dry-run

lint:
    npm run lint

lint-fix:
    npm run lint-fix