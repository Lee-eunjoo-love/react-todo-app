import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'entertainment',
    text: '연예',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

// #. props 전달
/*const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;*/

// #. NavLink
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

// #. props 전달
//const Categories = ({ category, onSelect }) => {
// #. NavLink
const Categories = () => {
  return (
    <>
      <CategoriesBlock>
        {/** #. props 전달 */}
        {/**{categories.map((item) => (
          <Category
            key={item.name}
            active={category && category === item.name}
            onClick={() => onSelect(item.name)}
          >
            {item.text}
          </Category>
        ))}*/}

        {/** NavLink */}
        {categories.map((item) => (
          <Category
            key={item.name}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to={item.name === 'all' ? '/news/all' : `/news/${item.name}`}
          >
            {item.text}
          </Category>
        ))}
      </CategoriesBlock>
    </>
  );
};

export default React.memo(Categories);
