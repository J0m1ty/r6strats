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
        name: 'Ash',
        image: '',
        type: 'attacker',
        specialties: ['BREACH', 'FRONT LINE']
    }
];