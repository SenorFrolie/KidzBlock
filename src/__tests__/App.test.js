import React from 'react';
import App from './../App';
import Header from './../components/Header';
import TinderCards from './../components/TinderCards';
import FirstnSecond from './../pages/age-group-pages/FirstnSecond';
import ThirdnFourth from './../pages/age-group-pages/ThirdnFourth';
import FifthnSix from './../pages/age-group-pages/FifthnSix';
import LeaderBoard from './../pages/LeaderBoard';
import Profile from './../pages/Profile';
import GamePage from './../pages/game-pages/GamePage'

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { screen, configure } from '@testing-library/react'


jest.mock('./../components/Header');
jest.mock('./../components/TinderCards');
jest.mock('./../pages/age-group-pages/FirstnSecond');

test("Should render home page and header with default route", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    TinderCards.mockImplementation(() => <div>HomePageMock</div>);
    //Act
    render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
});
