import { Draggable } from 'react-beautiful-dnd';
import { Item } from './OneBlockDnd';
import { styled } from 'styled-components';

interface Props {
  item: Item;
  idx: number;
  onDelete: (id: string) => void;
}

const Container = styled.div`
  width: 100px;
  padding: 10px 0;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  text-align: center;

  &.dragging {
    opacity: 0.4;
  }

  button {
    margin-left: 6px;
  }
`;

const DropItem = ({ item, idx, onDelete }: Props) => {
  return (
    <Draggable
      draggableId={item.id}
      key={item.id}
      index={idx}
    >
      {(provided, snapshot) => (
        <Container
          onClick={() => alert(item.content)}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={`${snapshot.isDragging ? 'dragging' : ''}`}
        >
          {item.content}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(item.id);
            }}
          >
            삭제
          </button>
        </Container>
      )}
    </Draggable>
  );
};

export default DropItem;
