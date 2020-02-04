install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
start-even:
	npx babel-node src/bin/brain-even.js
start-calc:
	npx babel-node src/bin/brain-calc.js
start-gcd:
	npx babel-node src/bin/brain-gcd.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
