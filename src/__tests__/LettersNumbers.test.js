import React from 'react';
import Header from '../components/Header';
import LettersNumbers from '../pages/category-pages/LettersNumbers';


import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { screen, configure } from '@testing-library/react'

jest.mock('./../components/Header');
jest.mock('./../pages/category-pages/LettersNumbers');

/*
TEST 1 - LettersNumbers page and Header
*/
test("Should render the LettersNumbers page and the Header", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    LettersNumbers.mockImplementation(() => <div>LettersNumbersMock</div>);
    //Act
    render(
        <MemoryRouter>
            <Header/>
            <LettersNumbers/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("LettersNumbersMock")).toBeInTheDocument();
});

/*
TEST 2 - Spelling button
*/
test("Testing Spelling Button", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    LettersNumbers.mockImplementation(() => <div>LettersNumbersMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/Spelling']}>
            <Header/>
            <LettersNumbers/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("LettersNumbersMock")).toBeInTheDocument();
});


/* NOT IMPLEMENTED YET
//TEST 3 - Letters button

test("Testing Letters Button", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    LettersNumbers.mockImplementation(() => <div>LettersNumbersMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/Letters']}>
            <Header/>
            <LettersNumbers/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("LettersNumbersMock")).toBeInTheDocument();
});

/* NOT IMPLEMENTED YET
//TEST 4 - Numbers button

test("Testing Numbers Button", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    LettersNumbers.mockImplementation(() => <div>LettersNumbersMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/Numbers']}>
            <Header/>
            <LettersNumbers/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("LettersNumbersMock")).toBeInTheDocument();
});

*/