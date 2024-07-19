const wow = async () => {
	setTimeout(() => {
		console.log('레벨업을 축하드려요!');
	}, 500);
};

const newFeature = () => {
	console.log('새롭게 열린 기능을 이용해보세요!');
};

function levelUp(callback) {
	console.log('레벨업!');
	callback();
	newFeature();
}

levelUp(wow);
