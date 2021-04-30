import styled from '@emotion/styled';

const MenuItemWrapper = styled.div`
  display: flex;
`;

const IconPlaceHolder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
  background: pink;
  border: 2px solid blue;
`;

const TextPlaceHolder = styled.div`
  border-radius: 5px;
  width: 200px;
  height: 20px;
  color: white;
  background: pink;
  border: 2px solid blue;
  flex: 1;
`;

export default function MenuItem() {
  return (
    <MenuItemWrapper>
      <IconPlaceHolder />
      <TextPlaceHolder />
    </MenuItemWrapper>
  );
}
