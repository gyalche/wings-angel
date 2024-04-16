import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { App } from '../../src/App';
import React from 'react';
import TextWrapper from '../../src/atoms/TextWrapper';
import SidebarData from '../../src/subcomponents/SidebarData';
import Sidebar from '../../src/components/Sidebar';
import { Location } from '../../public/assets/icons/Location';
import { Measurment } from '../../public/assets/icons/Measurment';
import { Cad } from '../../public/assets/icons/Cad';
import { Provider } from 'react-redux';
import store from '../../src/store/store';

describe('Main Page', () => {
  it('renders App component', () => {
    const container = render(<App />);
    expect(container).toBeInTheDocument();
  });
  it('renders input with pointer-events: none', () => {
    const textLoad = render(
      <Provider store={store}>
        <TextWrapper latitude={0} longitude={0} />
      </Provider>
    );

    expect(textLoad).toHaveStyle('pointer-events: none');
  });

  it('render icons based on index number', () => {
    render(<Sidebar />);

    for (let i = 0; i < 3; i++) {
      if (i == 0) {
        expect(<Location color="white" />).toBeInTheDocument();
      }
      if (i == 1) {
        expect(<Measurment color="white" />).toBeInTheDocument();
      }
      if (i == 2) {
        expect(<Cad color="white" />).toBeInTheDocument();
      }
    }
  });
});

describe('Location word exist ', () => {
  it('render sidebar data ', () => {
    render(
      <Provider store={store}>
        <SidebarData />
      </Provider>
    );
    const keyword = screen.getAllByText('Location');
    for (let i = 0; i < keyword.length; i++) {
      expect(keyword[i]).toBeInTheDocument();
    }
  });
});
