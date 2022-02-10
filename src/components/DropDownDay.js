import React from 'react'
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";


const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.2rem;
  color: #969733;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #969733;
  font-size: 1.2 rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["Thursday", "Friday"];



const DropDownDay = () => {

    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

  
    const toggling = () => setIsOpen(!isOpen);
  
    const onOptionClicked = value => () => {
      setSelectedOption(value);
      setIsOpen(false);

    };

    useEffect(() => {
      const useOption = selectedOption;
      console.log(useOption);

    })


// const selectedOption = useRef(null);
// const [isOpen, setIsOpen] = useState(false);
// const toggling = () => setIsOpen(!isOpen);

// const onOptionClicked = () => setIsOpen(!isOpen);

  return (
    <div>
    <h3>Select Day</h3>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Thursday"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </div>
  );
}

export default DropDownDay

