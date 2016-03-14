var initialCats = [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
            nickNames: [
							{ nickname: 'Tabitha' },
							{ nickname: 'Kitty'}, 
							{ nickname: 'Tiara'}
						]
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
						nickNames: [
							{ nickname: 'Tigger' }
						]
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
            nickNames: [
							{ nickname: 'Poo' }
						]
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
            nickNames: [
							{ nickname: 'Greybeard' }
						]
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
            nickNames: [
							{ nickname: 'Valery' }
						]
        }
    ];

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

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem));
	});


	this.currentCat = ko.observable( this.catList()[0]) ;

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);

		// alternatively, can use this syntax:
		// this.clickCount(this.clickCount() + 1 );
		// this represents the binding context of the current cat (since this function is called 
		// from within a 'with' currentCat binding)

	}

}

ko.applyBindings(new ViewModel);