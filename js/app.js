var ViewModel = function() {
	// this is the model (inside the view currently, but can be moved out later)
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('');
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



	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}

	this.updateLevel = function() {

		var clickCountLocal = this.clickCount;
		if (clickCountLocal < 10) {

		} else if (clickCountLocal > 10 && clickCountLocal < 20) {

		}

	}
}

ko.applyBindings(new ViewModel);