export function IconDataManager(input) {
    let icons = {};

    for (var i=0; i < input.length; i++) {
        var icon = input[i];
        var iconUrl = icon.IconUrl || '';
        var iconTitle = icon.IconTitle || '';
        var iconDesc = icon.IconDescription || '';
        var iconName = icon.IconTitle.replace(/\s/g, "_");

        icons['icon_' + i] = {
            iconUrl,
            iconTitle,
            iconDesc,
            iconName
        };
    }
    
    return icons;
}

export function TestimonialDetailsDataManager(input) {
    let testimonies = {};

    for (var i=0; i < input.length; i++) {
        var testimony = input[i];
        var testimonyTitle = testimony.testimonyTitle || '';
        var testimonyDesc = testimony.testimonyDescription || '';
        var testimonyAuthor = testimony.testimonyAuthor || '';
        var testimonyName = testimony.testimonyTitle.replace(/\s/g, "_");

        testimonies['testimony_' + i] = {
            testimonyTitle,
            testimonyDesc,
            testimonyAuthor,
            testimonyName
        };
    }
    
    return testimonies;
}

export function GreetingsDataManager(input) {
    let returnObj = {};
    let keys = ['title', 'subtitle', 'description', 'backgroundImage', 'icons'];

    keys.forEach((key) => {
        if (input[key] && key === 'icons') {
            let val = input[key];
            
            returnObj['icons'] = IconDataManager(val);
        } else if (input[key]) {
            returnObj[key] = input[key];
        }
    });
    
    return returnObj;
}

export function SaveMoneyDataManager(input) {
    let returnObj = {};
    let keys = ['title', 'description', 'backgroundImage'];

    keys.forEach((key) => {
        if (input[key]) {
            returnObj[key] = input[key];
        }
    });
    
    return returnObj;
}

export function TestimonialsDataManager(input) {
    let returnObj = {};
    let keys = ['title', 'description', 'backgroundImage', 'testimonials'];

    keys.forEach((key) => {
        if (input[key] && key === 'testimonials') {
            let val = input[key];
            
            returnObj[key] = TestimonialDetailsDataManager(val);
        } else if (input[key]) {
            returnObj[key] = input[key];
        }
    });
    
    return returnObj;
}

export function HomeDeliveryPromotionDataManager(input) {
    let returnObj = {};
    let keys = ['title', 'subtitle', 'backgroundImage', 'Icons'];

    keys.forEach((key) => {
        if (input[key] && key === 'Icons') {
            let val = input[key];
            
            returnObj['icons'] = IconDataManager(val);
        } else if (input[key]) {
            returnObj[key] = input[key];
        }
    });
    
    return returnObj;
}

export function HomeDeliverySignupDataManager(input) {
    let returnObj = {};
    let keys = ['title', 'subtitle', 'backgroundImage', 'buttonText'];

    keys.forEach((key) => {
        if (input[key]) {
            returnObj[key] = input[key];
        }
    });
    
    return returnObj;
}

export function RetailToMailDataManager(input) {
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