var Cat = function(data) {

	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.level = ko.computed(function() {

		var levelModel = [
			{ name: 'Novice', countMin: 0, countMax: 9},
			{ name: 'Apprentice', countMin: 10, countMax: 20},
			{ name: 'Journeyman', countMin: 21, countMax: 49},
			{ name: 'Adept', countMin: 50, countMax: 99},
			{ name: 'Master', countMin: 100, countMax: 1000}
			];

		var clickCountTmp = this.clickCount();

		for (var i = 0, len = levelModel.length; i < len; i++) {
			if (clickCountTmp >= levelModel[i].countMin && clickCountTmp <= levelModel[i].countMax) {
				return levelModel[i].name;
			}
		}

    }, this);

	this.nicknames = ko.observableArray(data.nickNames);

};

var ViewModel = function() {

	var self = this;

	this.currentCat = ko.observable( new Cat({
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'http://google.com',
		nickNames: [
			{ nickname: 'Tabitha' },
			{ nickname: 'Kitty'}, 
			{ nickname: 'Tiger'}
		]
	}) );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);

		// alternatively, can use this syntax:
		// this.clickCount(this.clickCount() + 1 );
		// this represents the binding context of the current cat (since this function is called 
		// from within a 'with' currentCat binding)

	}

}

ko.applyBindings(new ViewModel);