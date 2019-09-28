const MILLIS_IN_A_YEAR = 1000 * 60 * 60 * 24 * 365;
export const BIRTHDAY = '1997-06-18';

const age = () => {
    return Math.floor((new Date().getTime() - Date.parse(BIRTHDAY)) / MILLIS_IN_A_YEAR);
}

export const PERSONAL_INFORMATION = [
    {
        icon: 'assets/nopp-web.png',
        value: 'Younes Megaache'
    },
    {
        icon: 'assets/cake.png',
        value: BIRTHDAY + ' (' + age() + ' years old)'
    },
    {
        icon: 'assets/relation.png',
        value: 'single'
    },
    {
        icon: 'assets/location-web.png',
        value: '45 40b Street Al Muraqqabat, Dubai, UAE'
    },
    {
        icon: 'assets/mail-web.png',
        value: 'megaache.younes' + '-gm*.com'.replace('-', '@').replace('*', 'ail')
    },
    {
        icon: 'assets/phone-web.png',
        value: '(+971) 55 #'.replace('#', '704 0589')
    }
]; 