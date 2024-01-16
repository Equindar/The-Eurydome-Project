import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Page from '../app/[lng]/page';

test('Page', async () => {
    var lng = { lng: 'de' };
    render(<Page params={lng} />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Home' }),
    ).toBeDefined();
});
