export type OperatorType = 'attacker' | 'defender';

export type OperatorSpecialty = 'INTEL' | 'MAP CONTROL' | 'ANTI-ENTRY' | 'ANTI-GADGET' | 'BREACH' | 'TRAPPER' | 'CROWD CONTROL' | 'SUPPORT' | 'FRONT LINE';

export type OperatorData = {
    name: string;
    image: string;
    type: OperatorType;
    specialties: OperatorSpecialty[];
};

export const operatorList: OperatorData[] = [
    {
        name: 'deimos',
        image: '/operators/badges/Deimos.png',
        type: 'attacker',
        specialties: ['INTEL', 'MAP CONTROL']
    },
    {
        name: 'ram',
        image: '/operators/badges/Ram.png',
        type: 'attacker',
        specialties: ['BREACH']
    },
    {
        name: 'brava',
        image: '/operators/badges/Brava.png',
        type: 'attacker',
        specialties: ['INTEL', 'ANTI-GADGET']
    },
    {
        name: 'grim',
        image: '/operators/badges/Grim.png',
        type: 'attacker',
        specialties: ['FRONT LINE', 'MAP CONTROL']
    },
    {
        name: 'sens',
        image: '/operators/badges/Sens.png',
        type: 'attacker',
        specialties: ['SUPPORT', 'MAP CONTROL']
    },
    {
        name: 'osa',
        image: '/operators/badges/Osa.png',
        type: 'attacker',
        specialties: ['INTEL', 'SUPPORT']
    },
    {
        name: 'flores',
        image: '/operators/badges/Flores.png',
        type: 'attacker',
        specialties: ['ANTI-GADGET','INTEL']
    },
    {
        name: 'zero',
        image: '/operators/badges/Zero.png',
        type: 'attacker',
        specialties: ['ANTI-GADGET','INTEL']
    },
    {
        name: 'ace',
        image: '/operators/badges/Ace.png',
        type: 'attacker',
        specialties: ['BREACH','ANTI-GADGET']
    },
    {
        name: 'iana',
        image: '/operators/badges/Iana.png',
        type: 'attacker',
        specialties: ['FRONT LINE' , 'INTEL']
    },
    {
        name: 'kali',
        image: '/operators/badges/Kali.png',
        type: 'attacker',
        specialties: ['ANTI-GADGET' , 'SUPPORT']
    },
    {
        name: 'amaru',
        image: '/operators/badges/Amaru.png',
        type: 'attacker',
        specialties: ['FRONT LINE' , 'MAP CONTROL']
    },
    {
        name: 'nokk',
        image: '/operators/badges/Nokk.png',
        type: 'attacker',
        specialties: ['FRONT LINE' , 'MAP CONTROL']
    },
    {
        name: 'gridlock',
        image: '/operators/badges/Gridlock.png',
        type: 'attacker',
        specialties: ['SUPPORT' , 'MAP CONTROL']
    },
    {
        name: 'nomad',
        image: '/operators/badges/Nomad.png',
        type: 'attacker',
        specialties: ['FRONT LINE' , 'MAP CONTROL']
    },
    {
        name: 'maverick',
        image: '/operators/badges/Maverick.png',
        type: 'attacker',
        specialties: ['BREACH' , 'FRONT LINE']
    },
    {
        name: 'lion',
        image: '/operators/badges/Lion.png',
        type: 'attacker',
        specialties: ['INTEL' , 'MAP CONTROL']
    },
    {
        name: 'zofia',
        image: '/operators/badges/Zofia.png',
        type: 'attacker',
        specialties: ['BREACH' , 'ANTI-GADGET']
    },
    {
        name: 'ying',
        image: '/operators/badges/Ying.png',
        type: 'attacker',
        specialties: ['FRONT LINE' , 'MAP CONTROL']
    },
    {
        name: 'jackal',
        image: '/operators/badges/Jackal.png',
        type: 'attacker',
        specialties: ['INTEL' , 'MAP CONTROL']
    },
    {
        name: 'capitao',
        image: '/operators/badges/Capitao.png',
        type: 'attacker',
        specialties: ['FRONT LINE' , 'MAP CONTROL']
    },
    {
        name: 'blackbeard',
        image: '/operators/badges/Blackbeard.png',
        type: 'attacker',
        specialties: ['SUPPORT']
    },
    {
        name: 'buck',
        image: '/operators/badges/Buck.png',
        type: 'attacker',
        specialties: ['BREACH' , 'SUPPORT']
    },
    {
        name: 'sledge',
        image: '/operators/badges/Sledge.png',
        type: 'attacker',
        specialties: ['BREACH' , 'ANTI-GADGET']
    },
    {
        name: 'thatcher',
        image: '/operators/badges/Thatcher.png',
        type: 'attacker',
        specialties: ['ANTI-GADGET' , 'SUPPORT']
    },
    {
        name: 'ash',
        image: '/operators/badges/Ash.png',
        type: 'attacker',
        specialties: ['BREACH' , 'FRONT LINE']
    },
    {
        name: 'thermite',
        image: '/operators/badges/Thermite.png',
        type: 'attacker',
        specialties: ['BREACH' , 'SUPPORT']
    },
    {
        name: 'montagne',
        image: '/operators/badges/Montagne.png',
        type: 'attacker',
        specialties: ['INTEL' , 'SUPPORT']
    },
    {
        name: 'twitch',
        image: '/operators/badges/Twitch.png',
        type: 'attacker',
        specialties: ['ANTI-GADGET' , 'INTEL']
    },
    {
        name: 'iq',
        image: '/operators/badges/IQ.png',
        type: 'attacker',
        specialties: ['INTEL' , 'SUPPORT']
    },
    {
        name: 'fuze',
        image: '/operators/badges/Fuze.png',
        type: 'attacker',
        specialties: ['ANTI-GADGET']
    },
    {
        name: 'glaz',
        image: '/operators/badges/Glaz.png',
        type: 'attacker',
        specialties: ['INTEL' , 'SUPPORT']
    },




    {
        name: 'tubarao',
        image: '/operators/badges/Tubarao.png',
        type: 'defender',
        specialties: ['ANTI-ENTRY', 'ANTI-GADGET']
    },
    {
        name: 'fenrir',
        image: '/operators/badges/Fenrir.png',
        type: 'defender',
        specialties: ['TRAPPER', 'CROWD CONTROL']
    },
    {
        name: 'solis',
        image: '/operators/badges/Solis.png',
        type: 'defender',
        specialties: ['INTEL', 'SUPPORT']
    },
    {
        name: 'azami',
        image: '/operators/badges/Azami.png',
        type: 'defender',
        specialties: ['ANTI-ENTRY', 'SUPPORT']
    },
    {
        name: 'thorn',
        image: '/operators/badges/Thorn.png',
        type: 'attacker',
        specialties: ['ANTI-ENTRY', 'SUPPORT']
    },
];