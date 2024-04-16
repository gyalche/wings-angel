import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import { describe, expect, it } from 'vitest';
import SidebarData from '../src/subcomponents/SidebarData';

// Mock the axios module
const mockAxios = {
  get: jest.fn(),
};

describe('YourComponent', () => {
  it('should render locations correctly', async () => {
    const mockData: { locations: [number, number][] } = {
      locations: [
        [37.56755685, 126.97328373],
        [37.56722338, 126.98351298],
        [37.56269872, 126.97860143],
      ],
    };

    // Mock the axios.get method to resolve with mockData
    mockAxios.get.mockResolvedValue({ data: mockData });

    const { getByText } = render(<SidebarData />);

    await waitFor(() => {
      expect(getByText('Latitude: 37.56755685, Longitude: 126.97328373')).toBeInTheDocument();
      expect(getByText('Latitude: 37.56722338, Longitude: 126.98351298')).toBeInTheDocument();
      expect(getByText('Latitude: 37.56269872, Longitude: 126.97860143')).toBeInTheDocument();
    });
  });
});
