import { Project } from '../models/project';

export const WEBSITES: Project[] = [
    /* {
        name: 'Algebratec technologies',
        description: 'The Official business website of Algebrtec Technologies.',
        image: 'assets/websites/al.JPG',
        link: '#Algebratec$'.replace('#', 'http://').replace('$', '.com')
    }, */
    {
        name: 'Zedeal Store',
        description: 'An ecommerce website built with wordpress and woocommerce',
        image: 'assets/websites/zd.JPG',
        link: '#zedeal$'.replace('#', 'http://').replace('$', '.rf.gd')
    },
    {
        name: 'Hot headlines',
        description: 'news website that shows news from most popular news websites',
        image: 'assets/websites/hh.JPG',
        link: ('#hotheadlines.' + 'herokuapp$').replace('#', 'http://').replace('$', '.com')
    },
    {
        name: 'youtube downloader',
        description: 'download and covert youtube videos and playlists',
        image: 'assets/websites/yq.JPG',
        link: ('#youtubequeue.' + 'herokuapp$').replace('#', 'http://').replace('$', '.com')
    },
    {
        name: 'fitGirl repacks',
        description: 'advanced search and filtering tool for fitGirl\'s repacks (pc games)',
        image: 'assets/websites/fg.JPG',
        link: ('#fitgirl-repacks.' + 'herokuapp$').replace('#', 'http://').replace('$', '.com')
    }
];

export const APPS: Project[] = [
    {
        name: 'eSouq',
        description: `eSouq is an online marketplace that uses GPS to help you find
        great deals or let you sell your goods to nearby people quickly.`,
        image: 'assets/android/esouq.jpg',
        link: 'https://play.google.com/store/apps/details?id=com.esouq.app'
    },
    {
        name: 'Golden Souq',
        description: `Quickly sell things you list on Golden souq and find great deals nearby.
      Electronics, games, clothes, cars, furniture, décor and much more.`,
        image: 'assets/android/gs.png',
        link: 'https://play.google.com/store/apps/details?id=app.megaache.goldensouq'
    },
    {
        name: 'Smart base converter',
        description: `Smart base converter/calculator allows you to convert real and fractional numbers from base n to n.`,
        image: 'assets/android/sbc.png',
        link: 'https://play.google.com/store/apps/details?id=app.megaache.smartbaseconverter'
    },
    {
        name: 'M Torch',
        description: `illuminate your way with the best flashlight app for android`,
        image: 'assets/android/mtorch.png',
        link: 'https://play.google.com/store/apps/details?id=app.megaache.mtorch'
    },
    {
        name: 'Smart flash alert',
        description: `let your flashlight notify you about incoming calls or received messages`,
        image: 'assets/android/sfa.png',
        link: 'https://play.google.com/store/apps/details?id=app.megaache.smartflashalerts'
    },
    {
        name: 'More apps',
        description: 'you can check all my published apps on my playstore',
        image: 'assets/android/ps.png',
        link: 'https://play.google.com/store/apps/developer?id=Megaache+smart+apps'
    }
];
