import { useRef, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { styled } from 'styled-components';
import DropItem from './DropItem';

const DUMMY = [
  {
    id: '1',
    content: 'hello',
  },
  {
    id: '2',
    content: 'nice',
  },
  {
    id: '3',
    content: 'good',
  },
];

export interface Item {
  id: string;
  content: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 22px -6px rgba(0, 0, 0, 0.2);
`;

const Dropzone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 22px -6px rgba(0, 0, 0, 0.2);

  .first {
    display: flex;
    gap: 10px;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
  }
`;

const OneBlockHoizontalDnd = () => {
  const [data, setData] = useState<Item[]>(DUMMY);
  const inputRef = useRef<HTMLInputElement>(null);

  function deleteItemHandler(id: string) {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  }

  return (
    <Container>
      <h1>One Block (horizontal) </h1>
      <div>
        <input
          type="text"
          ref={inputRef}
        />
        <button
          onClick={() => {
            if (inputRef.current!.value === '') return;

            setData((prev) => [
              ...prev,
              { id: Math.random().toString(), content: inputRef.current!.value },
            ]);
          }}
        >
          add
        </button>
      </div>
      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) return;
          const items = [...data];
          const [reorderedItem] = items.splice(result.source.index, 1);
          items.splice(result.destination.index, 0, reorderedItem);
          setData(items);
        }}
      >
        <Dropzone>
          <h2>first</h2>
          <Droppable
            droppableId="first"
            direction="horizontal"
          >
            {(provided) => (
              <div
                className="first"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {data.map((item, idx) => (
                  <DropItem
                    item={item}
                    idx={idx}
                    key={item.id}
                    onDelete={deleteItemHandler}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Dropzone>
      </DragDropContext>
    </Container>
  );
};

export default OneBlockHoizontalDnd;
