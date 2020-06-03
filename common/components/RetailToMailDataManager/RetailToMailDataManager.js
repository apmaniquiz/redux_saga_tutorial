function IconDataManager(input) {
    let icons = {};

    for (var i=0; i < input.length; i++) {
        console.log(input[i]);
        var icon = input[i];
        var iconUrl = icon.IconUrl || '';
        var iconTitle = icon.IconTitle || '';
        var iconDesc = icon.IconDescription || '';
        var iconKey = icon.IconTitle.replace(/\s/g, "_");

        icons[iconKey] = {
            iconUrl,
            iconTitle,
            iconDesc
        };
    }
    
    return icons;
}

function GreetingsDataManager(input) {
    let returnObj = {};
    let keys = ['title', 'subtitle', 'description', 'backgroundImage', 'icons'];

    keys.forEach((key) => {
        if (input[key] && key === 'icons') {
            let val = input[key];
            
            returnObj[key] = IconDataManager(val);
        } else if (input[key]) {
            returnObj[key] = input[key];
        }
    });
    
    return returnObj;
}

function SaveMoneyDataManager(input) {
    let returnObj = {};
    let keys = ['title', 'description', 'backgroundImage'];

    keys.forEach((key) => {
        if (input[key]) {
            returnObj[key] = input[key];
        }
    });
    
    return returnObj;
}

function TestimonialsDataManager(input) {
    // console.log('TestimonialsDataManager ----- ', input);
}

function HomeDeliveryPromotionDataManager(input) {
    // console.log('HomeDeliveryPromotionDataManager ----- ', input);
}

function HomeDeliverySignupDataManager(input) {
    // console.log('HomeDeliverySignupDataManager ----- ', input);
}

export function RetailToMailDataManager(input) {
    console.log('RetailToMailDataManager ----- ', input);

    let currentState = {};
    if (input && Object.keys(input).length > 0) {
        var keys = Object.keys(input);
    
        keys.forEach(function(key) {
            switch(key) {
                case 'greetings':
                    var res = GreetingsDataManager(input[key]);
                    currentState[key] = res;
                    break;
                case 'saveMoney':
                    var res = SaveMoneyDataManager(input[key]);
                    currentState[key] = res;
                    break;
                case 'testimonials':
                    var res = TestimonialsDataManager(input[key]);
                    currentState[key] = res;
                    break;
                case 'homeDeliveryPromotion':
                    var res = HomeDeliveryPromotionDataManager(input[key]);
                    currentState[key] = res;
                    break;
                case 'homeDeliverySignup':
                    var res = HomeDeliverySignupDataManager(input[key]);
                    currentState[key] = res;
                    break;
            }
        });
    } else {
        currentState = input;
    }

    console.log('currentState ------- ', currentState);

    return currentState;
}