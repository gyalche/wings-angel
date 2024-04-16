import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MainPage } from '../src/page/MainPage';

describe('MainPage', () => {
  it('matches snapshot', () => {
    const LandingPage = render(<MainPage />);
    expect(LandingPage).toMatchSnapshot();
  });
});
