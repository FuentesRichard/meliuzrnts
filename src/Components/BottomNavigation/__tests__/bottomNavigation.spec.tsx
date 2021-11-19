import React from 'react';
import { render } from '@testing-library/react-native';

import BottomNavigation from '..';

describe('bottomNavigation test', () => {
    it('redering elements', () => {
        const { debug } = render(<BottomNavigation />);
        console.debug(debug);
    })
})