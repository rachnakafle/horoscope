/**
 * Menu Data source
 */
 export let dataSource:  any[] = [
    {
        title: 'Dashboard',  
        link: '',
    },
    {
        title: 'Horoscope',
        link: 'horoscope',
        submenu: [
            {
                subtitle: 'Horoscope Master',
                link: "horoscope",
            },
            {
                subtitle: 'Daily Update',
                link: 'horoscope/update-daily',
            },
            {
                subtitle: 'Weekly Update',
                link: 'horoscope/update-weekly',
            },
            {
                subtitle: 'Monthly Update',
                link: 'horoscope/update-monthly',
            },
            {
                subtitle: 'Yearly Update',
                link: 'horoscope/update-yearly',
            }
        ]
    },
    {
        title: 'User Management',
        link: 'usermanagement',
        submenu: [
            { 
                subtitle: 'All Users',
                link: 'usermanagement',
            },
            {
                subtitle: 'User Roles', 
                link: 'usermanagement/user-roles',
            }
        ]
    },
    {
        title: 'Payment Management',
        link: 'paymentmanagement',
        submenu: [
            {
                subtitle: 'Canada',
                link: '#',
            },
            {
                subtitle: 'Mexico',
                link: '#',
            },
            {
                subtitle: 'USA',
                link: '#',
            }
        ]
    },
    {
        title: 'Settings',
        link: 'settings', 
        submenu: [
            {
                subtitle: 'Brazil',
                link: '#',
            },
            {
                subtitle: 'Colombia',
                link: '#',
            },
            {
                subtitle: 'Argentina',
                link: '#',
            }
        ]
    }        
];