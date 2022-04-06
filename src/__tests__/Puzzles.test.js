import React from 'react';
import Header from '../components/Header';
import Puzzles from '../pages/category-pages/Puzzles';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { screen, configure } from '@testing-library/react'

jest.mock('./../components/Header');
jest.mock('./../pages/category-pages/Puzzles');

/*
TEST 1 - Puzzles page and Header
*/
test("Should render the Puzzles page and the Header", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    Puzzles.mockImplementation(() => <div>PuzzlesMock</div>);
    //Act
    render(
        <MemoryRouter>
            <Header/>
            <Puzzles/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("PuzzlesMock")).toBeInTheDocument();
});

/*
TEST 2 - Matching button
*/
test("Testing Matching Button", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    Puzzles.mockImplementation(() => <div>PuzzlesMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/Matching']}>
            <Header/>
            <Puzzles/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("PuzzlesMock")).toBeInTheDocument();
});

/*
TEST 3 - Sliding Puzzle button
*/
test("Testing Sliding Puzzle Button", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    Puzzles.mockImplementation(() => <div>PuzzlesMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/Sliding']}>
            <Header/>
            <Puzzles/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("PuzzlesMock")).toBeInTheDocument();
});

/*
TEST 4 - 2048 button
*/
test("Testing 2048 Button", () => {
    //Arrange
    Header.mockImplementation(() => <div>HeaderMock</div>);
    Puzzles.mockImplementation(() => <div>PuzzlesMock</div>);
    //Act
    render(
        <MemoryRouter initialEntries={['/../pages/game-pages/My2048']}>
            <Header/>
            <Puzzles/>
        </MemoryRouter>
    );
    //Assert
    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("PuzzlesMock")).toBeInTheDocument();
});