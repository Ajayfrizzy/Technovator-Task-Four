function changeImage(imageId) {
    const image = document.getElementById(imageId);
    switch (imageId) {
        case 'firstImage':
            image.src = './images/ily.gif';
            image.alt = 'I Love You';
            break;
        case 'secondImage':
            image.src = './images/you-are-beautiful.gif';
            image.alt = 'You are beautiful';
            break;
        case 'thirdImage':
            image.src = './images/glass of wine.gif';
            image.alt = 'Glass of wine';
            break;
        default:
            break;
    }
}

function restoreImage(imageId) {
    const image = document.getElementById(imageId);
    switch (imageId) {
        case 'firstImage':
            image.src = './images/gift box.jpg';
            image.alt = 'Gift Box';
            break;
        case 'secondImage':
            image.src = './images/gift box.jpg';
            image.alt = 'Gift Box';
            break;
        case 'thirdImage':
            image.src = './images/gift box.jpg';
            image.alt = 'Gift Box';
            break;
        default:
            break;
    }
}



