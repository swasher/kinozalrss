dummy:
	@echo Dont run without arguments!

deploy:
	npm run build
	firebase deploy --only hosting:kinozal

push:
	git push origin master
